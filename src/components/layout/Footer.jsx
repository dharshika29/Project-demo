import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Strip */}
      <div className={styles.newsletterStrip}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterText}>
            <span className={styles.newsletterIcon}>✦</span>
            <div>
              <p className={styles.newsletterTitle}>Join The Inner Circle</p>
              <p className={styles.newsletterSub}>Exclusive drops, private sales & atelier previews — before anyone else.</p>
            </div>
          </div>
          {subscribed ? (
            <div className={styles.subscribedMsg}>✓ You're in. Welcome to the Atelier.</div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                className={styles.newsletterInput}
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Body */}
      <div className={styles.footerBody}>
        <div className={styles.footerGrid}>

          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <span className={styles.logoMark}>✦</span>
              <span className={styles.logoText}>AURA<br /><em>COUTURE</em></span>
            </div>
            <p className={styles.brandTagline}>
              Where heritage craftsmanship meets contemporary couture. Every piece is a hand-embroidered heirloom — born in our Milan atelier.
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
            <div className={styles.certBadges}>
              <span className={styles.certBadge}>🕊️ Ethical Silk</span>
              <span className={styles.certBadge}>✦ Artisan Made</span>
            </div>
          </div>

          {/* Collections Column */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Collections</h5>
            <ul className={styles.linkList}>
              <li><Link to="/evening-gowns" className={styles.footerLink}>Evening Gowns</Link></li>
              <li><Link to="/silk-festive" className={styles.footerLink}>Silk &amp; Festive</Link></li>
              <li><Link to="/summer-maxi" className={styles.footerLink}>Summer Maxi</Link></li>
              <li><Link to="/cocktail-sparkle" className={styles.footerLink}>Cocktail Sparkle</Link></li>
              <li><Link to="/new-arrivals" className={styles.footerLink}>New Arrivals</Link></li>
              <li><Link to="/lookbook" className={styles.footerLink}>Lookbook</Link></li>
              <li><Link to="/sale" className={styles.footerLink}>Sale <span className={styles.salePill}>UP TO 40%</span></Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Company</h5>
            <ul className={styles.linkList}>
              <li><Link to="/about" className={styles.footerLink}>Our Atelier</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><a href="#" className={styles.footerLink}>Bespoke Orders</a></li>
              <li><a href="#" className={styles.footerLink}>Press &amp; Media</a></li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
              <li><a href="#" className={styles.footerLink}>Sustainability</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className={styles.linkCol}>
            <h5 className={styles.colTitle}>Help &amp; Support</h5>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.footerLink}>Size Guide</a></li>
              <li><a href="#" className={styles.footerLink}>Shipping &amp; Delivery</a></li>
              <li><a href="#" className={styles.footerLink}>Returns &amp; Exchanges</a></li>
              <li><a href="#" className={styles.footerLink}>Care Instructions</a></li>
              <li><a href="#" className={styles.footerLink}>FAQs</a></li>
              <li><a href="#" className={styles.footerLink}>Track My Order</a></li>
            </ul>
            <div className={styles.contactInfo}>
              <p className={styles.contactLine}>✉ hello@auracouture.com</p>
              <p className={styles.contactLine}>📞 +39 02 1234 5678</p>
              <p className={styles.contactLine}>🕐 Mon–Sat, 10am–7pm CET</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Aura Couture S.r.l. — All Rights Reserved. Handcrafted in Milan.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalDot}>·</span>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <span className={styles.legalDot}>·</span>
            <a href="#" className={styles.legalLink}>Cookie Settings</a>
          </div>
          <div className={styles.paymentIcons}>
            <span className={styles.payIcon}>VISA</span>
            <span className={styles.payIcon}>MC</span>
            <span className={styles.payIcon}>AMEX</span>
            <span className={styles.payIcon}>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
