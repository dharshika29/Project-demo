import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';

const CATEGORIES = ['All Stories', 'Haute Couture', 'Styling', 'Runway', 'Atelier'];

const POSTS = [
  {
    id: 1,
    title: 'The Return of Banarasi & Zardozi: Artisanal Renaissance for 2026',
    category: 'Haute Couture',
    excerpt: 'How century-old Indian handloom weaving techniques are captivating modern Paris runways, blending gold zari threads with sculptural evening silhouettes.',
    author: 'Aria Montgomery',
    date: 'Oct 2, 2026',
    readTime: '5 min read',
    image: '/saree-main.jpg'
  },
  {
    id: 2,
    title: 'Silhouette Masterclass: Choosing the Perfect Black-Tie Evening Gown',
    category: 'Styling',
    excerpt: 'From architectural column dresses to sweeping silk mermaid trains, discover the proportion secrets that red-carpet stylists use to turn heads.',
    author: 'Elena Rostova',
    date: 'Sep 28, 2026',
    readTime: '4 min read',
    image: '/hero-dress.jpg'
  },
  {
    id: 3,
    title: 'Behind the Seams: 180 Hours of Crystal Hand-Embroidery in Mumbai',
    category: 'Atelier',
    excerpt: 'Step inside our master karigar studio where master craftsmen attach 12,000 Swarovski crystals one by one to sheer illusion tulle.',
    author: 'Rajiv Sengupta',
    date: 'Sep 21, 2026',
    readTime: '6 min read',
    image: '/atelier-crafting.jpg'
  },
  {
    id: 4,
    title: 'Resort Glamour: Breathable Silk & Linen That Elevates Summer Maxis',
    category: 'Runway',
    excerpt: 'Why effortless drapery, terracotta accents, and weightless mulberry silk are defining this season’s Mediterranean getaway capsule.',
    author: 'Sophia Chen',
    date: 'Sep 15, 2026',
    readTime: '3 min read',
    image: '/hero-slide-2.jpg'
  },
  {
    id: 5,
    title: 'Cocktail Hour Sparkle: How to Style Liquid Metallic & Velvet Sequins',
    category: 'Styling',
    excerpt: 'High-octane glamour meets restrained modern tailoring. Learn how to balance shimmering paillettes with minimalist champagne accessories.',
    author: 'Elena Rostova',
    date: 'Sep 10, 2026',
    readTime: '4 min read',
    image: '/hero-slide-3.jpg'
  },
  {
    id: 6,
    title: 'The Sustainable Silk Protocol: Organic Mulberry & Zero-Waste Patterning',
    category: 'Atelier',
    excerpt: 'Our commitment to conscious luxury: partnering with organic sericulture farms and circular water dye processes across South Asia.',
    author: 'Aria Montgomery',
    date: 'Sep 02, 2026',
    readTime: '5 min read',
    image: '/saree-secondary.jpg'
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const filteredPosts = activeCategory === 'All Stories'
    ? POSTS
    : POSTS.filter((post) => post.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className={styles.blogPage}>
      {/* ── Hero Banner ── */}
      <section className={styles.heroBanner}>
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbLink} onClick={() => navigate('/')}>
              Home
            </span>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>Journal & Editorial</span>
          </div>

          <h1 className={styles.pageTitle}>
            The Aura <span className={styles.titleHighlight}>Journal</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Editorial dispatches from the runway, styling masterclasses, and stories behind our
            haute couture ateliers and master weavers.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* ── Featured Hero Article ── */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredImageWrapper}>
            <img
              src="/collections-collage.png"
              alt="Haute Couture Runway Collage"
              className={styles.featuredImage}
              onError={(e) => { e.currentTarget.src = '/hero-dress.jpg'; }}
            />
            <span className={styles.featuredBadge}>Editor's Choice</span>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.metaRow}>
              <span className={styles.metaCategory}>Haute Couture</span>
              <span className={styles.metaDot}>•</span>
              <span>October 2026</span>
              <span className={styles.metaDot}>•</span>
              <span>7 min read</span>
            </div>

            <h2 className={styles.featuredTitle}>
              Metamorphosis: Sculptural Draping and the New Era of Modern Bridal Couture
            </h2>

            <p className={styles.featuredExcerpt}>
              Exploring the convergence of architectural corsetry and cascading Banarasi silk,
              as showcased in our 2026 Grand Palais presentation in Paris. How modern brides are
              redefining classic formal elegance with dual-silhouette capes and liquid metallic lamé.
            </p>

            <div className={styles.authorRow}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>AC</div>
                <div>
                  <div className={styles.authorName}>Aura Creative Studio</div>
                  <div className={styles.authorRole}>Head of Design & Editorial</div>
                </div>
              </div>
              <button className={styles.readMoreBtn}>
                Read Full Story <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Article Cards Grid ── */}
        <div className={styles.articlesGrid}>
          {filteredPosts.map((post) => (
            <article key={post.id} className={styles.articleCard}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.cardImage}
                  onError={(e) => { e.currentTarget.src = '/hero-dress.jpg'; }}
                />
                <span className={styles.cardCategory}>{post.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{post.title}</h3>

                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span>By {post.author}</span>
                  <span className={styles.cardLink}>
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Newsletter Card ── */}
        <div className={styles.newsletterCard}>
          <span className={styles.newsletterBadge}>Private Gazette</span>
          <h2 className={styles.newsletterTitle}>Stories, Runway Access & Private Previews</h2>
          <p className={styles.newsletterSubtitle}>
            Join over 25,000 couture patrons who receive our weekly editorial briefings, atelier
            dispatches, and secret capsule drops directly in their inbox.
          </p>

          {subscribed ? (
            <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>
              ✓ You are subscribed to The Aura Gazette. Welcome to the circle.
            </div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your private email..."
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
