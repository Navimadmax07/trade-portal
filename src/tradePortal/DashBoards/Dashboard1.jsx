import React, { useState } from "react";
import "./Dashboard1.css";

function DashBoard1() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      title: "Laying the foundation",
      btnClass: "purple",
      icon: (
        <svg className="milestone-svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M10 24c8-8 20-8 28 0" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="16" cy="24" r="3" fill="currentColor"/>
          <rect x="15" y="27" width="2" height="8" rx="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Starting the Export journey",
      btnClass: "green",
      icon: (
        <svg className="milestone-svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M24 10c6 8 8 12 8 14s-2 6-8 14" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M24 24l8-8" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Financing & Logistics",
      btnClass: "blue",
      icon: (
        <svg className="milestone-svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="10" y="18" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M24 18v-6" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="24" cy="34" r="2" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Completing the export cycle",
      btnClass: "orange",
      icon: (
        <svg className="milestone-svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="dashboard-root">
      {/* Top bar */}
      <header className="top-bar">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? "☰" : "☰"}
        </button>
        <div>
          <span className="quick-access">Quick Access</span>
          <span className="quick-help">Quick Help</span>
        </div>
        <div className="subscription-info">Subscription Expires In 28d 8h</div>
        <div className="user-avatar">
          <span role="img" aria-label="user">
            👤
          </span>
        </div>
      </header>
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className={`sidebar${sidebarOpen ? "" : " closed"}`}>
          <div className="logo-row">
            <img
              src="/LoginPageImages/IM LOGO 2.png"
              alt="Logo 1"
              className="logo-img"
            />
            <span className="logo-divider"></span>
            <span className="logo-text">
              <span className="trade">Trade</span>
              <span className="ai">.ai</span>
            </span>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="13" width="7" height="8" /><rect x="14" y="3" width="7" height="18" />
                  </svg>
                </span>
                <span className="sidebar-label">Dashboard</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <span className="sidebar-label">Export Readiness</span>
              </li>
              <li className="active">
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 12h18M12 3v18" />
                  </svg>
                </span>
                <span className="sidebar-label">Path to Export Success</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
                  </svg>
                </span>
                <span className="sidebar-label">Trade Experts</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M16 3v4M8 3v4" />
                  </svg>
                </span>
                <span className="sidebar-label">Buying Opportunities</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
                  </svg>
                </span>
                <span className="sidebar-label">Buyer Details</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M16 2v4M8 2v4" />
                  </svg>
                </span>
                <span className="sidebar-label">Exporters Database</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
                  </svg>
                </span>
                <span className="sidebar-label">Profile</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M16 3v4M8 3v4" />
                  </svg>
                </span>
                <span className="sidebar-label">Subscription</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M16 2v4M8 2v4" />
                  </svg>
                </span>
                <span className="sidebar-label">Resource Hub</span>
              </li>
              <li>
                <span className="sidebar-icon">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </span>
                <span className="sidebar-label">Help & Support</span>
              </li>
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className={`main-content${sidebarOpen ? "" : " full"}`}>
          {/* Export Path */}
          <section className="export-path">
            {/* Milestones */}
            <div className="milestones">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.title}
                  className={`milestone${activeMilestone === idx ? " active" : ""}`}
                  onClick={() => setActiveMilestone(idx)}
                  tabIndex={0}
                  onKeyPress={e => { if (e.key === "Enter") setActiveMilestone(idx); }}
                >
                  <div
                    className={`milestone-icon ${milestone.btnClass} ${
                      activeMilestone === idx ? "selected" : ""
                    }`}
                  >
                    {milestone.icon}
                  </div>
                  <div className={`milestone-title ${milestone.btnClass}`}>
                    {milestone.title}
                  </div>
                  <button className={`milestone-btn ${milestone.btnClass}`}>
                    Milestone {idx + 1}
                  </button>
                </div>
              ))}
            </div>
          </section>
          <div className="milestone-details">
            <h2>Milestone {activeMilestone + 1}</h2>
            <div className="modules">
              <div className="module">Module 1 : Basic introduction</div>
              <div className="module">Module 2 : Deep Knowladge</div>
              <div className="module">Module 3 : PDF & reference</div>
              <div className="module">Module 4 : Let's try</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashBoard1;