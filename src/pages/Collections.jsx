import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import styles from './Collections.module.css';

const COLLECTIONS_DATA = [
  {
    id: 'evening-gowns',
    title: 'Evening Gowns',
    subtitle: 'Red Carpet Silk & Tulle Silhouettes',
    category: 'couture',
    badge: 'Iconic Edit',
    accentTag: 'Haute Couture',
    path: '/evening-gowns',
    image: '/evening-gown-showcase.png',
    secondaryImage: '/hero-dress.jpg',
    description: 'Sculptural architectural corsetry, trailing dramatic trains, and 180+ hours of hand-carved zardozi and crystal micro-beading.',
    itemCount: 48,
    priceRange: 'From $350',
    palettes: ['#C9A84C', '#0F1520', '#3D1C24'],
    highlights: ['24-Kali Flared Skirt', 'Mulberry Silk', 'Custom Corsetry'],
    occasion: 'Red Carpet & Galas',
    previewProducts: PRODUCTS.filter((p) => p.categorySlug === 'evening-gowns').slice(0, 2)
  },
  {
    id: 'silk-festive',
    title: 'Silk & Festive',
    subtitle: 'Banarasi, Zardozi & Bridal Luxury',
    category: 'heritage',
    badge: 'Artisanal Heritage',
    accentTag: 'Master Weave',
    path: '/silk-festive',
    image: '/saree-main.jpg',
    secondaryImage: '/spotlight-dress.jpg',
    description: 'Woven on heritage Varanasi handlooms with pure gold zari threads, antique dabka motifs, and generational silk brocades.',
    itemCount: 36,
    priceRange: 'From $290',
    palettes: ['#881337', '#C9A84C', '#0284C7'],
    highlights: ['Pure Katan Silk', 'Antique Gota Patti', 'Handloom Certified'],
    occasion: 'Royal Weddings',
    previewProducts: PRODUCTS.filter((p) => p.categorySlug === 'silk-festive').slice(0, 2)
  },
  {
    id: 'summer-maxi',
    title: 'Summer Maxi',
    subtitle: 'Breezy Linen, Silk & Botanical Maxis',
    category: 'resort',
    badge: 'Resort 2026',
    accentTag: 'Riviera Luxe',
    path: '/summer-maxi',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=900&q=80',
    description: 'Fluid bias-cut silhouettes crafted from lightweight Italian flax and lustrous liquid silk-satin for sun-drenched galas.',
    itemCount: 28,
    priceRange: 'From $180',
    palettes: ['#FDE047', '#0EA5E9', '#FED7AA'],
    highlights: ['100% Organic Linen', 'Mother-of-Pearl Buttons', 'Bias-Cut Slip'],
    occasion: 'Resort & Day Galas',
    previewProducts: PRODUCTS.filter((p) => p.categorySlug === 'summer-maxi').slice(0, 2)
  },
  {
    id: 'cocktail-sparkle',
    title: 'Cocktail Sparkle',
    subtitle: 'Liquid Sequin, Pave & Crystal Glamour',
    category: 'party',
    badge: 'After Dark',
    accentTag: 'Gala Ready',
    path: '/cocktail-sparkle',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&q=80',
    description: 'Shimmering micro-sequins engineered over celestial sheer organza, capturing dramatic light from dusk to midnight.',
    itemCount: 32,
    priceRange: 'From $240',
    palettes: ['#1E1B4B', '#C9A84C', '#B5727A'],
    highlights: ['Crystal Pave', 'Feathered Hems', 'Architectural Bodice'],
    occasion: 'Cocktail Soirées',
    previewProducts: PRODUCTS.filter((p) => p.categorySlug === 'cocktail-sparkle').slice(0, 2)
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    subtitle: 'Direct from Paris & Milan Runway Edit',
    category: 'runway',
    badge: 'Runway 2026',
    accentTag: 'Exclusive Drop',
    path: '/new-arrivals',
    image: '/collections-collage.png',
    secondaryImage: '/hero-slide-2.jpg',
    description: 'The newest experimental shapes and opulent draping introduced at international fashion weeks for the 2026 season.',
    itemCount: 18,
    priceRange: 'From $310',
    palettes: ['#C9A84C', '#E2E8F0', '#101724'],
    highlights: ['Limited 50 Pieces', 'Signature Cutouts', 'VIP First Access'],
    occasion: 'Couture Collectors',
    previewProducts: [PRODUCTS[0], PRODUCTS[2]]
  },
  {
    id: 'sale',
    title: 'Private Archive Sale',
    subtitle: 'Curated Heritage Silhouettes Up to 40% Off',
    category: 'sale',
    badge: 'Privé Sale',
    accentTag: 'Use Code AURA40',
    path: '/sale',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&q=80',
    secondaryImage: '/spotlight-dress.jpg',
    description: 'An exclusive archival selection of limited runway editions and master artisan weaves available for a limited period.',
    itemCount: 24,
    priceRange: 'Up to 40% OFF',
    palettes: ['#B5727A', '#C9A84C', '#0F1520'],
    highlights: ['Save 40%', 'Instant Dispatch', 'Certificate of Authenticity'],
    occasion: 'Rare Archives',
    isSpecial: true,
    previewProducts: [PRODUCTS[1], PRODUCTS[4]]
  }
];

