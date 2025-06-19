import React, { useState } from 'react';
import Sidebar from '../tradePortal/Sidebar';
import Navbar from '../tradePortal/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = (path) => navigate(path);
  const handleToggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="dashboard-root">
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <div className="dashboard-container">
        <Sidebar onNavigate={handleNavigate} sidebarOpen={sidebarOpen} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
