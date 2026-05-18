import { useState } from 'react';
import data from './data.json';
import TimelineSidebar from './components/TimelineSidebar';
import MainViewer from './components/MainViewer';

const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

function monthNameToNumber(name) {
  const n = MONTHS_FULL.indexOf(name);
  if (n !== -1) return n + 1;
  const s = MONTHS_SHORT.indexOf(name);
  if (s !== -1) return s + 1;
  return 1;
}

function formatDate(day, month, year) {
  return `${day} ${MONTHS_FULL[month - 1]} ${year}`;
}

function extractTime(dateTimeStr) {
  const m = dateTimeStr.match(/(\d{2}:\d{2})\s*$/);
  return m ? m[1] : dateTimeStr;
}

function parseParentDate(parentDateStr) {
  const match = parentDateStr.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (!match) return null;
  return {
    day: parseInt(match[1], 10),
    month: monthNameToNumber(match[2]),
    year: parseInt(match[3], 10)
  };
}

function normalizeDate(dateTimeStr, parentDate) {
  const parentParsed = parseParentDate(parentDate);
  const parentYear = parentParsed?.year || new Date().getFullYear();

  // Pattern 1: YYYY-MM-DD · HH:MM
  const isoMatch = dateTimeStr.match(/^(\d{4})-(\d{2})-(\d{2})\s*·\s*\d{2}:\d{2}$/);
  if (isoMatch) {
    const year = parseInt(isoMatch[1], 10);
    const month = parseInt(isoMatch[2], 10);
    const day = parseInt(isoMatch[3], 10);
    return {
      key: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      display: formatDate(day, month, year)
    };
  }

  // Pattern 2: DD MMM · HH:MM (e.g., "29 Apr · 15:11")
  const partialMatch = dateTimeStr.match(/^(\d{1,2})\s+([A-Za-z]{3,})\s*·\s*\d{2}:\d{2}$/);
  if (partialMatch) {
    const day = parseInt(partialMatch[1], 10);
    const month = monthNameToNumber(partialMatch[2]);
    return {
      key: `${parentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      display: formatDate(day, month, parentYear)
    };
  }

  // Pattern 3: HH:MM only (e.g., "09:08") — use parent date
  const timeOnlyMatch = dateTimeStr.match(/^\d{2}:\d{2}$/);
  if (timeOnlyMatch && parentParsed) {
    return {
      key: `${parentParsed.year}-${String(parentParsed.month).padStart(2, '0')}-${String(parentParsed.day).padStart(2, '0')}`,
      display: formatDate(parentParsed.day, parentParsed.month, parentParsed.year)
    };
  }

  // Fallback to parent date
  if (parentParsed) {
    return {
      key: `${parentParsed.year}-${String(parentParsed.month).padStart(2, '0')}-${String(parentParsed.day).padStart(2, '0')}`,
      display: formatDate(parentParsed.day, parentParsed.month, parentParsed.year)
    };
  }

  return { key: dateTimeStr, display: dateTimeStr };
}

function parseCliqMessages(event) {
  const content = event.artifactContent || '';
  if (!content.trim()) return [event];

  const parts = content.split(/(?=^\*\*[^*]+\*\*\s*·)/m);
  const messages = [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/^\*\*(.+?)\*\*\s*·\s*(.+?)(?:\r?\n|$)([\s\S]*)$/);
    if (match) {
      const sender = match[1].trim();
      const dateTimeStr = match[2].trim();
      let rawBody = match[3].trim();

      rawBody = rawBody.replace(/(?:\n\s*---\s*)+$/, '').trim();

      const messageContent = rawBody
        .split('\n')
        .map(line => line.replace(/^>\s?/, ''))
        .join('\n')
        .trim();

      if (sender && messageContent) {
        messages.push({ sender, dateTimeStr, messageContent });
      }
    }
  }

  if (messages.length === 0) return [event];

  // Group by day
  const dayGroups = {};

  for (const msg of messages) {
    const { key, display } = normalizeDate(msg.dateTimeStr, event.date);
    if (!dayGroups[key]) {
      dayGroups[key] = { display, messages: [] };
    }
    dayGroups[key].messages.push({
      sender: msg.sender,
      time: extractTime(msg.dateTimeStr),
      content: msg.messageContent
    });
  }

  // Sort days and messages within each day
  const sortedDayKeys = Object.keys(dayGroups).sort();

  return sortedDayKeys.map((dayKey, index) => {
    const group = dayGroups[dayKey];
    // Sort messages by time within the day
    group.messages.sort((a, b) => a.time.localeCompare(b.time));

    return {
      ...event,
      id: `${event.id}-day-${dayKey}`,
      date: group.display,
      cliqMessages: group.messages,
      // Clear artifactContent so CliqSimulator uses cliqMessages
      artifactContent: '',
    };
  });
}

function processEvents(events) {
  const processed = [];
  for (const event of events) {
    const formatLower = event.format.toLowerCase();
    if (formatLower.includes('cliq') && event.artifactContent) {
      const dayEvents = parseCliqMessages(event);
      processed.push(...dayEvents);
    } else {
      processed.push(event);
    }
  }
  return processed;
}

const allEvents = processEvents(data.events);

function App() {
  const [selectedEventId, setSelectedEventId] = useState(allEvents[0]?.id || null);

  const selectedEvent = allEvents.find(e => e.id === selectedEventId);

  return (
    <div className="app-container">
      <TimelineSidebar
        events={allEvents}
        selectedEventId={selectedEventId}
        onSelectEvent={setSelectedEventId}
      />
      <MainViewer event={selectedEvent} />
    </div>
  );
}

export default App;
