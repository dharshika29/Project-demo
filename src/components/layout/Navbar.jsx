import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setActivePage('home')}>
          <div className="navbar-logo-icon">⚡</div>
          <span className="navbar-title">Project Demo</span>
        </div>

        <nav className="navbar-links">
          <button
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => setActivePage('about')}
          >
            Structure Guide
          </button>
        </nav>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
