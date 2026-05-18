import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText, Download, Printer, ZoomIn, ZoomOut } from 'lucide-react';

export default function PDFSimulator({ event }) {
  const content = event.artifactContent || `# ${event.title}\n\n*PDF content not available.*`;
  const filename = (event.artifactPath || 'document').split('/').pop().replace(/\.md$/, '');

  return (
    <div className="pdf-layout">
      <div className="pdf-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D1D5DB', fontSize: '0.85rem' }}>
          <FileText size={16} color="#EF4444" />
          <span>{filename}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#9CA3AF' }}>
          <ZoomOut size={16} style={{ cursor: 'pointer' }} />
          <span style={{ fontSize: '0.8rem' }}>100%</span>
          <ZoomIn size={16} style={{ cursor: 'pointer' }} />
          <div style={{ width: 1, height: 16, backgroundColor: '#374151' }} />
          <Printer size={16} style={{ cursor: 'pointer' }} />
          <Download size={16} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="pdf-viewport">
        <div className="pdf-page">
          <div className="markdown-content pdf-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
          <div className="pdf-page-footer">Page 1 of 1 · {filename}.pdf</div>
        </div>
      </div>
    </div>
  );
}
