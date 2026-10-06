import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contact.module.css';

const LOCATIONS = [
  {
    id: 'mumbai',
    name: 'Mumbai Flagship Atelier',
    city: 'Mumbai, India',
    address: '44 Colaba Heritage Walk, Near Gateway of India, Mumbai 400001',
    phone: '+91 (022) 6940 8800',
    email: 'mumbai@auracouture.com',
    hours: 'Mon – Sat: 10:30 AM – 8:00 PM (IST) | Sunday by VIP Appointment',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    mapQuery: 'Colaba+Mumbai+India'
  },
  {
    id: 'london',
    name: 'Mayfair Couture Salon',
    city: 'London, United Kingdom',
    address: '28 Old Bond Street, Mayfair, London W1S 4QR',
    phone: '+44 20 7946 0912',
    email: 'london@auracouture.com',
    hours: 'Mon – Sat: 10:00 AM – 6:30 PM (BST) | Sunday Closed',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80',
    mapQuery: 'Old+Bond+Street+Mayfair+London'
  },
  {
    id: 'newyork',
    name: 'Madison Avenue Studio',
    city: 'New York, United States',
    address: '767 Madison Avenue, Upper East Side, New York, NY 10065',
    phone: '+1 (212) 555-0198',
    email: 'nyc@auracouture.com',
    hours: 'Tue – Sat: 11:00 AM – 7:00 PM (EST) | Mon & Sun by Appointment',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
    mapQuery: '767+Madison+Ave+New+York+NY'
  },
  {
    id: 'dubai',
    name: 'Dubai Fashion Avenue',
    city: 'Dubai, UAE',
    address: 'Fashion Avenue Level 2, The Dubai Mall, Downtown Dubai',
    phone: '+971 4 362 7500',
    email: 'dubai@auracouture.com',
    hours: 'Daily: 10:00 AM – 11:00 PM (GST)',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80',
    mapQuery: 'Fashion+Avenue+Dubai+Mall'
  }
];

const FAQS = [
  {
    id: 1,
    question: 'How do I schedule a bespoke bridal couture consultation?',
    answer:
      'You can schedule a consultation using the form on this page, or by messaging our WhatsApp concierge directly. Bridal consultations are typically 90 minutes and include a private suite, champagne reception, personal sketch review with our designer, and access to our archival silk and zari fabrics.'
  },
  {
    id: 2,
    question: 'What is the typical turnaround time for custom tailored gowns?',
    answer:
      'Bespoke bridal and couture gala pieces require approximately 6 to 10 weeks from initial measurements to final delivery, ensuring ample time for multi-stage fittings. For ready-to-wear alterations, turnaround is typically 7 to 10 business days. Expedited requests can be accommodated upon request.'
  },
  {
    id: 3,
    question: 'Do you offer virtual styling and international doorstep fittings?',
    answer:
      'Yes. For our international clientele who cannot visit our ateliers in Mumbai, London, New York, or Dubai, we offer high-definition 1-on-1 virtual consultations via Zoom/FaceTime. We also dispatch master tailors for private trunk fittings in select global cities.'
  },
  {
    id: 4,
    question: 'Can existing runway pieces be customized in different colors or cuts?',
    answer:
      'Most of our runway and festive designs can be customized in terms of color palette, sleeve design, neckline depth, and fabric weight. Our stylists will guide you through all bespoke tailoring variations during your consultation.'
  },
  {
    id: 5,
    question: 'What is your appointment cancellation and rescheduling policy?',
    answer:
      'We understand schedules change. We kindly request at least 24 hours advance notice if you need to reschedule or cancel your private appointment so we may accommodate other muses on our waitlist.'
  }
];

