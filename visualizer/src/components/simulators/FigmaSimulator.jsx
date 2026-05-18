import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MousePointer2, Frame, Type, Square, MessageCircle, Play } from 'lucide-react';

export default function FigmaSimulator({ event }) {
  const content = event.artifactContent || '';

  return (
    <div className="figma-layout">
      <div className="figma-toolbar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: '20px', color: '#A3A3A3' }}>
        <div style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#F24E1E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', marginBottom: '16px' }}>F</div>

        <MousePointer2 size={18} color="#FFF" />
        <Frame size={18} />
        <Square size={18} />
        <Type size={18} />
        <MessageCircle size={18} />
      </div>

      <div style={{ width: '240px', backgroundColor: '#2C2C2C', borderRight: '1px solid #111', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #111', color: '#FFF', fontWeight: 500, fontSize: '0.85rem' }}>
          Layers
        </div>
        <div style={{ padding: '16px', color: '#A3A3A3', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Frame size={14} /> {event.title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '16px', color: '#FFF' }}><Square size={14} /> Frame 1</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '16px' }}><Square size={14} /> Frame 2</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '16px' }}><Square size={14} /> Annotations</div>
        </div>
      </div>

      <div className="figma-canvas">
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: '12px', zIndex: 2 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#4F46E5', border: '2px solid #2C2C2C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>G</div>
          <div style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#10B981', border: '2px solid #2C2C2C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', marginLeft: '-16px' }}>K</div>
          <div style={{ padding: '6px 12px', backgroundColor: '#0D99FF', borderRadius: '4px', color: '#FFF', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}><Play size={14} fill="white" /> Present</div>
        </div>

        <div className="figma-frame">
          {content ? (
            <div className="markdown-content figma-frame-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 600 }}>{event.title}</h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>Figma file — no exported content available.</p>
            </>
          )}
        </div>
      </div>

      <div style={{ width: '240px', backgroundColor: '#2C2C2C', borderLeft: '1px solid #111' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #111', color: '#FFF', fontWeight: 500, fontSize: '0.85rem' }}>
          Design
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A3A3A3', fontSize: '0.8rem', marginBottom: '16px' }}>
            <span>X <span style={{ color: '#FFF', marginLeft: '4px' }}>124</span></span>
            <span>Y <span style={{ color: '#FFF', marginLeft: '4px' }}>382</span></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A3A3A3', fontSize: '0.8rem', marginBottom: '24px' }}>
            <span>W <span style={{ color: '#FFF', marginLeft: '4px' }}>800</span></span>
            <span>H <span style={{ color: '#FFF', marginLeft: '4px' }}>600</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
