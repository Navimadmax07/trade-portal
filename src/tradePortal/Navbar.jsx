import React from 'react';
import './Navbar.css';

function Navbar({ onToggleSidebar }) {
  return (
    <header className="top-bar">
      <button
        className="sidebar-toggle"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        style={{ marginRight: '1rem', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: '#20405e' }}
      >
        ☰
      </button>
      <div>
        <span className="quick-access">Quick Access</span>
        <span className="quick-help">Quick Help</span>
      </div>
      <div className="subscription-info">Subscription Expires In 28d 8h</div>
      <div className="user-avatar">
        <span role="img" aria-label="user">👤</span>
      </div>
    </header>
  );
}

export default Navbar;
