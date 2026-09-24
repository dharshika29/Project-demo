import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar({ activePage, setActivePage }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand} onClick={() => setActivePage('home')}>
          <div className={styles.navbarLogoIcon}>⚡</div>
          <span>Project Demo</span>
        </div>

        <nav className={styles.navbarLinks}>
          <button
            className={`${styles.navLink} ${activePage === 'home' ? styles.active : ''}`}
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
          <button
            className={`${styles.navLink} ${activePage === 'about' ? styles.active : ''}`}
            onClick={() => setActivePage('about')}
          >
            Structure Guide
          </button>
        </nav>

        <div className={styles.navbarActions}>
          <button className={styles.themeToggle} onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
