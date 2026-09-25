import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const COLLECTIONS_DROPDOWN = [
  {
    label: 'Evening Gowns',
    desc: 'Red carpet silk & tulle silhouettes',
    icon: '👗',
    page: 'evening-gowns'
  },
  {
    label: 'Silk & Festive',
    desc: 'Banarasi, zardozi & bridal luxury',
    icon: '✨',
    page: 'silk-festive'
  },
  {
    label: 'Summer Maxi',
    desc: 'Breezy linen, silk & floral maxis',
    icon: '🌸',
    page: 'summer-maxi'
  },
  {
    label: 'Cocktail Sparkle',
    desc: 'Sequin, feather & crystal party dresses',
    icon: '💎',
    page: 'cocktail-sparkle'
  },
  {
    label: 'New Arrivals',
    desc: 'Just dropped from runway 2026',
    icon: '🆕',
    page: 'new-arrivals'
  },
  {
    label: 'Sale — Up to 40% Off',
    desc: 'Use code AURA40 at checkout',
    icon: '🏷️',
    highlight: true,
    page: 'sale'
  }
];

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Collections', page: 'collections', hasDropdown: true },
  { label: 'About Us', page: 'about' },
  { label: 'Contact Us', page: 'contact' }
];

export default function Navbar({ cartCount = 0, wishlistCount = 0, onCategoryFilter }) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname.substring(1) || 'home';
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);

  const handleNavClick = (link) => {
    navigate(`/${link.page}`);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
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
                    activePage === link.page ? styles.active : ''
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
                        onClick={() => handleNavClick({ page: item.page })}
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
            <button
              className={styles.mobileNavLink}
              onClick={() => handleNavClick({ page: 'home' })}
            >
              🏠 Home
            </button>
            <div className={styles.mobileDivider} />
            <div className={styles.mobileSectionLabel}>Collections</div>
            {COLLECTIONS_DROPDOWN.map((item) => (
              <button
                key={item.label}
                className={`${styles.mobileNavLink} ${item.highlight ? styles.mobileNavLinkHighlight : ''}`}
                onClick={() => handleNavClick({ page: item.page })}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className={styles.mobileDivider} />
            <button
              className={styles.mobileNavLink}
              onClick={() => handleNavClick({ page: 'about' })}
            >
              📖 About Us
            </button>
            <button
              className={styles.mobileNavLink}
              onClick={() => handleNavClick({ page: 'contact' })}
            >
              💬 Contact Us
            </button>
          </div>
        )}
      </header>
    </>
  );
}
