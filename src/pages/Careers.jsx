import React, { useState } from 'react';
import styles from './Careers.module.css';

const JOBS = [
  {
    id: 1,
    role: 'Master Zardozi & Crystal Embroidery Artisan',
    location: 'Milan Atelier, Italy',
    department: 'Haute Atelier Craft',
    type: 'Full-Time Permanent'
  },
  {
    id: 2,
    role: 'Senior Haute Couture Corsetry Pattern Drafter',
    location: 'Paris Salon, France',
    department: 'Design & Silhouette Engineering',
    type: 'Full-Time Permanent'
  },
  {
    id: 3,
    role: 'Private Clientelling & VIP Salon Consierge',
    location: 'London — Mayfair, UK',
    department: 'Client Relations & VIP Services',
    type: 'Full-Time'
  },
  {
    id: 4,
    role: 'Heritage Textile Sourcing & Sericulture Director',
    location: 'Mumbai & Karnataka, India',
    department: 'Sustainability & Supply Guild',
    type: 'Full-Time'
  },
  {
    id: 5,
    role: 'Full-Stack Digital Flagship & UX Engineer',
    location: 'Milan / Remote Flexible',
    department: 'Digital Experience & E-Commerce',
    type: 'Full-Time'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setSubmitted(false);
      setApplicantName('');
      setApplicantEmail('');
    }, 2800);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>✦ Life at Aura Couture ✦</div>
        <h1 className={styles.title}>
          Join the Maison &amp; <em>Shape Modern Couture</em>
        </h1>
        <p className={styles.subtitle}>
          We bring together visionary designers, generational weavers, corsetry architects,
          and luxury technologists in an environment that honors human artistry above all.
        </p>
      </section>

      <div className={styles.container}>
        {/* Perks Grid */}
        <div className={styles.perksGrid}>
          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>✨</div>
            <h3 className={styles.perkTitle}>Generational Mentorship</h3>
            <p className={styles.perkText}>
              Direct apprenticeships alongside master karigars and Parisian corsetry sculptors with 30+ years of runway expertise.
            </p>
          </div>
          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>🌍</div>
            <h3 className={styles.perkTitle}>Global Runway Exposure</h3>
            <p className={styles.perkText}>
              Opportunities to travel and coordinate presentations at Paris Couture Week, Milan Fashion Week, and Venice Biennale galas.
            </p>
          </div>
          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>💎</div>
            <h3 className={styles.perkTitle}>Couture Wardrobe Endowment</h3>
            <p className={styles.perkText}>
              Generous annual atelier garment allowance, bespoke tailoring, and private family couture access.
            </p>
          </div>
          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>🌿</div>
            <h3 className={styles.perkTitle}>Holistic Well-being</h3>
            <p className={styles.perkText}>
              Comprehensive private medical coverage, sabbatical options, mental wellness stipends, and flexible salon arrangements.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: '#fff', margin: '0 0 0.5rem' }}>
            Open Atelier &amp; Maison Roles
          </h2>
          <p style={{ color: '#a8a29e', margin: 0 }}>
            Explore opportunities across our European salons and global artisan hubs.
          </p>
        </div>

        <div className={styles.jobsList}>
          {JOBS.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div>
                <h3 className={styles.jobRole}>{job.role}</h3>
                <div className={styles.jobTags}>
                  <span className={styles.jobTag}>📍 {job.location}</span>
                  <span className={styles.jobTag}>🏛️ {job.department}</span>
                  <span className={styles.jobTag}>⏰ {job.type}</span>
                </div>
              </div>
              <button className={styles.applyBtn} onClick={() => setSelectedJob(job)}>
                Submit Portfolio / CV ✦
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className={styles.modalOverlay} onClick={() => setSelectedJob(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedJob(null)}>
              ✕
            </button>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.5rem', margin: '0 0 0.3rem' }}>
              Apply: {selectedJob.role}
            </h3>
            <p style={{ color: '#a8a29e', fontSize: '0.88rem', margin: '0 0 1.5rem' }}>
              {selectedJob.location} • {selectedJob.department}
            </p>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', padding: '1.25rem', borderRadius: '10px', textAlign: 'center' }}>
                ✓ Application received! Our Maison talent director will be in touch with {applicantName}.
              </div>
            ) : (
              <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--gold, #c9a84c)', marginBottom: '0.4rem' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className={styles.modalInput}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(201,168,76,0.3)', color: '#fff', padding: '0.8rem', borderRadius: '8px' }}
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--gold, #c9a84c)', marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className={styles.modalInput}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(201,168,76,0.3)', color: '#fff', padding: '0.8rem', borderRadius: '8px' }}
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--gold, #c9a84c)', marginBottom: '0.4rem' }}>
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(201,168,76,0.3)', color: '#fff', padding: '0.8rem', borderRadius: '8px' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ marginTop: '0.5rem', background: 'linear-gradient(135deg, #e8d19a 0%, #c9a84c 100%)', color: '#080a10', fontWeight: 'bold', padding: '0.9rem', borderRadius: '30px', border: 'none', cursor: 'pointer' }}
                >
                  Send Dossier to Atelier Directors ✦
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
