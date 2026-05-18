import React from 'react';
import { Calendar, FileText, MessageSquare, Video, PenTool, LayoutTemplate, Layers } from 'lucide-react';

export default function TimelineSidebar({ events, selectedEventId, onSelectEvent }) {
  // Group events by phase
  const phases = {};
  events.forEach(event => {
    if (!phases[event.phase]) {
      phases[event.phase] = [];
    }
    phases[event.phase].push(event);
  });

  const getFormatIcon = (format) => {
    const f = format.toLowerCase();
    if (f.includes('meeting')) return <Video size={14} />;
    if (f.includes('cliq')) return <MessageSquare size={14} />;
    if (f.includes('mail')) return <FileText size={14} />;
    if (f.includes('notion')) return <LayoutTemplate size={14} />;
    if (f.includes('figma')) return <PenTool size={14} />;
    return <Layers size={14} />;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Loomwell Simulation</h1>
        <p>craft-dc end-to-end engagement</p>
      </div>
      <div className="timeline">
        {Object.entries(phases).map(([phase, phaseEvents]) => (
          <div key={phase}>
            <div className="phase-header">{phase}</div>
            {phaseEvents.map((event) => (
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
