import React, { useState } from 'react';
import Button from '../components/common/Button';
import styles from './Home.module.css';

export default function Home({ onNavigateAbout }) {
  const [count, setCount] = useState(0);

  const features = [
    {
      icon: '📁',
      title: 'Modular Components',
      description: 'Clean split between reusable generic UI widgets and layout modules.'
    },
    {
      icon: '⚡',
      title: 'Vite Powered',
      description: 'Blazing fast Hot Module Replacement (HMR) and optimized builds.'
    },
    {
      icon: '🎨',
      title: 'Modern CSS & Themes',
      description: 'CSS variables design system with built-in Light & Dark theme support.'
    },
    {
      icon: '🎣',
      title: 'Custom Hooks & State',
      description: 'Clean state management using Context API and custom reusable hooks.'
    }
  ];

  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.badge}>✨ Standard React Project Setup</div>
        <h1 className={styles.heroTitle}>
          Modern React <span className={styles.gradientText}>Architecture</span>
        </h1>
        <p className={styles.heroDescription}>
          Clean, scalable, and developer-friendly folder structure ready for your components,
          state, pages, and API integration.
        </p>

        <div className={styles.heroActions}>
          <Button variant="primary" size="lg" onClick={() => setCount((c) => c + 1)}>
            Counter: {count}
          </Button>
          <Button variant="secondary" size="lg" onClick={onNavigateAbout}>
            Explore Folder Structure ➔
          </Button>
        </div>
      </section>

      <section className={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
