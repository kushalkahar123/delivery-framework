import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Mail, Send, Inbox, Star, Clock, FileText, Reply, MoreVertical } from 'lucide-react';

export default function MailSimulator({ event }) {
  const content = event.artifactContent || `*Email content not found in simulation artifacts.*`;
  const subject = event.title;

  return (
    <div className="mail-layout">
      <div className="mail-sidebar">
        <button style={{ width: '100%', padding: '12px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <Mail size={16} /> Compose
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#A3A3A3', fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFF', fontWeight: 500 }}><Inbox size={18} /> Inbox</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Send size={18} /> Sent</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Star size={18} /> Starred</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Clock size={18} /> Snoozed</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><FileText size={18} /> Drafts</div>
        </div>
      </div>
      
      <div className="mail-list">
        <div className="mail-item active">
          <div className="mail-item-sender">Priya Raman (Loomwell)</div>
          <div className="mail-item-subject">{subject}</div>
          <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {content.substring(0, 50)}...
          </div>
        </div>
        <div className="mail-item">
          <div className="mail-item-sender">Devon Reyes</div>
          <div className="mail-item-subject">Re: Architecture context</div>
          <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Let me pull together the repos...</div>
        </div>
      </div>
      
      <div className="mail-viewer">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #262626', paddingBottom: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#FFF' }}>{subject}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#4F46E5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>P</div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>Priya Raman <span style={{ color: '#666', fontWeight: 'normal', fontSize: '0.85rem' }}>&lt;priya@loomwell.com&gt;</span></div>
                <div style={{ fontSize: '0.8rem', color: '#A3A3A3' }}>To: you <span style={{ marginLeft: 8 }}>{event.date}</span></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', color: '#A3A3A3' }}>
            <Reply size={20} cursor="pointer" />
            <MoreVertical size={20} cursor="pointer" />
          </div>
        </div>
        
        <div className="markdown-content" style={{ fontSize: '0.95rem' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
