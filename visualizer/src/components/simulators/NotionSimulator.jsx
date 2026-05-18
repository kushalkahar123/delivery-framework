import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText, ChevronRight, Settings, Users, Layout, Search, PlusCircle } from 'lucide-react';

export default function NotionSimulator({ event }) {
  const content = event.artifactContent || `# ${event.title}\n\n*No artifact content available for this event.*`;

  return (
    <div className="notion-layout">
      <div className="notion-sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: '#FFF' }}>
          <div style={{ width: 20, height: 20, background: '#FFF', color: '#000', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 'bold' }}>L</div>
          <span>Loomwell workspace</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Search size={14} /> Search</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Settings size={14} /> Settings & members</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><PlusCircle size={14} /> New page</div>
          
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666', marginTop: '16px', marginBottom: '8px' }}>Private</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', background: '#262626', padding: '4px 8px', borderRadius: 4, margin: '0 -8px' }}>
            <ChevronRight size={14} />
            <FileText size={14} />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{event.artifactPath ? event.artifactPath.split('/').pop() : 'Untitled'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <ChevronRight size={14} />
            <FileText size={14} />
            <span>00-intake</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
            <ChevronRight size={14} />
            <FileText size={14} />
            <span>p0-calibrate</span>
          </div>
        </div>
      </div>
      <div className="notion-main">
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
