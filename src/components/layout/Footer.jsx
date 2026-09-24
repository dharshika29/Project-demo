import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} Project Demo. Clean React Architecture.</p>
        <p className={styles.footerSubtext}>Built with Vite, React & Modular Best Practices</p>
      </div>
    </footer>
  );
}
