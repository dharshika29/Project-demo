import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      {/* ── 1. Maison Guarantees Bar ── */}
      <div className={styles.guaranteesBar}>
        <div className={styles.guaranteesInner}>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>✦</span>
            <div>
              <p className={styles.guaranteeTitle}>Certified Heirloom Silks</p>
              <p className={styles.guaranteeSub}>100% Tested Gold Zari &amp; Handlooms</p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>✈️</span>
            <div>
              <p className={styles.guaranteeTitle}>White-Glove Global Transit</p>
              <p className={styles.guaranteeSub}>Complimentary Insured Courier ($500+)</p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>🕊️</span>
            <div>
              <p className={styles.guaranteeTitle}>Living-Wage Artisan Guilds</p>
              <p className={styles.guaranteeSub}>Ethical Sericulture &amp; Zero Waste</p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>🔒</span>
            <div>
              <p className={styles.guaranteeTitle}>Bank-Grade 256-Bit Checkout</p>
              <p className={styles.guaranteeSub}>All Duties &amp; Customs Prepaid (DDP)</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. VIP Inner Circle Newsletter Strip ── */}
      <div className={styles.newsletterStrip}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterText}>
            <span className={styles.newsletterIcon}>✨</span>
            <div>
              <h3 className={styles.newsletterTitle}>Join The Atelier Inner Circle</h3>
              <p className={styles.newsletterSub}>
                Receive private invitations to Grand Palais presentations, secret capsule drops, and bespoke salon previews.
              </p>
            </div>
          </div>

          {subscribed ? (
            <div className={styles.subscribedMsg}>
              ✓ Bienvenue. Your private invitation is en route to your inbox.
            </div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                className={styles.newsletterInput}
                placeholder="Enter your VIP email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>
                Request Access ✦
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── 3. Main Footer Body ── */}
      <div className={styles.footerBody}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.footerLogo}>
              <span className={styles.logoMark}>✦</span>
              <span className={styles.logoText}>
                AURA
                <em>COUTURE</em>
              </span>
            </Link>

            <p className={styles.brandTagline}>
              Where ancient handloom craftsmanship meets modern architectural couture.
              Every gown is a sculpted heirloom, born in our Milan atelier and woven with ancestral reverence.
            </p>

            <div className={styles.salonCities}>
              Flagship Salons: Milan • Paris • London • New York • Mumbai
            </div>

            <div className={styles.socialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
                title="Follow our Haute Couture Runway on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="Pinterest"
                title="Explore our Moodboards on Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label="YouTube"
                title="Watch Runway Salon Films on YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Couture Collections</h5>
            <ul className={styles.linkList}>
              <li>
                <Link to="/evening-gowns" className={styles.footerLink}>
                  Evening Gowns
                </Link>
              </li>
              <li>
                <Link to="/silk-festive" className={styles.footerLink}>
                  Silk &amp; Festive Heirlooms
                </Link>
              </li>
              <li>
                <Link to="/summer-maxi" className={styles.footerLink}>
                  Summer Maxi Dresses
                </Link>
              </li>
              <li>
                <Link to="/cocktail-sparkle" className={styles.footerLink}>
                  Cocktail Sparkle
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className={styles.footerLink}>
                  New Arrivals <span className={styles.newPill}>NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className={styles.footerLink}>
                  Grand Palais Lookbook
                </Link>
              </li>
              <li>
                <Link to="/sale" className={styles.footerLink}>
                  Atelier Archives <span className={styles.salePill}>UP TO 40%</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Maison & Craft */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Maison &amp; Craft</h5>
            <ul className={styles.linkList}>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  Our Milan Atelier
                </Link>
              </li>
              <li>
                <Link to="/blog" className={styles.footerLink}>
                  Editorial Gazette
                </Link>
              </li>
              <li>
                <Link to="/bespoke" className={styles.footerLink}>
                  Bespoke Commissions ✦
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className={styles.footerLink}>
                  Living Heritage Charter
                </Link>
              </li>
              <li>
                <Link to="/press" className={styles.footerLink}>
                  Press &amp; Media Room
                </Link>
              </li>
              <li>
                <Link to="/careers" className={styles.footerLink}>
                  Careers &amp; Guild
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Contact Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Services */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Customer Care</h5>
            <ul className={styles.linkList}>
              <li>
                <Link to="/size-guide" className={styles.footerLink}>
                  Size &amp; Fit Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className={styles.footerLink}>
                  White-Glove Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className={styles.footerLink}>
                  Returns &amp; Exchanges
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className={styles.footerLink}>
                  Heirloom Fabric Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className={styles.footerLink}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/track-order" className={styles.footerLink}>
                  Track My Order 📦
                </Link>
              </li>
            </ul>

            <div className={styles.conciergeInfoBox}>
              <p className={styles.contactLine}>✉ concierge@auracouture.com</p>
              <p className={styles.contactLine}>📞 +39 02 1234 5678 (Milan HQ)</p>
              <div className={styles.statusOnline}>
                <span className={styles.pulseDot}></span>
                <span>Private Styling Concierge Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Bottom Utility Bar ── */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Aura Couture S.r.l. — Milan, Paris &amp; London. All Rights Reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.legalDot}>·</span>
            <Link to="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <span className={styles.legalDot}>·</span>
            <Link to="/cookies" className={styles.legalLink}>
              Cookie Preferences
            </Link>
          </div>

          <div className={styles.bottomRightActions}>
            <select
              className={styles.currencySelect}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              title="Select Regional Currency"
            >
              <option value="USD ($)">USD ($)</option>
              <option value="EUR (€)">EUR (€)</option>
              <option value="GBP (£)">GBP (£)</option>
              <option value="INR (₹)">INR (₹)</option>
              <option value="AED (د.إ)">AED (د.إ)</option>
            </select>

            <button
              className={styles.backToTopBtn}
              onClick={scrollToTop}
              title="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>

          <div className={styles.paymentIcons}>
            <span className={styles.payIcon}>VISA</span>
            <span className={styles.payIcon}>MASTERCARD</span>
            <span className={styles.payIcon}>AMEX</span>
            <span className={styles.payIcon}>PAYPAL</span>
            <span className={styles.payIcon}>APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
