import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar({ activePage, setActivePage, cartCount = 0 }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand} onClick={() => setActivePage('home')}>
          <div className={styles.navbarLogoIcon}>✨</div>
          <div className={styles.brandGroup}>
            <span className={styles.brandTitle}>AURA</span>
            <span className={styles.brandSubtitle}>COUTURE</span>
          </div>
        </div>

        <nav className={styles.navbarLinks}>
          <button
            className={`${styles.navLink} ${activePage === 'home' ? styles.active : ''}`}
            onClick={() => setActivePage('home')}
          >
            Collections
          </button>
          <button
            className={`${styles.navLink} ${activePage === 'about' ? styles.active : ''}`}
            onClick={() => setActivePage('about')}
          >
            Structure Guide
          </button>
        </nav>

        <div className={styles.navbarActions}>
          <div className={styles.cartBtn} title="Shopping Bag">
            <span className={styles.cartIcon}>🛍️</span>
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
          <button className={styles.themeToggle} onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