export default function Collections() {
  const navigate = useNavigate();
  const [selectedQuickView, setSelectedQuickView] = useState(null);

  return (
    <div className={styles.collectionsPage}>
      {/* ── 1. Top Couture Editorial Marquee ── */}
      <div className={styles.marqueeStrip}>
        <div className={styles.marqueeTrack}>
          <span>✦ AURA COUTURE HAUTE EDITIONS 2026</span>
          <span className={styles.marqueeDot}>•</span>
          <span>180+ ATELIER HAND-EMBROIDERY HOURS</span>
          <span className={styles.marqueeDot}>•</span>
          <span>PURE VARANASI & MULBERRY WEAVES</span>
          <span className={styles.marqueeDot}>•</span>
          <span>BESPOKE BRIDAL & RED CARPET SILHOUETTES</span>
          <span className={styles.marqueeDot}>•</span>
          <span>USE CODE AURA40 FOR ARCHIVE PRIVILEGES</span>
          <span className={styles.marqueeDot}>•</span>
          <span>✦ AURA COUTURE HAUTE EDITIONS 2026</span>
          <span className={styles.marqueeDot}>•</span>
          <span>180+ ATELIER HAND-EMBROIDERY HOURS</span>
        </div>
      </div>

      {/* ── 2. Editorial Hero Header ── */}
      <section className={styles.editorialHero}>
        <div className={styles.heroGlowBackdrop} />
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            <span className={styles.breadcrumbLink} onClick={() => navigate('/')}>
              Home
            </span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbActive}>Couture Collections</span>
          </nav>

          <div className={styles.heroHeaderBadge}>
            <span className={styles.badgeSpark}>✦</span>
            <span>The Signature Universes</span>
            <span className={styles.badgeDivider}>|</span>
            <span>Autumn / Winter & Spring 2026</span>
          </div>

          <h1 className={styles.mainTitle}>
            Architectural Silhouettes & <br />
            <span className={styles.goldTitleItalic}>Timeless Silk Universes</span>
          </h1>

          <p className={styles.heroDescription}>
            Step into the maison’s curated universes. From red-carpet sculptural evening gowns
            to hand-woven Banarasi brocades and ethereal resort silks, each silhouette is born
            from generational artisanal mastery.
          </p>

          {/* Quick Stats Pill Strip */}
          <div className={styles.quickMetricsRow}>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>06</span>
              <span className={styles.metricLabel}>Curated Universes</span>
            </div>
            <div className={styles.metricSep} />
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>180+</span>
              <span className={styles.metricLabel}>Atelier Hours / Piece</span>
            </div>
            <div className={styles.metricSep} />
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>100%</span>
              <span className={styles.metricLabel}>Natural Silks & Zari</span>
            </div>
            <div className={styles.metricSep} />
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>Global</span>
              <span className={styles.metricLabel}>White-Glove Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Main Collection 3-Column Card Grid (3 Cards Per Row) ── */}
      <section className={styles.showcaseGridSection}>
        <div className={styles.gridContainer}>
          <div className={styles.trioGridWrapper}>
            {COLLECTIONS_DATA.map((col, idx) => (
                <article
                  key={col.id}
                  className={`${styles.trioCard} ${col.isSpecial ? styles.trioCardSpecial : ''}`}
                >
                  {/* Card Media Header */}
                  <div className={styles.trioMediaArea}>
                    <img
                      src={col.image}
                      alt={col.title}
                      className={styles.trioImage}
                      onError={(e) => {
                        e.currentTarget.src = '/hero-dress.jpg';
                      }}
                    />
                    <div className={styles.trioOverlay} />

                    {/* Top Corner Badges */}
                    <div className={styles.trioBadgeTopLeft}>
                      <span className={styles.trioSparkle}>✦</span>
                      <span>{col.badge}</span>
                    </div>

                    <div className={styles.trioEditionIndex}>
                      <span>0{idx + 1}</span>
                    </div>

                    {/* Bottom Floating Price Tag & Occasion */}
                    <div className={styles.trioFloatingFooter}>
                      <span className={styles.trioOccasionPill}>{col.occasion}</span>
                      <span className={styles.trioPriceTag}>{col.priceRange}</span>
                    </div>
                  </div>

                  {/* Card Content Body - Clean Minimal Name & Button */}
                  <div className={styles.trioBody}>
                    <h2 className={styles.trioTitle}>{col.title}</h2>

                    <div className={styles.trioActions}>
                      <button
                        className={styles.trioPrimaryBtn}
                        onClick={() => navigate(col.path)}
                        aria-label={`Explore ${col.title}`}
                      >
                        <span>Explore Collection</span>
                        <span className={styles.trioArrow}>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </section>



      {/* ── 5. Atelier Haute Spotlight: Handcrafted Precision Manifesto ── */}
      <section className={styles.atelierManifestoSection}>
        <div className={styles.manifestoContainer}>
          <div className={styles.manifestoHeader}>
            <div className={styles.manifestoPill}>
              <span>✦ ATELIER SAVOIR-FAIRE ✦</span>
            </div>
            <h2 className={styles.manifestoTitle}>
              Generational Precision In <span className={styles.goldText}>Every Stitch</span>
            </h2>
            <p className={styles.manifestoLead}>
              We do not produce garments in mass. Each silhouette is an architectural journey
              honoring ancestral Banarasi handlooms, French corsetry boning, and bespoke cutwork.
            </p>
          </div>

          <div className={styles.manifestoGrid}>
            <div className={styles.manifestoCard}>
              <div className={styles.cardHeaderIcon}>🧵</div>
              <h3>Pure Mulberry & Katan Silks</h3>
              <p>
                100% natural heritage yarns sourced directly from master weaver cooperatives in
                Varanasi and Kanchipuram, carrying authentic GI verification.
              </p>
              <div className={styles.cardMeta}>
                <span>Zero Synthetic Fibers</span>
                <span>•</span>
                <span>GI Verified</span>
              </div>
            </div>

            <div className={styles.manifestoCard}>
              <div className={styles.cardHeaderIcon}>✨</div>
              <h3>Real Antique Gold Zardozi</h3>
              <p>
                Micro-dabka, kasab threads, and hand-cut sequins stitched individually onto velvet
                and tissue organza over weeks of dedicated artisan devotion.
              </p>
              <div className={styles.cardMeta}>
                <span>180+ Hand Embroidery Hours</span>
                <span>•</span>
                <span>Master Karigars</span>
              </div>
            </div>

            <div className={styles.manifestoCard}>
              <div className={styles.cardHeaderIcon}>📐</div>
              <h3>Sculptural Haute Corsetry</h3>
              <p>
                Internal spiral steel boning, multi-panel sweetheart shaping, and custom micro-straps
                designed to accentuate and empower every royal silhouette.
              </p>
              <div className={styles.cardMeta}>
                <span>Architectural Fit</span>
                <span>•</span>
                <span>Bespoke Measurements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Bespoke Couture Consultation CTA Card ── */}
      <section className={styles.vipConsultationSection}>
        <div className={styles.vipBanner}>
          <div className={styles.vipInner}>
            <div className={styles.vipBadge}>
              <span className={styles.vipDot} />
              <span>PRIVATE COUTURE SALON</span>
            </div>

            <h2 className={styles.vipTitle}>
              Desire A One-of-a-Kind Bespoke Silhouette?
            </h2>

            <p className={styles.vipDesc}>
              Schedule a private virtual consultation or in-person atelier visit with our creative
              directors to customize fabrics, colorways, and embroidery for your milestone event.
            </p>

            <div className={styles.vipBtnRow}>
              <button
                className={styles.vipPrimaryBtn}
                onClick={() => navigate('/contact')}
              >
                <span>Book Master Stylist Consultation</span>
                <span>→</span>
              </button>

              <button
                className={styles.vipSecondaryBtn}
                onClick={() => navigate('/about')}
              >
                <span>Discover Maison Heritage</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Luxury Service Assurance Strip ── */}
      <section className={styles.assuranceStrip}>
        <div className={styles.assuranceContainer}>
          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>✦</span>
            <div>
              <h4>Authenticity Guaranteed</h4>
              <p>Certified natural fibers & hallmarked zari bullion</p>
            </div>
          </div>

          <div className={styles.assuranceSep} />

          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>📦</span>
            <div>
              <h4>Complimentary Global Priority</h4>
              <p>Fully insured white-glove courier shipping</p>
            </div>
          </div>

          <div className={styles.assuranceSep} />

          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>✂️</span>
            <div>
              <h4>Bespoke Made-to-Measure</h4>
              <p>Complimentary custom fitting on all bridal & evening wear</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Interactive Quick View Drawer / Modal ── */}
      {selectedQuickView && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedQuickView(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseBtn}
              onClick={() => setSelectedQuickView(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageCol}>
                <img
                  src={selectedQuickView.image}
                  alt={selectedQuickView.title}
                  className={styles.modalMainImg}
                  onError={(e) => {
                    e.currentTarget.src = '/hero-dress.jpg';
                  }}
                />
                <div className={styles.modalTagBadge}>
                  <span>{selectedQuickView.badge}</span>
                </div>
              </div>

              <div className={styles.modalInfoCol}>
                <span className={styles.modalSubHeader}>Atelier Edition Spec Sheet</span>
                <h3 className={styles.modalTitle}>{selectedQuickView.title}</h3>
                <p className={styles.modalSubtitle}>{selectedQuickView.subtitle}</p>

                <div className={styles.modalPriceBlock}>
                  <span className={styles.modalPriceLabel}>Investment:</span>
                  <span className={styles.modalPriceValue}>{selectedQuickView.priceRange}</span>
                </div>

                <p className={styles.modalParagraph}>{selectedQuickView.description}</p>

                <div className={styles.modalSpecsList}>
                  <div className={styles.modalSpecItem}>
                    <span className={styles.specLabel}>Occasion:</span>
                    <span className={styles.specVal}>{selectedQuickView.occasion}</span>
                  </div>
                  <div className={styles.modalSpecItem}>
                    <span className={styles.specLabel}>Designs in Vault:</span>
                    <span className={styles.specVal}>{selectedQuickView.itemCount} Silhouette Cuts</span>
                  </div>
                  <div className={styles.modalSpecItem}>
                    <span className={styles.specLabel}>Signature Highlights:</span>
                    <span className={styles.specVal}>{selectedQuickView.highlights.join(' • ')}</span>
                  </div>
                </div>

                {/* Direct Products in this Universe */}
                {selectedQuickView.previewProducts && selectedQuickView.previewProducts.length > 0 && (
                  <div className={styles.modalProductsArea}>
                    <span className={styles.modalProductsTitle}>✦ Featured Silhouettes in this Universe:</span>
                    <div className={styles.modalProductList}>
                      {selectedQuickView.previewProducts.map((p) => (
                        <div
                          key={p.id}
                          className={styles.modalProductCard}
                          onClick={() => {
                            setSelectedQuickView(null);
                            navigate(`/product/${p.id}`);
                          }}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className={styles.modalProdImg}
                            onError={(e) => {
                              e.currentTarget.src = '/hero-dress.jpg';
                            }}
                          />
                          <div className={styles.modalProdText}>
                            <span className={styles.modalProdName}>{p.name}</span>
                            <span className={styles.modalProdPrice}>${p.price}</span>
                          </div>
                          <span className={styles.modalProdArrow}>Inspect Product →</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.modalActionRow}>
                  <button
                    className={styles.modalExploreBtn}
                    onClick={() => {
                      navigate(selectedQuickView.path);
                    }}
                  >
                    <span>View All {selectedQuickView.itemCount} Designs</span>
                    <span>→</span>
                  </button>
                  <button
                    className={styles.modalCloseLink}
                    onClick={() => setSelectedQuickView(null)}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

