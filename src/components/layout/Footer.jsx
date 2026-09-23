import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Project Demo. Clean React Architecture.</p>
        <p className="footer-subtext">Built with Vite, React & Modular Best Practices</p>
      </div>
    </footer>
  );
}
