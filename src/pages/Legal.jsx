import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Legal.module.css';

export default function Legal({ defaultTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialTab = () => {
    if (defaultTab) return defaultTab;
    const path = location.pathname.replace('/', '');
    if (path === 'terms') return 'terms';
    if (path === 'cookies') return 'cookies';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [personalizationCookies, setPersonalizationCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname, defaultTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  const handleSaveCookies = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2600);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>✦ Client Trust &amp; Governance ✦</div>
        <h1 className={styles.title}>
          Legal &amp; <em>Transparency Charter</em>
        </h1>
        <p className={styles.subtitle}>
          Clear, ethical, and bank-grade protocols governing your privacy, data security,
          bespoke commissions, and digital cookie preferences.
        </p>

        <div className={styles.tabsNav}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'privacy' ? styles.tabBtnActive : ''}`}
            onClick={() => handleTabChange('privacy')}
          >
            Privacy Policy (GDPR / CCPA)
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'terms' ? styles.tabBtnActive : ''}`}
            onClick={() => handleTabChange('terms')}
          >
            Terms of Atelier Service
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'cookies' ? styles.tabBtnActive : ''}`}
            onClick={() => handleTabChange('cookies')}
          >
            Cookie Preferences
          </button>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.legalCard}>
          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div>
              <h2 className={styles.legalHeading}>1. Privacy &amp; Data Security Commitment</h2>
              <p className={styles.legalParagraph}>
                At Aura Couture S.r.l. (registered in Milan, Italy), your privacy is considered as sacred as our craftsmanship.
                We operate under strict compliance with the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and global data protection standards.
              </p>

              <h3 className={styles.legalHeading}>2. Information We Collect</h3>
              <p className={styles.legalParagraph}>
                We collect personal information exclusively necessary to deliver extraordinary couture experiences: your name, billing and white-glove courier shipping address, encrypted payment credentials (processed directly by certified PCI-DSS Level 1 payment processors), and custom body sizing measurements for bespoke commissions.
              </p>

              <h3 className={styles.legalHeading}>3. Zero Data Commercialization</h3>
              <p className={styles.legalParagraph}>
                Aura Couture does not, has never, and will never sell, lease, or monetize client personal data, fitting records, or shopping histories to third-party advertisers or data brokers.
              </p>

              <h3 className={styles.legalHeading}>4. Encryption &amp; Security Standards</h3>
              <p className={styles.legalParagraph}>
                All transmissions are secured via TLS 1.3 with 256-bit AES encryption. Access to client measurement dossiers is restricted solely to your designated master pattern maker and client concierge.
              </p>
            </div>
          )}

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <div>
              <h2 className={styles.legalHeading}>1. Maison Operating Principles</h2>
              <p className={styles.legalParagraph}>
                By accessing Aura Couture and placing an order through our digital flagship or private salons, you enter into a binding agreement with Aura Couture S.r.l. All pieces are sold subject to these terms.
              </p>

              <h3 className={styles.legalHeading}>2. Authenticity &amp; Intellectual Property</h3>
              <p className={styles.legalParagraph}>
                Every design, silhouette pattern, embroidery motif, photograph, and editorial dispatch created by Aura Couture is protected under international copyright and industrial design treaties. Counterfeiting or unauthorized commercial reproduction is vigorously prosecuted.
              </p>

              <h3 className={styles.legalHeading}>3. Bespoke Commissions &amp; Alterations</h3>
              <p className={styles.legalParagraph}>
                Custom bespoke gowns involve dedicated artisan labor and custom dyeing. Once the muslin toile fitting is approved by the client, bespoke orders cannot be canceled. Aura Couture guarantees unlimited complimentary fittings until absolute silhouette perfection is achieved.
              </p>

              <h3 className={styles.legalHeading}>4. Governing Law</h3>
              <p className={styles.legalParagraph}>
                These terms are governed by and construed in accordance with the laws of the Republic of Italy. Any disputes shall be subject to the exclusive jurisdiction of the civil courts of Milan.
              </p>
            </div>
          )}

          {/* Cookie Preferences */}
          {activeTab === 'cookies' && (
            <div>
              <h2 className={styles.legalHeading}>Cookie &amp; Tracking Preferences</h2>
              <p className={styles.legalParagraph}>
                We use cookies to tailor your digital salon experience, remember your currency preferences, and ensure seamless bag checkouts. You may adjust your preferences below.
              </p>

              <div className={styles.cookieItem}>
                <div className={styles.cookieInfo}>
                  <h4>Strictly Necessary Cookies</h4>
                  <p>Required for secure checkout, account authentication, and bag persistence. Cannot be disabled.</p>
                </div>
                <span className={styles.lockedBadge}>Always Active</span>
              </div>

              <div className={styles.cookieItem}>
                <div className={styles.cookieInfo}>
                  <h4>Performance &amp; Speed Cookies</h4>
                  <p>Helps our engineering team optimize image CDN delivery speeds for high-resolution gown photography.</p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={analyticsCookies}
                    onChange={(e) => setAnalyticsCookies(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.cookieItem}>
                <div className={styles.cookieInfo}>
                  <h4>Personalized Silhouette Preferences</h4>
                  <p>Remembers your selected measurement units (CM vs Inches) and currency settings.</p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={personalizationCookies}
                    onChange={(e) => setPersonalizationCookies(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.cookieItem}>
                <div className={styles.cookieInfo}>
                  <h4>Editorial Dispatches &amp; Invitations</h4>
                  <p>Allows us to notify you regarding private runway previews and salon showings in your city.</p>
                </div>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={marketingCookies}
                    onChange={(e) => setMarketingCookies(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <button className={styles.saveCookiesBtn} onClick={handleSaveCookies}>
                {savedToast ? '✓ Preferences Saved Successfully' : 'Save Cookie Preferences ✦'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
