import React, { useState } from "react";
import "./styles.css";

export default function StudentDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "exams", label: "Exams", icon: "📝" },
    { id: "results", label: "Results", icon: "📈" },
    { id: "schedule", label: "Schedule", icon: "📅" },
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Student Portal</h2>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <main className="main-content">
        <header className="content-header">
          <h1>{menuItems.find((item) => item.id === activeMenu)?.label}</h1>
          <div className="header-actions">
            <button className="notification-btn">🔔</button>
            <button className="profile-btn">👤 John Doe</button>
          </div>
        </header>
        <div className="content-body">
          <div className="welcome-message">
            <h2>Welcome to your Student Dashboard</h2>
            <p>Select a menu item from the sidebar to get started.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
