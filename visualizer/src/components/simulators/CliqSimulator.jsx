import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MessageSquare, Hash, Users, Bell, Search, Paperclip, Send, Smile } from 'lucide-react';

function getAvatarColor(name) {
  const colors = ['#4F46E5', '#059669', '#D97706', '#DC2626', '#7C3AED', '#DB2777', '#0891B2'];
  let hash = 0;
  if (!name) return colors[0];
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function CliqShell({ children, date }) {
  return (
    <div className="cliq-layout">
      <div className="cliq-sidebar">
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '24px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare /> Zoho Cliq
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', marginBottom: '12px' }}>Channels</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#A3A3A3' }}><Hash size={16} /> general</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#FFF', background: '#27272A', borderRadius: '4px', margin: '0 -8px', paddingLeft: '8px' }}><Hash size={16} /> prj-loomwell</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#A3A3A3' }}><Hash size={16} /> design-team</div>
        </div>
        
        <div>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', marginBottom: '12px' }}>Direct Messages</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#A3A3A3' }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#10B981' }}></div>
            Kushal Kahar
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#A3A3A3' }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#10B981' }}></div>
            Gerwin Machado
          </div>
        </div>
      </div>

      <div className="cliq-main">
        <div style={{ height: '60px', borderBottom: '1px solid #262626', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Hash size={20} color="#666" />
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#FFF' }}>prj-loomwell</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', color: '#A3A3A3' }}>
            <Search size={20} />
            <Bell size={20} />
          </div>
        </div>

        <div className="cliq-messages">
          <div style={{ textAlign: 'center', margin: '24px 0', color: '#666', fontSize: '0.8rem' }}>
            {date}
          </div>
          {children}
        </div>

        <div className="cliq-input-area">
          <div style={{ position: 'relative' }}>
            <input type="text" className="cliq-input" placeholder="Message #prj-loomwell..." readOnly />
            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '12px', color: '#666' }}>
              <Smile size={20} />
              <Paperclip size={20} />
              <Send size={20} color="#4F46E5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ sender, time, content }) {
  const initial = sender ? sender.charAt(0).toUpperCase() : '?';
  const avatarColor = getAvatarColor(sender);

  return (
    <div className="cliq-message">
      <div className="cliq-avatar" style={{ backgroundColor: avatarColor }}>{initial}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontWeight: 'bold', color: '#FFF' }}>{sender}</span>
          <span style={{ fontSize: '0.75rem', color: '#666' }}>{time}</span>
        </div>
        <div className="cliq-bubble markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default function CliqSimulator({ event }) {
  // Multi-message day view
  if (event.cliqMessages && event.cliqMessages.length > 0) {
    return (
      <CliqShell date={event.date}>
        {event.cliqMessages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            sender={msg.sender}
            time={msg.time}
            content={msg.content}
          />
        ))}
      </CliqShell>
    );
  }

  // Fallback for non-decomposed Cliq events
  const content = event.artifactContent || '*No Cliq history found for this event.*';

  return (
    <CliqShell date={event.date}>
      <MessageBubble sender="System" time="12:00 PM" content={content} />
    </CliqShell>
  );
}
