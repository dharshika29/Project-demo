import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Collections', page: 'home', anchor: '#collections' },
  { label: 'New Arrivals', page: 'home', anchor: '#collections' },
  { label: 'Lookbook', page: 'home', anchor: '#spotlight' },
  { label: 'On Sale', page: 'home', anchor: '#collections', badge: 'SALE' },
  { label: 'Our Story', page: 'about', anchor: null }
];

export default function Navbar({ activePage, setActivePage, cartCount = 0, wishlistCount = 0 }) {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setActivePage(link.page);
    setMobileMenuOpen(false);
    if (link.anchor && link.page === 'home') {
      setTimeout(() => {
        const el = document.querySelector(link.anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Top Promo Strip */}
      <div className={styles.promoStrip}>
        <span>🎁 Free Express Shipping on Orders Over $150 &nbsp;|&nbsp; Use code <strong>AURA40</strong> for 40% OFF</span>
      </div>

      <header className={styles.navbar}>
        <div className={styles.navbarContainer}>

          {/* Brand */}
          <div className={styles.navbarBrand} onClick={() => setActivePage('home')}>
            <div className={styles.navbarLogoIcon}>✦</div>
            <div className={styles.brandGroup}>
              <span className={styles.brandTitle}>AURA</span>
              <span className={styles.brandSubtitle}>COUTURE</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className={styles.navbarLinks}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className={`${styles.navLink} ${
                  activePage === link.page && !link.anchor ? styles.active : ''
                } ${link.page === 'home' && activePage === 'home' && link.label === 'Collections' ? styles.active : ''}`}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
                {link.badge && (
                  <span className={styles.navBadge}>{link.badge}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.navbarActions}>
            {/* Search */}
            <div className={`${styles.searchWrapper} ${searchOpen ? styles.searchOpen : ''}`}>
              {searchOpen && (
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search dresses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  onBlur={() => { setSearchOpen(false); setSearchTerm(''); }}
                />
              )}
              <button
                className={styles.iconBtn}
                onClick={() => setSearchOpen((prev) => !prev)}
                title="Search"
              >
                🔍
              </button>
            </div>

            {/* Wishlist */}
            <div className={styles.iconBtnWrapper} title="Wishlist">
              <button className={styles.iconBtn}>🤍</button>
              {wishlistCount > 0 && (
                <span className={styles.iconBadge}>{wishlistCount}</span>
              )}
            </div>

            {/* Shopping Bag */}
            <div className={styles.iconBtnWrapper} title="Shopping Bag">
              <button className={styles.iconBtn}>🛍️</button>
              {cartCount > 0 && (
                <span className={styles.iconBadge}>{cartCount}</span>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Mobile Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className={styles.mobileNavLink}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
                {link.badge && (
                  <span className={styles.navBadgeMobile}>{link.badge}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
