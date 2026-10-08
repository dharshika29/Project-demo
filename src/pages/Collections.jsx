import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Collections.module.css';

const CATEGORIES = [
  {
    id: 'evening-gowns',
    title: 'Evening Gowns',
    desc: 'Red carpet silk & tulle silhouettes',
    icon: '👗',
    path: '/evening-gowns',
    badge: 'Iconic'
  },
  {
    id: 'silk-festive',
    title: 'Silk & Festive',
    desc: 'Banarasi, zardozi & bridal luxury',
    icon: '✨',
    path: '/silk-festive',
    badge: 'Heritage'
  },
  {
    id: 'summer-maxi',
    title: 'Summer Maxi',
    desc: 'Breezy linen, silk & floral maxis',
    icon: '🌸',
    path: '/summer-maxi',
    badge: 'Resort'
  },
  {
    id: 'cocktail-sparkle',
    title: 'Cocktail Sparkle',
    desc: 'Sequin, feather & crystal party dresses',
    icon: '💎',
    path: '/cocktail-sparkle',
    badge: 'Party'
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    desc: 'Just dropped from runway 2026',
    icon: '🆕',
    path: '/new-arrivals',
    badge: 'Runway'
  },
  {
    id: 'sale',
    title: 'Sale — Up to 40% Off',
    desc: 'Use code AURA40 at checkout',
    icon: '🏷️',
    path: '/sale',
    badge: 'Special',
    highlight: true
  }
];

