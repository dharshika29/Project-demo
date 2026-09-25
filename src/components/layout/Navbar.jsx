import React, { useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

// Collections dropdown items — all category names from the e-commerce store
const COLLECTIONS_DROPDOWN = [
  {
    label: 'Evening Gowns',
    desc: 'Red carpet silk & tulle silhouettes',
    icon: '👗'
  },
  {
    label: 'Silk & Festive',
    desc: 'Banarasi, zardozi & bridal luxury',
    icon: '✨'
  },
  {
    label: 'Summer Maxi',
    desc: 'Breezy linen, silk & floral maxis',
    icon: '🌸'
  },
  {
    label: 'Cocktail Sparkle',
    desc: 'Sequin, feather & crystal party dresses',
    icon: '💎'
  },
  {
    label: 'New Arrivals',
    desc: 'Just dropped from runway 2026',
    icon: '🆕'
  },
  {
    label: 'Sale — Up to 40% Off',
    desc: 'Use code AURA40 at checkout',
    icon: '🏷️',
    highlight: true
  }
];

const NAV_LINKS = [
  { label: 'Collections', page: 'collections', hasDropdown: true },
  { label: 'New Arrivals', page: 'new-arrivals' },
  { label: 'Lookbook', page: 'lookbook' },
  { label: 'On Sale', page: 'sale', badge: 'SALE' },
  { label: 'Our Story', page: 'about' }
];

export default function Navbar({ activePage, setActivePage, cartCount = 0, wishlistCount = 0, onCategoryFilter }) {
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);

  const handleNavClick = (link, categoryLabel) => {
    setActivePage(link.page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (categoryLabel && onCategoryFilter) {
      onCategoryFilter(categoryLabel);
    }
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 180);
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
              <div
                key={link.label}
                className={styles.navItem}
                onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
              >
                <button
                  className={`${styles.navLink} ${
                    activePage === 'home' && link.page === 'home' && link.label === 'Collections'
                      ? styles.active
                      : activePage === link.page && link.page === 'about'
                      ? styles.active
                      : ''
                  }`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                  {link.badge && (
                    <span className={styles.navBadge}>{link.badge}</span>
                  )}
                  {link.hasDropdown && (
                    <span className={`${styles.dropdownArrow} ${dropdownOpen ? styles.arrowUp : ''}`}>
                      ▾
                    </span>
                  )}
                </button>

                {/* Dropdown Menu for Collections */}
                {link.hasDropdown && dropdownOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>Browse by Category</div>
                    {COLLECTIONS_DROPDOWN.map((item) => (
                      <button
                        key={item.label}
                        className={`${styles.dropdownItem} ${item.highlight ? styles.dropdownItemHighlight : ''}`}
                        onClick={() => handleNavClick(link, item.label)}
                      >
                        <span className={styles.dropdownIcon}>{item.icon}</span>
                        <span className={styles.dropdownText}>
                          <span className={styles.dropdownLabel}>{item.label}</span>
                          <span className={styles.dropdownDesc}>{item.desc}</span>
                        </span>
                        <span className={styles.dropdownArrowRight}>›</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
            {/* Mobile - Collection categories directly */}
            <div className={styles.mobileSectionLabel}>Collections</div>
            {COLLECTIONS_DROPDOWN.map((item) => (
              <button
                key={item.label}
                className={`${styles.mobileNavLink} ${item.highlight ? styles.mobileNavLinkHighlight : ''}`}
                onClick={() => handleNavClick(NAV_LINKS[0], item.label)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className={styles.mobileDivider} />
            <button
              className={styles.mobileNavLink}
              onClick={() => handleNavClick({ page: 'lookbook' })}
            >
              📖 Lookbook
            </button>
            <button
              className={styles.mobileNavLink}
              onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }}
            >
              💬 Our Story
            </button>
          </div>
        )}
      </header>
    </>
  );
}
