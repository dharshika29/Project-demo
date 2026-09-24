import React from 'react';
import styles from './About.module.css';

export default function About() {
  const folders = [
    {
      name: 'src/components/',
      desc: 'Reusable UI elements divided into common (Buttons, Cards, Inputs) and layout (Navbar, Footer, Sidebar).'
    },
    {
      name: 'src/pages/',
      desc: 'Full screen / view components corresponding to app routes (e.g. Home, About, Dashboard).'
    },
    {
      name: 'src/hooks/',
      desc: 'Reusable custom React hooks (e.g., useFetch, useAuth, useDebounce).'
    },
    {
      name: 'src/context/',
      desc: 'Global state providers (e.g., ThemeContext, UserContext, CartContext).'
    },
    {
      name: 'src/services/',
      desc: 'API calling functions, Axios/Fetch instances, and external backend integrations.'
    },
    {
      name: 'src/utils/',
      desc: 'Pure helper functions (formatting dates, math, string manipulation).'
    },
    {
      name: 'src/styles/',
      desc: 'Global styles, CSS reset, and design tokens/variables for light/dark themes.'
    },
    {
      name: 'public/',
      desc: 'Static assets served directly without bundler processing (favicons, manifest.json).'
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <h1 className={styles.aboutTitle}>React Project Folder Structure</h1>
        <p className={styles.aboutSubtitle}>
          Intha structure unga project-ai clean and modular-a maintain panna help pannum.
        </p>
      </div>

      <div className={styles.folderList}>
        {folders.map((item, idx) => (
          <div key={idx} className={styles.folderCard}>
            <div className={styles.folderBadge}>📁 {item.name}</div>
            <p className={styles.folderDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.quickCommands}>
        <h2>🚀 Quick Commands</h2>
        <div className={styles.commandBox}>
          <p><strong>1. Install dependencies:</strong></p>
          <code>npm install</code>
          <p><strong>2. Start development server:</strong></p>
          <code>npm run dev</code>
          <p><strong>3. Build for production:</strong></p>
          <code>npm run build</code>
        </div>
      </div>
    </div>
  );
}
