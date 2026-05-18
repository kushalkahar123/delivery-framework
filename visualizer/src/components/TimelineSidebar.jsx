import React from 'react';
import { Calendar, FileText, MessageSquare, Video, PenTool, LayoutTemplate, Layers, FileType2 } from 'lucide-react';

const FORMAT_STYLES = {
  pdf:     { icon: FileType2,      label: 'PDF',     color: '#EF4444', tint: 'rgba(239, 68, 68, 0.12)' },
  meeting: { icon: Video,          label: 'Meeting', color: '#10B981', tint: 'rgba(16, 185, 129, 0.12)' },
  cliq:    { icon: MessageSquare,  label: 'Cliq',    color: '#F59E0B', tint: 'rgba(245, 158, 11, 0.12)' },
  mail:    { icon: FileText,       label: 'Mail',    color: '#3B82F6', tint: 'rgba(59, 130, 246, 0.14)' },
  notion:  { icon: LayoutTemplate, label: 'Notion',  color: '#E5E7EB', tint: 'rgba(229, 231, 235, 0.10)' },
  figma:   { icon: PenTool,        label: 'Figma',   color: '#F24E1E', tint: 'rgba(242, 78, 30, 0.14)' },
  default: { icon: Layers,         label: 'Other',   color: '#9CA3AF', tint: 'rgba(156, 163, 175, 0.10)' },
};

const resolveFormat = (format) => {
  const f = (format || '').toLowerCase();
  if (f.includes('pdf')) return FORMAT_STYLES.pdf;
  if (f.includes('meeting')) return FORMAT_STYLES.meeting;
  if (f.includes('cliq')) return FORMAT_STYLES.cliq;
  if (f.includes('mail')) return FORMAT_STYLES.mail;
  if (f.includes('figma')) return FORMAT_STYLES.figma;
  if (f.includes('notion')) return FORMAT_STYLES.notion;
  return FORMAT_STYLES.default;
};

export default function TimelineSidebar({ events, selectedEventId, onSelectEvent }) {
  const phaseEvents = events.filter(e => !e.meta);
  const metaEvents = events.filter(e => e.meta);

  const phases = {};
  phaseEvents.forEach(event => {
    if (!phases[event.phase]) phases[event.phase] = [];
    phases[event.phase].push(event);
  });

  const renderEventCard = (event) => {
    const style = resolveFormat(event.format);
    const Icon = style.icon;
    const isActive = selectedEventId === event.id;

    return (
      <div
        key={event.id}
        className={`event-card ${isActive ? 'active' : ''}`}
        onClick={() => onSelectEvent(event.id)}
        style={{ borderLeftColor: style.color }}
      >
        <div
          className="event-format-tile"
          style={{ backgroundColor: style.tint, color: style.color, borderColor: style.color }}
        >
          <Icon size={18} strokeWidth={2} />
        </div>
        <div className="event-body">
          <div className="event-date">
            <Calendar size={10} style={{ display: 'inline', marginRight: '4px' }} />
            {event.date}
          </div>
          <div className="event-title">{event.title}</div>
          <div className="event-format-label" style={{ color: style.color }}>
            {event.format}
          </div>
        </div>
      </div>
    );
  };

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
