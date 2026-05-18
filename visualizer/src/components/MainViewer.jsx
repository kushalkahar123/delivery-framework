import React from 'react';
import { LayoutTemplate, Video, MessageSquare, FileText, PenTool } from 'lucide-react';
import NotionSimulator from './simulators/NotionSimulator';
import MeetingSimulator from './simulators/MeetingSimulator';
import CliqSimulator from './simulators/CliqSimulator';
import MailSimulator from './simulators/MailSimulator';
import FigmaSimulator from './simulators/FigmaSimulator';

export default function MainViewer({ event }) {
  if (!event) {
    return (
      <div className="viewer-container">
        <div className="empty-state">Select an event to view the simulated artifact.</div>
      </div>
    );
  }

  const formatLower = event.format.toLowerCase();

  const renderSimulator = () => {
    if (formatLower.includes('notion')) {
      return <NotionSimulator event={event} />;
    }
    if (formatLower.includes('meeting')) {
      return <MeetingSimulator event={event} />;
    }
    if (formatLower.includes('cliq')) {
      return <CliqSimulator event={event} />;
    }
    if (formatLower.includes('mail')) {
      return <MailSimulator event={event} />;
    }
    if (formatLower.includes('figma')) {
      return <FigmaSimulator event={event} />;
    }
    
    // Fallback if we don't have a specific simulator
    return (
      <div style={{ padding: '24px', color: '#A3A3A3', textAlign: 'center' }}>
        <FileText size={48} style={{ opacity: 0.5, margin: '0 auto 16px' }} />
        <h3>Artifact: {event.artifactPath}</h3>
        <p>Simulation not available for format: {event.format}</p>
      </div>
    );
  };

  const getIcon = () => {
    if (formatLower.includes('notion')) return <LayoutTemplate size={18} />;
    if (formatLower.includes('meeting')) return <Video size={18} />;
    if (formatLower.includes('cliq')) return <MessageSquare size={18} />;
    if (formatLower.includes('mail')) return <FileText size={18} />;
    if (formatLower.includes('figma')) return <PenTool size={18} />;
    return <FileText size={18} />;
  };

  return (
    <div className="viewer-container">
      <div className="simulator-wrapper" key={event.id}>
        <div className="sim-header">
          {getIcon()}
          <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{event.format}</span>
          <span style={{ color: '#666', margin: '0 8px' }}>/</span>
          <span style={{ color: '#A3A3A3', fontSize: '0.85rem' }}>{event.title}</span>
        </div>
        <div className="sim-content">
          {renderSimulator()}
        </div>
      </div>
    </div>
  );
}