export default function Collections() {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.collectionsPage}>
      {/* ── 1. Page Header & Breadcrumbs ── */}
      <section className={styles.heroBanner}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink} onClick={() => navigate('/')}>
              Home
            </span>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Collections</span>
          </div>

          <h1 className={styles.pageTitle}>
            Curated <span className={styles.titleHighlight}>Collections</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Immerse yourself in our distinct universes of luxury silhouettes, artisanal heritage silks,
            and contemporary evening glamour.
          </p>
        </div>
      </section>

      {/* ── 2. Split Showcase Section (Pattern from Image 1: Left Image 2, Right Image 3 Content) ── */}
      <section className={styles.showcaseSection} aria-label="Collections Showcase">
        <div className={styles.showcaseContainer}>

          {/* Left Side: Image 2 Fashion Collage Showcase */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img
                src="/collections-collage.png"
                alt="Aura Couture Collections Showcase - Haute Couture Gowns, Silk Sarees, and Festive Ensembles"
                className={styles.showcaseImage}
                onError={(e) => {
                  // Fallback in case path fails
                  e.currentTarget.src = '/hero-dress.jpg';
                }}
              />
              <div className={styles.imageOverlay} />

              {/* Floating Pill Badge */}
              <div className={styles.imageBadge}>
                <span className={styles.imageBadgePulse} />
                <span>Runway Edit 2026</span>
              </div>

              {/* Floating Bottom Card */}
              <div className={styles.imageCaptionCard}>
                <h3 className={styles.captionTitle}>Haute Couture & Heritage Silks</h3>
                <p className={styles.captionSubtitle}>
                  From bespoke hand-woven bridal lehengas to ethereal Parisian evening gowns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Category List with Arrow Marks (Image 3 Content) */}
          <div className={styles.contentColumn}>
            <div className={styles.categoryCardBox}>
              {/* Box Header Banner */}
              <div className={styles.headerBanner}>
                <div className={styles.headerTitleWrapper}>
                  <span className={styles.headerSparkle}>✦</span>
                  <h2 className={styles.headerTitle}>Browse by Category</h2>
                </div>
                <span className={styles.headerTag}>6 Editions</span>
              </div>

              {/* Category Items List with Arrows */}
              <div className={styles.categoryList}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className={`${styles.categoryItem} ${cat.highlight ? styles.itemHighlight : ''}`}
                    onClick={() => handleCategoryClick(cat.path)}
                    aria-label={`Go to ${cat.title}`}
                  >
                    {/* Category Icon */}
                    <div className={styles.categoryIconBox}>
                      <span>{cat.icon}</span>
                    </div>

                    {/* Category Details */}
                    <div className={styles.categoryTextGroup}>
                      <div className={styles.categoryTitleRow}>
                        <span className={styles.categoryName}>{cat.title}</span>
                        {cat.badge && (
                          <span
                            className={`${styles.categoryTag} ${cat.highlight ? styles.saleBadge : ''}`}
                          >
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <span className={styles.categoryDesc}>{cat.desc}</span>
                    </div>

                    {/* Right Arrow Mark */}
                    <div className={styles.categoryArrowBox} aria-hidden="true">
                      <span className={styles.arrowIcon}>→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Evening Gown Spotlight Section (Left Content, Right Image) ── */}
      <section className={styles.gownSection} aria-label="Featured Evening Gown">
        <div className={styles.gownContainer}>

          {/* Left Column: Evening Gown Explanation & Craftsmanship Details */}
          <div className={styles.gownContentColumn}>
            <div className={styles.gownBadge}>
              <span className={styles.gownBadgeSparkle}>✦</span>
              <span>Couture Spotlight</span>
            </div>

            <h2 className={styles.gownTitle}>
              The Aurelia Royal <span className={styles.gownHighlight}>Evening Gown</span>
            </h2>

            <p className={styles.gownSubtitle}>
              Bespoke Mustard Silk Silhouette with Hand-Carved Zardozi & Fine Gotta Embellishments
            </p>

            <p className={styles.gownDescription}>
              Crafted in our heritage atelier over 180 meticulous hours, this breathtaking evening gown combines
              architectural corsetry with classical Indian couture grandeur. Designed with a structured sweetheart
              neckline and delicate micro-straps, it cascades into a dramatic 24-kali flared sweep adorned with antique
              dabka work, micro-sequins, and geometric floral motifs that shimmer under gala chandeliers.
            </p>

            {/* Specification Highlights Grid */}
            <div className={styles.gownSpecsGrid}>
              <div className={styles.gownSpecCard}>
                <span className={styles.gownSpecIcon}>✨</span>
                <div>
                  <div className={styles.gownSpecLabel}>Atelier Craftsmanship</div>
                  <div className={styles.gownSpecValue}>180+ Hand Embroidery Hours</div>
                </div>
              </div>

              <div className={styles.gownSpecCard}>
                <span className={styles.gownSpecIcon}>👗</span>
                <div>
                  <div className={styles.gownSpecLabel}>Silhouette & Cut</div>
                  <div className={styles.gownSpecValue}>Sweetheart Corset & 24-Kali Flared Skirt</div>
                </div>
              </div>

              <div className={styles.gownSpecCard}>
                <span className={styles.gownSpecIcon}>🧵</span>
                <div>
                  <div className={styles.gownSpecLabel}>Fabric & Weave</div>
                  <div className={styles.gownSpecValue}>Pure Mulberry Silk & Sheer Organza</div>
                </div>
              </div>

              <div className={styles.gownSpecCard}>
                <span className={styles.gownSpecIcon}>💎</span>
                <div>
                  <div className={styles.gownSpecLabel}>Embellishments</div>
                  <div className={styles.gownSpecValue}>Antique Gold Zardozi & Resham Work</div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className={styles.gownActions}>
              <button
                className={styles.gownPrimaryBtn}
                onClick={() => navigate('/evening-gowns')}
              >
                <span>Explore Evening Gowns</span>
                <span>→</span>
              </button>
              <button
                className={styles.gownSecondaryBtn}
                onClick={() => navigate('/contact')}
              >
                <span>Book Atelier Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Evening Gown Image Showcase */}
          <div className={styles.gownImageColumn}>
            <div className={styles.gownImageWrapper}>
              <div className={styles.gownImageInner}>
                <img
                  src="/evening-gown-showcase.png"
                  alt="Aura Couture Aurelia Evening Gown - Mustard Embroidered Silhouette"
                  className={styles.gownImage}
                  onError={(e) => {
                    e.currentTarget.src = '/hero-dress.jpg';
                  }}
                />

                {/* Floating Top Badge */}
                <div className={styles.gownFloatingBadge}>
                  <span className={styles.gownFloatingDot} />
                  <span>Runway Edition 2026</span>
                </div>

                {/* Floating Bottom Detail Pill */}
                <div className={styles.gownDetailPill}>
                  <div>
                    <span className={styles.gownPillName}>The Aurelia Gown</span>
                    <span className={styles.gownPillSub}>Handcrafted Pure Silk</span>
                  </div>
                  <span className={styles.gownPillTag}>Haute Couture</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Luxury Guarantees / Service Strip ── */}
      <section className={styles.featuresGrid} aria-label="Brand Guarantees">
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>✦</div>
          <div>
            <h4 className={styles.featureTitle}>Atelier Craftsmanship</h4>
            <p className={styles.featureDesc}>Each silhouette hand-finished with certified natural silks and crystals.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📦</div>
          <div>
            <h4 className={styles.featureTitle}>Complimentary Global Delivery</h4>
            <p className={styles.featureDesc}>Express priority insured courier service on all couture orders.</p>
          </div>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>✂️</div>
          <div>
            <h4 className={styles.featureTitle}>Bespoke Made-to-Measure</h4>
            <p className={styles.featureDesc}>Complimentary virtual consultation with master stylists.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
