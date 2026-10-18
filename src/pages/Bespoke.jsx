import React, { useState } from 'react';
import styles from './Bespoke.module.css';

export default function Bespoke() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Royal Bridal Gala',
    targetDate: '',
    salon: 'Milan — Via Montenapoleone Salon',
    budget: '$5,000 - $10,000',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>✦ One-of-a-Kind Creations ✦</div>
        <h1 className={styles.title}>
          Private Haute Couture &amp; <em>Bespoke Commissions</em>
        </h1>
        <p className={styles.subtitle}>
          From custom architectural bridal silhouettes to hand-spun gold zardozi heirlooms —
          experience intimate private atelier consultations with our creative directors in Milan, Paris, London, and New York.
        </p>
      </section>

      <div className={styles.container}>
        {/* 4-Step Journey */}
        <section className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>The Atelier Journey</h2>
            <p className={styles.sectionSub}>How your bespoke commission is brought to life across 200+ hours of artisan mastery.</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIndex}>01</div>
              <h3 className={styles.stepTitle}>Private Salon Consultation</h3>
              <p className={styles.stepDesc}>
                Meet with our Creative Director in our private suite or via high-definition digital salon to explore swatches, silhouettes, and mood boards.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIndex}>02</div>
              <h3 className={styles.stepTitle}>Muslin Toile Fitting</h3>
              <p className={styles.stepDesc}>
                A preliminary cotton canvas muslin mock-up is crafted to sculpt your unique anatomy with millimetric corsetry accuracy.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIndex}>03</div>
              <h3 className={styles.stepTitle}>200+ Hours of Hand Embroidery</h3>
              <p className={styles.stepDesc}>
                Master karigars hand-weave tested zari, Swarovski crystals, and micro-paillettes onto pure Mulberry silk organza foundations.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIndex}>04</div>
              <h3 className={styles.stepTitle}>Final Presentation &amp; Delivery</h3>
              <p className={styles.stepDesc}>
                Your one-of-a-kind gown is presented in an engraved brass-trimmed archival travel trunk with your personal heritage certificate.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Booking Form */}
        <div className={styles.bookingCard}>
          <div className={styles.sectionHeader} style={{ marginBottom: '2rem' }}>
            <h2 className={styles.sectionHeading}>Request a Private Atelier Consultation</h2>
            <p className={styles.sectionSub}>Our Head of Bespoke Clientelling will review your request within 24 hours.</p>
          </div>

          {submitted ? (
            <div className={styles.successToast}>
              <h3 style={{ color: '#fff', margin: '0 0 0.5rem' }}>✓ Bespoke Consultation Request Received</h3>
              <p style={{ margin: 0, color: '#d1fae5' }}>
                Thank you, {formData.name}. Our Senior Couture Concierge will contact you at {formData.email} to confirm your appointment at the {formData.salon}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lady Genevieve Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="client@prestige.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+44 7911 123456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Occasion / Gala</label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className={styles.formSelect}
                >
                  <option value="Royal Bridal Gala">Royal Bridal Gala &amp; Reception</option>
                  <option value="Met Gala / Red Carpet">Red Carpet &amp; Film Festival</option>
                  <option value="Black-Tie Soiree">Black-Tie Ambassadorial Soirée</option>
                  <option value="Heritage Sangeet">High Jewelry Sangeet &amp; Mehendi</option>
                  <option value="Private Milestone">Private Milestone Celebration</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Target Event Date</label>
                <input
                  type="date"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Preferred Salon</label>
                <select
                  value={formData.salon}
                  onChange={(e) => setFormData({ ...formData, salon: e.target.value })}
                  className={styles.formSelect}
                >
                  <option value="Milan — Via Montenapoleone Salon">Milan — Via Montenapoleone Atelier</option>
                  <option value="Paris — Place Vendôme Suite">Paris — Place Vendôme Suite</option>
                  <option value="London — Mayfair Private Salon">London — Mayfair Private Salon</option>
                  <option value="New York — Madison Avenue Salon">New York — Madison Avenue Salon</option>
                  <option value="Virtual VIP Digital Salon">Virtual VIP High-Definition Salon</option>
                </select>
              </div>

              <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                <label>Design Notes &amp; Silhouette Vision</label>
                <textarea
                  rows="4"
                  placeholder="Share details about desired necklines, cape styles, preferred hues, or references..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div className={styles.fullSpan}>
                <button type="submit" className={styles.submitBtn}>
                  Request Private Atelier Appointment ✦
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
