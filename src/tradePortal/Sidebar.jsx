import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaClipboardList, FaRoad, FaUserTie, FaShoppingCart, FaAddressBook, FaDatabase, FaUser, FaRegCreditCard, FaBook, FaQuestionCircle } from 'react-icons/fa';

function Sidebar({ onNavigate, sidebarOpen }) {
  return (
    <aside className={`sidebar${sidebarOpen ? '' : ' closed'}`}>
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
        <div>
          <button className="sidebar-btn" onClick={() => onNavigate('/db')}><span className="sidebar-icon"><FaTachometerAlt /></span><span className="sidebar-label">Dashboard</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/export-readiness')}><span className="sidebar-icon"><FaClipboardList /></span><span className="sidebar-label">Export Readiness</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/dashboard1')}><span className="sidebar-icon"><FaRoad /></span><span className="sidebar-label">Path to Export Success</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/trade-experts')}><span className="sidebar-icon"><FaUserTie /></span><span className="sidebar-label">Trade Experts</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/buying-opportunities')}><span className="sidebar-icon"><FaShoppingCart /></span><span className="sidebar-label">Buying Opportunities</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/buyer-details')}><span className="sidebar-icon"><FaAddressBook /></span><span className="sidebar-label">Buyer Details</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/exporters-database')}><span className="sidebar-icon"><FaDatabase /></span><span className="sidebar-label">Exporters Database</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/profile')}><span className="sidebar-icon"><FaUser /></span><span className="sidebar-label">Profile</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/subscription')}><span className="sidebar-icon"><FaRegCreditCard /></span><span className="sidebar-label">Subscription</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/resource-hub')}><span className="sidebar-icon"><FaBook /></span><span className="sidebar-label">Resource Hub</span></button>
          <button className="sidebar-btn" onClick={() => onNavigate('/help-support')}><span className="sidebar-icon"><FaQuestionCircle /></span><span className="sidebar-label">Help & Support</span></button>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