export default function Contact() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Bridal Couture',
    serviceType: 'In-Studio Atelier Visit',
    preferredDate: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [activeLocation, setActiveLocation] = useState('mumbai');
  const [openFaq, setOpenFaq] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: service
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate luxury concierge API submission
    setTimeout(() => {
      setFormStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'Bespoke Bridal Couture',
      serviceType: 'In-Studio Atelier Visit',
      preferredDate: '',
      message: ''
    });
    setFormStatus('idle');
  };

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const currentBoutique = LOCATIONS.find((loc) => loc.id === activeLocation) || LOCATIONS[0];

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* --------------------------------------------------------------------
          1. Hero Banner & Breadcrumb Header
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
            <span>Contact Us</span>
          </div>

          <span className={styles.heroBadge}>Atelier Concierge & Private Styling</span>
          <h1 className={styles.heroTitle}>
            Connect With Our <span className={styles.heroTitleHighlight}>Atelier</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Whether you seek bespoke bridal couture, a private showroom consultation,
            or personalized guidance on our runway collections, our master artisans and
            concierges are at your service.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          2. Quick Contact Channels Grid
          -------------------------------------------------------------------- */}
      <section className={styles.channelSection} aria-label="Direct Contact Channels">
        <div className={styles.channelGrid}>
          {/* Card 1: Concierge Line */}
          <a href="tel:+919820028721" className={styles.channelCard}>
            <div className={styles.channelIconWrap}>
              <svg className={styles.channelIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className={styles.channelTitle}>Concierge Hotline</h3>
            <span className={styles.channelDetail}>+91 98200 28721</span>
            <span className={styles.channelSubtext}>Mon – Sat, 10:00 AM – 8:00 PM IST</span>
          </a>

          {/* Card 2: Bespoke Email */}
          <a href="mailto:concierge@auracouture.com" className={styles.channelCard}>
            <div className={styles.channelIconWrap}>
              <svg className={styles.channelIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={styles.channelTitle}>Bespoke Inquiries</h3>
            <span className={styles.channelDetail}>concierge@auracouture.com</span>
            <span className={styles.channelSubtext}>Guaranteed response within 4 hours</span>
          </a>

          {/* Card 3: Flagship Atelier */}
          <div className={styles.channelCard} onClick={scrollToForm} style={{ cursor: 'pointer' }}>
            <div className={styles.channelIconWrap}>
              <svg className={styles.channelIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className={styles.channelTitle}>Private Fitting Suite</h3>
            <span className={styles.channelDetail}>By Prior Appointment</span>
            <span className={styles.channelSubtext}>Mumbai • London • New York • Dubai</span>
          </div>

          {/* Card 4: WhatsApp Concierge */}
          <a
            href="https://wa.me/919820028721?text=Hello%20Aura%20Couture%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.channelCard}
          >
            <div className={styles.channelIconWrap}>
              <svg className={styles.channelIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className={styles.channelTitle}>VIP WhatsApp Desk</h3>
            <span className={styles.channelDetail}>Live Chat Available</span>
            <span className={styles.channelSubtext}>Instant guidance from our stylists</span>
          </a>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          3. Main Section: Interactive Form & VIP Experience Overview
          -------------------------------------------------------------------- */}
      <section className={styles.mainSection} id="consultation-form">
        <div className={styles.layoutGrid}>
          {/* Left Column: Form Container */}
          <div className={styles.formContainer}>
            {formStatus === 'success' ? (
              <div className={styles.successBox}>
                <div className={styles.successIconWrap}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request Received with Pleasure</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{formData.fullName || 'esteemed guest'}</strong>. Your inquiry regarding{' '}
                  <strong>{formData.inquiryType}</strong> has been assigned to our senior atelier concierge.
                  We will contact you via {formData.email || 'your preferred channel'} within 2 to 4 hours.
                </p>
                <button type="button" className={styles.resetBtn} onClick={handleReset}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <span className={styles.formEyebrow}>Personalized Experience</span>
                  <h2 className={styles.formTitle}>Schedule an Appointment or Inquire</h2>
                  <p className={styles.formSubtitle}>
                    Fill in your details below and our concierge team will curate a seamless private experience for you.
                  </p>
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  {/* Row 1: Full Name & Email */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel} htmlFor="fullName">
                        Full Name <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel} htmlFor="email">
                        Email Address <span className={styles.requiredStar}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Preferred Date */}
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel} htmlFor="phone">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98200 00000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel} htmlFor="preferredDate">
                        Preferred Date (Optional)
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  {/* Row 3: Inquiry Category Dropdown */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="inquiryType">
                      Nature of Inquiry <span className={styles.requiredStar}>*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className={styles.selectField}
                    >
                      <option value="Bespoke Bridal Couture">Bespoke Bridal Couture (Custom Design & Tailoring)</option>
                      <option value="Private Atelier Visit">Private Atelier Visit & Try-On</option>
                      <option value="Ready-to-Wear Gown Fitting">Ready-to-Wear Runway Gown Fitting & Alteration</option>
                      <option value="Order Status & Delivery">Existing Order Status, Tracking & Logistics</option>
                      <option value="Virtual Video Consultation">Virtual Video Consultation (International Guests)</option>
                      <option value="Press & Brand Collaborations">Press, Editorial & Brand Collaborations</option>
                    </select>
                  </div>

                  {/* Service Preference Pills */}
                  <div className={styles.preferenceGroup}>
                    <label className={styles.inputLabel}>Preferred Consultation Format</label>
                    <div className={styles.preferenceOptions}>
                      {[
                        { label: '🏛️ In-Studio Atelier', value: 'In-Studio Atelier Visit' },
                        { label: '📹 Virtual Video Fitting', value: 'Virtual Video Fitting' },
                        { label: '✉️ Email & Message', value: 'Email & WhatsApp Guidance' }
                      ].map((pref) => (
                        <div
                          key={pref.value}
                          className={`${styles.preferencePill} ${
                            formData.serviceType === pref.value ? styles.preferencePillActive : ''
                          }`}
                          onClick={() => handleServiceSelect(pref.value)}
                        >
                          {pref.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="message">
                      Additional Details & Wishes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your event date, silhouette preferences, fabrics, or any special requests..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textareaField}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={formStatus === 'submitting'}
                    id="contact-submit-btn"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Appointment Request</span>
                        <svg className={styles.submitIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column: VIP Experience & Working Hours */}
          <div className={styles.vipContainer}>
            {/* VIP Card */}
            <div className={styles.vipCard}>
              <div className={styles.vipCardHeader}>
                <span className={styles.vipBadge}>Haute Couture Standards</span>
                <h3 className={styles.vipTitle}>The Aura VIP Consultation</h3>
              </div>

              <ul className={styles.vipBenefitsList}>
                <li className={styles.vipBenefitItem}>
                  <div className={styles.benefitIconWrap}>🪡</div>
                  <div className={styles.benefitContent}>
                    <h4>Dedicated Master Stylist</h4>
                    <p>One-on-one session with our senior silhouette artists and master couturiers.</p>
                  </div>
                </li>

                <li className={styles.vipBenefitItem}>
                  <div className={styles.benefitIconWrap}>✨</div>
                  <div className={styles.benefitContent}>
                    <h4>Archival Silk & Zari Library</h4>
                    <p>Exclusive touch-and-feel access to rare mulberry silks, velvets, and hand-embroidered swatches.</p>
                  </div>
                </li>

                <li className={styles.vipBenefitItem}>
                  <div className={styles.benefitIconWrap}>🥂</div>
                  <div className={styles.benefitContent}>
                    <h4>Private Salon Hospitality</h4>
                    <p>Complimentary sparkling refreshments and a relaxed, unhurried private suite.</p>
                  </div>
                </li>

                <li className={styles.vipBenefitItem}>
                  <div className={styles.benefitIconWrap}>📐</div>
                  <div className={styles.benefitContent}>
                    <h4>Precision Bespoke Fit Guarantee</h4>
                    <p>Multi-point biometric measurements ensuring an impeccable tailored silhouette.</p>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Quick Connect */}
              <div className={styles.whatsappBox}>
                <div className={styles.whatsappInfo}>
                  <div className={styles.whatsappIconWrap}>
                    <svg className={styles.whatsappIcon} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2 1.012.899 1.588 1.109 1.761 1.21.173.101.274.087.375-.029.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.203.043.072.043.419-.101.824z" />
                    </svg>
                  </div>
                  <div className={styles.whatsappText}>
                    <h4>Prefer WhatsApp?</h4>
                    <p>Direct chat with our concierge</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919820028721?text=Hello%20Aura%20Couture%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className={styles.hoursCard}>
              <div className={styles.hoursHeader}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4>Atelier Visiting Hours</h4>
              </div>

              <div className={styles.hoursList}>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Monday – Friday</span>
                  <span className={styles.hoursTime}>10:00 AM – 8:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Saturday</span>
                  <span className={styles.hoursTime}>10:30 AM – 7:30 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Sunday</span>
                  <span className={styles.appointmentOnlyBadge}>VIP Appointments Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          4. Global Flagship Boutiques Tabs
          -------------------------------------------------------------------- */}
      <section className={styles.flagshipSection} aria-label="Global Flagships">
        <div className={styles.flagshipContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Global Presence</span>
            <h2 className={styles.sectionTitle}>Our Flagship Salons</h2>
            <p className={styles.sectionDesc}>
              Experience the world of Aura Couture in person. Visit any of our sanctuary ateliers
              for tailored fittings and runway viewings.
            </p>
          </div>

          {/* Location Selector Tabs */}
          <div className={styles.locationTabs}>
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                className={`${styles.locationTabBtn} ${
                  activeLocation === loc.id ? styles.locationTabActive : ''
                }`}
                onClick={() => setActiveLocation(loc.id)}
              >
                {loc.city}
              </button>
            ))}
          </div>

          {/* Selected Location Card */}
          <div className={styles.locationContentCard}>
            <div className={styles.locationDetails}>
              <span className={styles.locationBadge}>{currentBoutique.city}</span>
              <h3 className={styles.locationName}>{currentBoutique.name}</h3>

              <div className={styles.locationInfoList}>
                <div className={styles.locationInfoItem}>
                  <svg className={styles.locationInfoIcon} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentBoutique.address}</span>
                </div>

                <div className={styles.locationInfoItem}>
                  <svg className={styles.locationInfoIcon} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{currentBoutique.phone}</span>
                </div>

                <div className={styles.locationInfoItem}>
                  <svg className={styles.locationInfoIcon} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{currentBoutique.hours}</span>
                </div>
              </div>

              <div className={styles.locationActionBtns}>
                <button
                  type="button"
                  className={styles.appointmentBookBtn}
                  onClick={scrollToForm}
                >
                  Book In-Person Fitting
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentBoutique.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsBtn}
                >
                  <span>Get Directions</span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.locationVisual}>
              <img
                src={currentBoutique.image}
                alt={currentBoutique.name}
                className={styles.locationImg}
                loading="lazy"
              />
              <div className={styles.locationOverlay} />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          5. Concierge FAQ Accordion
          -------------------------------------------------------------------- */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Assistance & Guidance</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionDesc}>
            Everything you need to know about our couture appointments, bespoke crafting process,
            and international services.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
