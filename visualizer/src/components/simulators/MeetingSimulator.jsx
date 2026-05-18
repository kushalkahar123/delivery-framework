import React from 'react';
import { Mic, Video as VideoIcon, MonitorUp, PhoneOff, Settings, Users, MessageSquare } from 'lucide-react';

export default function MeetingSimulator({ event }) {
  return (
    <div className="meeting-layout">
      <div className="meeting-grid">
        <div className="meeting-video main-speaker">
          <div style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontWeight: 'bold' }}>
            P
          </div>
          <div className="video-name">Priya (Loomwell)</div>
        </div>
        <div className="meeting-video">
          <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>
            K
          </div>
          <div className="video-name">Kushal Kahar (DC)</div>
        </div>
        {event.title.includes('all hands') && (
          <>
            <div className="meeting-video">
              <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>
                G
              </div>
              <div className="video-name">Gerwin Machado</div>
            </div>
            <div className="meeting-video">
              <div style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#EC4899', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>
                M
              </div>
              <div className="video-name">Marcus Chen</div>
            </div>
          </>
        )}
      </div>
      <div className="meeting-controls">
        <button className="control-btn"><Mic size={20} /></button>
        <button className="control-btn"><VideoIcon size={20} /></button>
        <button className="control-btn"><MonitorUp size={20} /></button>
        <button className="control-btn"><Users size={20} /></button>
        <button className="control-btn"><MessageSquare size={20} /></button>
        <button className="control-btn"><Settings size={20} /></button>
        <button className="control-btn end"><PhoneOff size={20} /></button>
      </div>
    </div>
  );
}
