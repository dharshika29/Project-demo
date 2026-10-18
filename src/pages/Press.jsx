import React, { useState } from 'react';
import styles from './Press.module.css';

const ARTICLES = [
  {
    outlet: 'Vogue Runway',
    date: 'October 2026',
    quote: '"Aura Couture has synthesized the architectural discipline of Milanese tailoring with the soul-stirring grandeur of Indian heritage silk."',
    summary: 'Suzy Menkes reviews our Grand Palais Paris presentation, praising the revolutionary Weightless Corsetry foundations.'
  },
  {
    outlet: "Harper's Bazaar Couture",
    date: 'September 2026',
    quote: '"The definitive modern bridal renaissance. Liquid lamé capes and pure 24k tested zari that feels light as sea spray."',
    summary: 'Selected as the Headline Cover Feature for Bazaar’s International Autumn Bridal Almanac.'
  },
  {
    outlet: 'The Business of Fashion',
    date: 'August 2026',
    quote: '"By establishing direct living-wage cooperatives with 380+ Varanasi handloom karigars, Aura Couture proves ethical luxury is commercially invincible."',
    summary: 'In-depth case study analyzing our circular sericulture and zero-effluent dye innovations.'
  },
  {
    outlet: 'Elle Decor & Salon',
    date: 'July 2026',
    quote: '"Inside the Via Montenapoleone flagship: velvet-panelled fitting salons, champagne salons, and private vault appointments."',
    summary: 'Exclusive architectural tour of our Milan atelier designed by Studio Dimore.'
  }
];

export default function Press() {
  const [downloadToast, setDownloadToast] = useState(false);

  const handleDownload = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.badge}>✦ Editorial Dispatches &amp; Accolades ✦</div>
        <h1 className={styles.title}>
          Press, Media &amp; <em>Runway Reviews</em>
        </h1>
        <p className={styles.subtitle}>
          Official statements, high-resolution media dossiers, runway chronicles,
          and features from leading global fashion publications.
        </p>
      </section>

      <div className={styles.container}>
        <div className={styles.pressGrid}>
          {ARTICLES.map((art, idx) => (
            <div key={idx} className={styles.pressCard}>
              <div className={styles.pressMediaHeader}>
                <span className={styles.outletName}>{art.outlet}</span>
                <span className={styles.pressDate}>{art.date}</span>
              </div>
              <div className={styles.pressBody}>
                <p className={styles.pressQuote}>{art.quote}</p>
                <p className={styles.pressSummary}>{art.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Kit Card */}
        <div className={styles.mediaKitCard}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#fff', margin: '0 0 0.4rem' }}>
              Official 2026 Atelier Media &amp; Press Dossier
            </h3>
            <p style={{ color: '#a8a29e', margin: 0, fontSize: '0.95rem' }}>
              Includes 300 DPI high-resolution runway campaign stills, brand typography vectors, and executive bios.
            </p>
          </div>
          <button className={styles.kitBtn} onClick={handleDownload}>
            {downloadToast ? '✓ Downloading Media Kit (ZIP)' : 'Download Press Dossier (84 MB) ✦'}
          </button>
        </div>
      </div>
    </div>
  );
}
