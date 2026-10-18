import React from 'react';
import styles from './Sustainability.module.css';

export default function Sustainability() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>✦ The Living Heritage Charter ✦</div>
        <h1 className={styles.title}>
          Conscious Luxury &amp; <em>Ethical Sericulture</em>
        </h1>
        <p className={styles.subtitle}>
          We believe true couture honors the earth that nurtured its raw silk and the unbroken lineage
          of artisan hands that shaped its threads. Our zero-compromise environmental and human charter.
        </p>
      </section>

      <div className={styles.container}>
        {/* Metrics Grid */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>100%</div>
            <div className={styles.metricLabel}>Organic Pesticide-Free Mulberry Silk</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>0%</div>
            <div className={styles.metricLabel}>Single-Use Plastics in Packaging</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>380+</div>
            <div className={styles.metricLabel}>Heritage Handloom Karigars Guild Protected</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>Lifetime</div>
            <div className={styles.metricLabel}>Complimentary Garment Repair Guarantee</div>
          </div>
        </div>

        {/* 4 Pillars */}
        <section className={styles.pillarsSection}>
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>🌿</div>
              <h3 className={styles.pillarTitle}>Cruelty-Conscious Sericulture</h3>
              <p className={styles.pillarText}>
                Partnering exclusively with certified organic sericulture clusters in Karnataka and Assam.
                Silkworm cocoons are harvested post-emergence (Ahimsa Peace Silk), ensuring cruelty-free cultivation.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>💧</div>
              <h3 className={styles.pillarTitle}>Closed-Loop Botanical Dyes</h3>
              <p className={styles.pillarText}>
                Our rich jewel tones originate from cold-extracted pomegranate rinds, madder root, natural indigo, and marigold petals.
                100% of dye wash water is bio-filtered and recycled.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>⚖️</div>
              <h3 className={styles.pillarTitle}>Living Wages &amp; Artisan Guilds</h3>
              <p className={styles.pillarText}>
                Every weaver and embroidery master receives 3.2x local minimum living wage, private healthcare,
                pension endowments, and vocational scholarships for their children.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>♻️</div>
              <h3 className={styles.pillarTitle}>Zero-Waste Tessellation Patterning</h3>
              <p className={styles.pillarText}>
                Our pattern cutters in Milan operate under strict CAD tessellation protocols.
                Every silk offcut is repurposed into garment dust bags, hair scrunchies, and keepsake lavender sachets.
              </p>
            </div>
          </div>
        </section>

        {/* Artisan Spotlight */}
        <div className={styles.artisanSpotlight}>
          <img
            src="https://clothsvilla.com/cdn/shop/files/maroon-silk-chanderi-anarkali-set_1.jpg?format=webp&v=1771675375&width=480"
            alt="Heritage Silk Craft"
            className={styles.artisanImage}
          />
          <div>
            <p className={styles.artisanQuote}>
              "When you weave pure zari silk on a pit loom, your heartbeat syncs with the shuttle.
              Aura Couture ensures our ancestral craft survives not as museum relics, but as living, thriving modern art."
            </p>
            <div className={styles.artisanAuthor}>Rameshwar Varma</div>
            <div className={styles.artisanRole}>5th Generation Master Zari Weaver • Varanasi Atelier Guild</div>
          </div>
        </div>
      </div>
    </div>
  );
}
