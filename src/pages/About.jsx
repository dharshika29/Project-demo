import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleCollectionsClick = () => {
    navigate('/collections');
  };

  return (
    <div className={styles.aboutPage}>
      {/* --------------------------------------------------------------------
          1. Hero / Breadcrumb Header
          -------------------------------------------------------------------- */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <span
              className={styles.breadcrumbLink}
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <span>/</span>
            <span>About Us</span>
          </div>

          <h1 className={styles.heroTitle}>
            The Essence of <span className={styles.heroTitleHighlight}>Aura Couture</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Where refined craftsmanship, graceful silhouettes, and modern luxury unite
            to celebrate the woman who refuses to blend in.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          2. Know More About Us Section (Matches User Mockup)
          -------------------------------------------------------------------- */}
      <section className={styles.knowMoreSection} aria-label="Know More About Us">
        <div className={styles.knowMoreGrid}>
          {/* Left Column: Overlapping Luxury Images */}
          <div className={styles.imageComposition}>
            <div className={styles.backImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
                alt="Contemporary fashion muse shopping luxury collection"
                className={styles.backImage}
                onError={(e) => {
                  e.currentTarget.src = '/hero-dress.jpg';
                }}
                loading="lazy"
              />
            </div>

            <div className={styles.frontImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=800&auto=format&fit=crop&q=80"
                alt="Radiant woman in stylish apparel holding luxury shopping bags"
                className={styles.frontImage}
                onError={(e) => {
                  e.currentTarget.src = '/spotlight-dress.jpg';
                }}
                loading="lazy"
              />
            </div>

            <div className={styles.floatingPill}>
              <span>✨ Handcrafted Elegance</span>
            </div>
          </div>

          {/* Right Column: Narrative, Pillars & Contact CTA */}
          <div className={styles.knowMoreContent}>
            <span className={styles.sectionBadge}>Our Heritage & Vision</span>
            <h2 className={styles.knowMoreHeading}>Know More About Us?</h2>

            <p className={styles.leadParagraph}>
              Aura Couture was created for the woman who believes fashion is more than what
              she wears — it is how she expresses herself.
            </p>

            <p className={styles.bodyParagraph}>
              From handcrafted designer gowns to ethereal mulberry silks and sophisticated festive
              ensembles, every creation is thoughtfully designed for the contemporary muse who
              refuses to blend in. Our collections bring together refined craftsmanship, graceful
              silhouettes, rich fabrics, and intricate detailing to create pieces that feel as
              extraordinary as the moments they are made for.
            </p>

            {/* Feature Checklist with Vivid Purple Checkmarks */}
            <ul className={styles.checklist}>
              <li className={styles.checkItem}>
                <span className={styles.checkIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.checkSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.checkText}>
                  Handcrafted designer gowns & ethereal mulberry silks
                </span>
              </li>

              <li className={styles.checkItem}>
                <span className={styles.checkIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.checkSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.checkText}>
                  Refined craftsmanship, graceful silhouettes & intricate detailing
                </span>
              </li>

              <li className={styles.checkItem}>
                <span className={styles.checkIconWrapper} aria-hidden="true">
                  <svg
                    className={styles.checkSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.checkText}>
                  Designed with intention for your most memorable moments
                </span>
              </li>
            </ul>

            {/* Distinctive Magenta/Purple Pill Button */}
            <button
              type="button"
              className={styles.contactBtn}
              onClick={handleContactClick}
              id="about-contact-btn"
              aria-label="Contact Aura Couture"
            >
              <span>Contact us</span>
              <span className={styles.btnArrow}>&gt;</span>
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          3. Editorial Philosophy / Quote Section
          -------------------------------------------------------------------- */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.philosophyQuote}>
            At Aura Couture, we believe true elegance does not need to be loud. It lives in
            the details — the fall of a perfectly tailored gown, the softness of luxurious
            silk, the precision of every embellishment, and the confidence a woman carries
            when she feels completely herself.
          </blockquote>
          <div className={styles.philosophyTagline}>
            Designed with Intention • Crafted with Care
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          4. Four Pillars of Craftsmanship
          -------------------------------------------------------------------- */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsHeader}>
          <span className={styles.pillarsEyebrow}>What Defines Our Atelier</span>
          <h2 className={styles.pillarsTitle}>Crafted Without Compromise</h2>
          <p className={styles.pillarsDesc}>
            Each piece is designed with intention, crafted with care, and made to become part
            of your most memorable moments.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🪡</span>
            <h3 className={styles.pillarCardTitle}>Refined Craftsmanship</h3>
            <p className={styles.pillarCardText}>
              Master tailoring and hand-applied zardozi accents, curated by seasoned artisans
              dedicated to perfection.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🌿</span>
            <h3 className={styles.pillarCardTitle}>Ethereal Mulberry Silks</h3>
            <p className={styles.pillarCardText}>
              Finest natural silks, rich velvets, and fluid chiffon drapes that feel as
              luxurious on the skin as they look.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>👗</span>
            <h3 className={styles.pillarCardTitle}>Graceful Silhouettes</h3>
            <p className={styles.pillarCardText}>
              Sculpted cuts and flowing designs made for the contemporary muse who commands
              attention without saying a word.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>✨</span>
            <h3 className={styles.pillarCardTitle}>Memorable Moments</h3>
            <p className={styles.pillarCardText}>
              Every creation is built to commemorate galas, festive milestones, and life’s
              most unforgettable celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          5. Numbers / Atelier Highlights
          -------------------------------------------------------------------- */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15K+</span>
            <span className={styles.statLabel}>Muses Styled Globally</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Pure Mulberry Silk & Velvet</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Heritage Master Artisans</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9★</span>
            <span className={styles.statLabel}>Verified Client Acclaim</span>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          6. Bottom Call To Action Banner
          -------------------------------------------------------------------- */}
      <section className={styles.ctaBanner}>
        <h2 className={styles.ctaTitle}>Experience Extraordinary Couture</h2>
        <p className={styles.ctaSubtitle}>
          Each piece is designed with intention, crafted with care, and made to become part of
          your most memorable moments.
        </p>
        <div className={styles.ctaButtons}>
          <button
            type="button"
            className={styles.primaryCtaBtn}
            onClick={handleCollectionsClick}
            id="about-explore-collections-btn"
          >
            Explore Collections
          </button>
          <button
            type="button"
            className={styles.secondaryCtaBtn}
            onClick={handleContactClick}
            id="about-contact-secondary-btn"
          >
            Contact Our Stylists
          </button>
        </div>
      </section>
    </div>
  );
}
