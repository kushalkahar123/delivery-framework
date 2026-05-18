import React from 'react';
import { Calendar, FileText, MessageSquare, Video, PenTool, LayoutTemplate, Layers, FileType2 } from 'lucide-react';

export default function TimelineSidebar({ events, selectedEventId, onSelectEvent }) {
  // Split events into phase-ordered and meta groups
  const phaseEvents = events.filter(e => !e.meta);
  const metaEvents = events.filter(e => e.meta);

  // Group phase events by phase (preserves insertion order)
  const phases = {};
  phaseEvents.forEach(event => {
    if (!phases[event.phase]) {
      phases[event.phase] = [];
    }
    phases[event.phase].push(event);
  });

  const getFormatIcon = (format) => {
    const f = format.toLowerCase();
    if (f.includes('pdf')) return <FileType2 size={14} />;
    if (f.includes('meeting')) return <Video size={14} />;
    if (f.includes('cliq')) return <MessageSquare size={14} />;
    if (f.includes('mail')) return <FileText size={14} />;
    if (f.includes('notion')) return <LayoutTemplate size={14} />;
    if (f.includes('figma')) return <PenTool size={14} />;
    return <Layers size={14} />;
  };

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className={`event-card ${selectedEventId === event.id ? 'active' : ''}`}
      onClick={() => onSelectEvent(event.id)}
    >
      <div className="event-date">
        <Calendar size={10} style={{ display: 'inline', marginRight: '4px' }} />
        {event.date}
      </div>
      <div className="event-title">{event.title}</div>
      <div className="event-meta">
        <span className="badge format" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {getFormatIcon(event.format)}
          {event.format}
        </span>
      </div>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Loomwell Simulation</h1>
        <p>craft-dc end-to-end engagement</p>
      </div>
      <div className="timeline">
        {Object.entries(phases).map(([phase, phaseEventsList]) => (
          <div key={phase}>
            <div className="phase-header">{phase}</div>
            {phaseEventsList.map(renderEventCard)}
          </div>
        ))}
        {metaEvents.length > 0 && (
          <div>
            <div className="meta-divider" />
            <div className="phase-header phase-header-meta">Meta</div>
            {metaEvents.map(renderEventCard)}
          </div>
        )}
      </div>
    </div>
  );
}
