import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';

const CATEGORIES = [
  'All Stories',
  'Haute Couture',
  'Silk & Festive',
  'Styling Masterclass',
  'Atelier Craft',
  'Runway Reports'
];

const POSTS = [
  {
    id: 0,
    title: 'Metamorphosis: Sculptural Draping and the New Era of Modern Bridal Couture',
    category: 'Haute Couture',
    readTime: '7 min read',
    date: 'October 16, 2026',
    author: 'Aura Creative Studio',
    role: 'Head of Design & Editorial',
    avatar: 'AC',
    image: 'https://media.samyakk.in/pub/media/catalog/product/cache/d47d9b4b8c33f09ac326aed90267cb26/m/a/mauve-pink-sequins-embroidered-net-evening-gown-with-pentagon-neck-ab1604.jpg',
    excerpt: 'Exploring the convergence of architectural corsetry and cascading Banarasi silk, as showcased in our 2026 Grand Palais presentation in Paris. How modern brides are redefining classic formal elegance with dual-silhouette capes and liquid metallic lamé.',
    quote: 'True haute couture is not merely worn; it commands the atmosphere of the room. It transforms fabric into sculptural architecture.',
    paragraphs: [
      'For centuries, formal gala couture operated within rigid demarcations: heavy heritage silks belonged to traditional ceremonies, while minimalist draping dominated European galas. At our recent Grand Palais salon, that boundary dissolved into something entirely new.',
      'By blending 180 hours of hand-carved bullion zari with whisper-light French illusion tulle and boned corsetry foundations, our atelier has pioneered what critics are hailing as "Weightless Regalism." The gown holds structural discipline while swaying with ethereal fluid motion.',
      'Each silhouette undergoes a rigorous three-stage fitting protocol. Master karigars in Mumbai first shape the basque waist foundation, followed by hand-placement of micro-paillettes in Paris, ensuring every contour catches ambient chandelier lighting from every angle.'
    ],
    keyTakeaways: [
      'Architectural spiral-boned corsetry provides effortless 12-hour posture and support.',
      'Lightweight French tulle underlays allow heavy crystal embellishments without shoulder strain.',
      'Modular styling: detachable sheer cape sleeves convert formal cathedral ceremony looks into reception galas.'
    ],
    relatedCategory: 'evening-gowns',
    relatedCategoryLabel: 'Explore Evening Gowns Collection'
  },
  {
    id: 1,
    title: 'The Return of Banarasi & Zardozi: Artisanal Renaissance for 2026',
    category: 'Silk & Festive',
    readTime: '5 min read',
    date: 'October 12, 2026',
    author: 'Aria Montgomery',
    role: 'Heritage Textile Historian',
    avatar: 'AM',
    image: 'https://i.pinimg.com/736x/3a/6a/79/3a6a791a0597ad877c77af69ce9541e6.jpg',
    excerpt: 'How century-old Varanasi handloom weaving techniques are captivating modern luxury runways, blending tested gold zari threads with contemporary tailored anarkalis.',
    quote: 'A single yard of authentic handloom silk represents three generations of unbroken ancestral memory.',
    paragraphs: [
      'The modern fashion landscape is witnessing a profound re-evaluation of craftsmanship. Mass-produced embroidery is yielding to the quiet luxury of authentic heritage pit looms in Varanasi and Kanchipuram.',
      'Our latest Festive capsule demonstrates that heritage silks need not feel restrictive. Cut with modern kalidar flares, ergonomic armholes, and breathable Mulberry silk linings, these garments transition from festive soirees to international galas effortlessly.'
    ],
    keyTakeaways: [
      'Pure tested silver and gold zari threads resist tarnishing when preserved in muslin.',
      'Pairing heavy brocade anarkalis with minimalist diamond solitaires creates striking modern balance.',
      'Always request handloom certification marks to verify artisan heritage authenticity.'
    ],
    relatedCategory: 'silk-festive',
    relatedCategoryLabel: 'Shop Silk & Festive Collection'
  },
  {
    id: 2,
    title: 'Silhouette Masterclass: Choosing the Perfect Black-Tie Evening Gown',
    category: 'Styling Masterclass',
    readTime: '4 min read',
    date: 'October 08, 2026',
    author: 'Elena Rostova',
    role: 'Senior Celebrity Stylist',
    avatar: 'ER',
    image: 'https://media.samyakk.in/pub/media/catalog/product/cache/d47d9b4b8c33f09ac326aed90267cb26/b/l/blue-sequins-embroidered-net-designer-gown-with-cape-sleeves-ab1438.jpg',
    excerpt: 'From architectural column dresses to sweeping cape sleeve trains, discover the proportion secrets red-carpet stylists use to turn heads at black-tie galas.',
    quote: 'The secret to red-carpet poise is matching the neckline geometry to your natural collarbone contour.',
    paragraphs: [
      'Finding the definitive black-tie gown begins not with trend hunting, but with architectural harmony. Understanding how pentagon necklines, curved V-necks, and cape sleeve draping frame your face is the foundation of styling mastery.',
      'For gala ballrooms with high ceilings and chandeliers, gowns featuring dense cutdana and linear paillettes catch vertical light gracefully, elongating the silhouette.'
    ],
    keyTakeaways: [
      'Pentagon necklines accentuate graceful necklines without revealing excessive decolletage.',
      'Cape sleeves add royal drama while providing comfortable upper-arm mobility for dancing.',
      'Opt for puddle trains if attending active cocktail galas rather than static state dinners.'
    ],
    relatedCategory: 'evening-gowns',
    relatedCategoryLabel: 'View Evening Gowns'
  },
  {
    id: 3,
    title: 'Behind the Seams: 180 Hours of Crystal Hand-Embroidery in Mumbai',
    category: 'Atelier Craft',
    readTime: '6 min read',
    date: 'October 03, 2026',
    author: 'Rajiv Sengupta',
    role: 'Master Karigar Guild Director',
    avatar: 'RS',
    image: '/atelier-crafting.jpg',
    excerpt: 'Step inside our master karigar studio where master craftsmen attach 12,000 Swarovski crystals one by one to sheer illusion French tulle.',
    quote: 'Patience is our primary tool. A single misplaced glass bead disrupts the entire rhythmic refraction of light.',
    paragraphs: [
      'In a serene atelier illuminated by natural diffused sunlight, five master craftsmen sit around a stretched wooden adda frame. Over four weeks, they will execute over 180 hours of meticulous tambur needlework.',
      'Each crystal facet is anchored with dual-knotted spun silk thread, ensuring zero shedding during movement. It is this obsessive commitment to permanence that elevates our couture into heirloom investments.'
    ],
    keyTakeaways: [
      'Over 25,000 micro-beads are calibrated by weight to maintain lightweight balance.',
      'Double-stitched anchor knots protect the gown against snagging during high-energy galas.',
      'French tambour technique provides continuous structural tension across delicate tulle.'
    ],
    relatedCategory: 'cocktail-sparkle',
    relatedCategoryLabel: 'Discover Cocktail Sparkle'
  },
  {
    id: 4,
    title: 'Resort Glamour: Breathable Silk & Linen That Elevates Summer Maxis',
    category: 'Runway Reports',
    readTime: '4 min read',
    date: 'September 28, 2026',
    author: 'Sophia Chen',
    role: 'Resortwear Editor',
    avatar: 'SC',
    image: 'https://www.adriannapapell.com/cdn/shop/files/maxi_dresses_for_summers_1100x.jpg?v=1749205982',
    excerpt: 'Why effortless drapery, botanical prints, and weightless mulberry silk are defining this season’s Mediterranean getaway capsule.',
    quote: 'Resort luxury is the feeling of cool sea breeze passing through whisper-light silk georgette.',
    paragraphs: [
      'Summer luxury has moved past casual cottons toward high-performance natural fibers: organic linen blended with raw mulberry silk that resists creasing while allowing maximum airflow.',
      'From sunlit cliffside lunches in Amalfi to evening beach galas, tiered botanical maxis with removable belt sashes provide effortless elegance from day to night.'
    ],
    keyTakeaways: [
      'Bias-cut under-slips eliminate cling while preserving breezy air permeability.',
      'Botanical prints inspired by Mediterranean flora mask packing creases naturally.',
      'Natural mother-of-pearl buttons provide understated artisanal gleam.'
    ],
    relatedCategory: 'summer-maxi',
    relatedCategoryLabel: 'Browse Summer Maxis'
  },
  {
    id: 5,
    title: 'Cocktail Hour Sparkle: How to Style Liquid Metallic & Velvet Sequins',
    category: 'Styling Masterclass',
    readTime: '4 min read',
    date: 'September 22, 2026',
    author: 'Elena Rostova',
    role: 'Senior Celebrity Stylist',
    avatar: 'ER',
    image: 'https://nolabels.in/cdn/shop/files/sequin_dress_for_women.jpg?v=1786372992&width=1000',
    excerpt: 'High-octane glamour meets restrained modern tailoring. Learn how to balance shimmering paillettes with minimalist champagne accessories.',
    quote: 'When your dress reflects the stars, let your jewelry whisper rather than shout.',
    paragraphs: [
      'Styling all-over sequin cocktail dresses is an exercise in intentional restraint. Because the dress itself acts as a source of dynamic luminescence, accessories must provide clean architectural grounding.',
      'Pairing a prismatic mini with sleek satin stiletto mules and a compact structured clutch ensures the focal point remains on your magnetic evening presence.'
    ],
    keyTakeaways: [
      'Keep jewelry clean: choose geometric crystal studs over dangling chandeliers.',
      'Matte makeup finishes balance the hyper-reflective nature of pave sequin mesh.',
      'A tailored blazer draped over shoulders adds effortless European cool.'
    ],
    relatedCategory: 'cocktail-sparkle',
    relatedCategoryLabel: 'Shop Cocktail Sparkle'
  },
  {
    id: 6,
    title: 'The Sustainable Silk Protocol: Organic Mulberry & Zero-Waste Patterning',
    category: 'Atelier Craft',
    readTime: '5 min read',
    date: 'September 15, 2026',
    author: 'Aria Montgomery',
    role: 'Sustainability Director',
    avatar: 'AM',
    image: 'https://clothsvilla.com/cdn/shop/files/maroon-silk-chanderi-anarkali-set_1.jpg?format=webp&v=1771675375&width=480',
    excerpt: 'Our commitment to conscious luxury: partnering with organic sericulture farms and circular water dye processes across South Asia.',
    quote: 'True luxury respects the Earth that cultivated its thread and the hands that wove it.',
    paragraphs: [
      'Conscious fashion is no longer an afterthought; it is the ultimate measure of modern couture prestige. Our atelier operates on a strict zero-waste tessellation cutting protocol where remaining silk remnants are repurposed for artisanal hair accessories and garment dust bags.',
      'By utilizing closed-loop natural vegetable and mineral dye baths, we ensure zero toxic effluent reaches local water tables while achieving rich jewel tones.'
    ],
    keyTakeaways: [
      '100% certified pesticide-free organic mulberry sericulture in Mysore.',
      'Non-toxic natural vegetable mordants yield deep, hypoallergenic jewel hues.',
      'Guaranteed lifetime repair and garment preservation program for every client.'
    ],
    relatedCategory: 'silk-festive',
    relatedCategoryLabel: 'Explore Heritage Silk'
  },
  {
    id: 7,
    title: 'Color Theory for Evening Gala Events: Jewel Tones vs. Cosmic Monochromes',
    category: 'Haute Couture',
    readTime: '5 min read',
    date: 'September 08, 2026',
    author: 'Marcus Vance',
    role: 'Color Architect & Couture Consultant',
    avatar: 'MV',
    image: 'https://media.samyakk.in/pub/media/catalog/product/cache/d47d9b4b8c33f09ac326aed90267cb26/d/a/dark-green-sequins-embroidered-net-evening-gown-aa4295.jpg',
    excerpt: 'How ambient chandelier lighting transforms rich emeralds, imperial sapphires, and champagne velvets into dramatic visual focal points.',
    quote: 'Color in couture is an acoustic vibration. It changes pitch depending on the warmth of the room.',
    paragraphs: [
      'Gala ballrooms are dynamic lighting environments, often shifting from golden cocktail hour warmth to dramatic cool spotlights during dinners. Selecting a gown color that responds gracefully to this shift is a stylist trade secret.',
      'Deep emerald green and sapphire blue absorb and refract warm ambient candlelight into mesmerizing depth, while molten champagne golds glow luminously.'
    ],
    keyTakeaways: [
      'Deep jewel tones (emerald, sapphire, ruby) flatter virtually every skin undertone.',
      'Metallic gold yarns reflect warm candlelight, making skin appear radiant and dewy.',
      'Monochrome black velvet creates high-contrast architectural presence in black-tie photos.'
    ],
    relatedCategory: 'evening-gowns',
    relatedCategoryLabel: 'Explore Jewel Gowns'
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [copiedToast, setCopiedToast] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter posts by category and search term
  const allAvailablePosts = POSTS;

  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === 'All Stories' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShareArticle = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2400);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const openPostModal = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.blogPage}>
      {/* ── Left-Aligned Editorial Breadcrumb Bar ── */}
      <section className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbInner}>
          <nav className={styles.breadcrumbNav}>
            <span className={styles.breadcrumbLink} onClick={() => navigate('/')}>
              Home
            </span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbLink} onClick={() => navigate('/collections')}>
              Collections
            </span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>Journal & Editorial</span>
          </nav>
          <div className={styles.editionIndicator}>
            <span className={styles.editionSpark}>✦</span>
            <span>Volume IV • Autumn/Winter 2026 Atelier Gazette</span>
          </div>
        </div>
      </section>

      {/* ── Editorial Header & Controls ── */}
      <section className={styles.journalHeaderSection}>
        <div className={styles.headerInner}>
          <div className={styles.titleArea}>
            <span className={styles.editorialBadge}>The Aura Atelier Journal</span>
            <h1 className={styles.pageTitle}>
              Dispatches from the <span className={styles.titleHighlight}>Runway & Atelier</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Behind-the-scenes masterclasses, artisan weaving chronicles, silhouette styling
              guides, and haute couture dispatches curated by our creative directors.
            </p>
          </div>

          {/* Search & Category Filter Navigation */}
          <div className={styles.controlsRow}>
            {/* Live Search Input */}
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search stories, karigars, styling tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className={styles.categoriesPills}>
              {CATEGORIES.map((cat) => {
                const count =
                  cat === 'All Stories'
                    ? allAvailablePosts.length
                    : allAvailablePosts.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`${styles.categoryTabBtn} ${activeCategory === cat ? styles.categoryTabActive : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className={styles.categoryCountBadge}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <main className={styles.container}>
        {/* ── Articles Grid ── */}
        <section className={styles.articlesSection}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionHeading}>
              {activeCategory === 'All Stories' ? 'Latest Gazette Releases' : `${activeCategory} Chronicles`}
              <span className={styles.resultsBadge}>({filteredPosts.length} stories)</span>
            </h2>
            {searchQuery && (
              <span className={styles.activeFilterQuery}>
                Matching "{searchQuery}"
                <button onClick={() => setSearchQuery('')}>✕</button>
              </span>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className={styles.emptyStateContainer}>
              <div className={styles.emptyIcon}>📖</div>
              <h3 className={styles.emptyTitle}>No Stories Found</h3>
              <p className={styles.emptyText}>
                No editorial dispatches match your filter or search query "{searchQuery}".
              </p>
              <button
                className={styles.resetSearchBtn}
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All Stories');
                }}
              >
                Reset Filters & View All
              </button>
            </div>
          ) : (
            <div className={styles.articlesGrid}>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={styles.articleCard}
                  onClick={() => openPostModal(post)}
                >
                  <div className={styles.cardImageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.cardImage} />
                    <span className={styles.cardCategory}>{post.category}</span>
                    <button
                      className={`${styles.cardBookmarkIconBtn} ${bookmarkedIds.includes(post.id) ? styles.bookmarkIconActive : ''}`}
                      onClick={(e) => handleToggleBookmark(post.id, e)}
                      title="Bookmark story"
                      aria-label="Bookmark"
                    >
                      {bookmarkedIds.includes(post.id) ? '★' : '☆'}
                    </button>
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
                      <div className={styles.cardAuthorBlock}>
                        <span className={styles.authorMiniAvatar}>{post.avatar}</span>
                        <span>{post.author}</span>
                      </div>
                      <span className={styles.cardLink}>
                        Read Story <span>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ── Newsletter Card ── */}
        <section className={styles.newsletterCard}>
          <span className={styles.newsletterBadge}>✦ Private Gazette Invitation</span>
          <h2 className={styles.newsletterTitle}>Stories, Runway Access & Private Previews</h2>
          <p className={styles.newsletterSubtitle}>
            Join over 25,000 couture patrons who receive our weekly editorial briefings, atelier
            dispatches, and secret capsule drops directly in their inbox.
          </p>

          {subscribed ? (
            <div className={styles.subscribedConfirmation}>
              ✓ You are subscribed to The Aura Gazette. Welcome to the circle.
            </div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your private email address..."
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe to Gazette
              </button>
            </form>
          )}
        </section>
      </main>

      {/* =========================================================================
          INTERACTIVE FULL ARTICLE READER MODAL (HIGH LUXURY EDITORIAL FLOW)
          ========================================================================= */}
      {selectedPost && (
        <div className={styles.articleModalOverlay} onClick={() => setSelectedPost(null)}>
          <div className={styles.articleModalContainer} onClick={(e) => e.stopPropagation()}>
            {/* Modal Sticky Header */}
            <div className={styles.modalTopBar}>
              <div className={styles.modalBreadcrumb}>
                <span>Journal</span>
                <span>/</span>
                <span>{selectedPost.category}</span>
              </div>

              <div className={styles.modalTopActions}>
                <button
                  className={`${styles.modalActionBtn} ${bookmarkedIds.includes(selectedPost.id) ? styles.modalBookmarkActive : ''}`}
                  onClick={(e) => handleToggleBookmark(selectedPost.id, e)}
                  title="Bookmark"
                >
                  {bookmarkedIds.includes(selectedPost.id) ? '🔖 Saved' : '🔖 Bookmark'}
                </button>
                <button
                  className={styles.modalActionBtn}
                  onClick={handleShareArticle}
                  title="Copy link"
                >
                  {copiedToast ? '✓ Link Copied!' : '🔗 Share'}
                </button>
                <button
                  className={styles.modalCloseBtn}
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close reader"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className={styles.modalScrollBody}>
              {/* Cover Image */}
              <div className={styles.modalCoverWrapper}>
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className={styles.modalCoverImage}
                />
                <span className={styles.modalCategoryBadge}>{selectedPost.category}</span>
              </div>

              <div className={styles.modalEditorialContent}>
                {/* Meta */}
                <div className={styles.modalMetaRow}>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>By {selectedPost.author} ({selectedPost.role})</span>
                </div>

                {/* Title */}
                <h1 className={styles.modalArticleTitle}>{selectedPost.title}</h1>

                {/* Excerpt Lead */}
                <p className={styles.modalLeadExcerpt}>{selectedPost.excerpt}</p>

                {/* Pull Quote */}
                {selectedPost.quote && (
                  <blockquote className={styles.modalPullQuote}>
                    "{selectedPost.quote}"
                  </blockquote>
                )}

                {/* Paragraphs */}
                <div className={styles.modalParagraphs}>
                  {selectedPost.paragraphs?.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? styles.dropCapParagraph : ''}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                {selectedPost.keyTakeaways && (
                  <div className={styles.takeawaysCard}>
                    <h4 className={styles.takeawaysTitle}>✦ Key Atelier Takeaways:</h4>
                    <ul className={styles.takeawaysList}>
                      {selectedPost.keyTakeaways.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Curated Collection Link */}
                {selectedPost.relatedCategory && (
                  <div className={styles.shopLookCard}>
                    <div>
                      <span className={styles.shopLookSub}>Featured Silhouette Category</span>
                      <h4 className={styles.shopLookHeading}>{selectedPost.relatedCategoryLabel}</h4>
                    </div>
                    <button
                      className={styles.shopLookBtn}
                      onClick={() => {
                        setSelectedPost(null);
                        navigate(`/${selectedPost.relatedCategory}`);
                      }}
                    >
                      Shop Look in Collection <span>→</span>
                    </button>
                  </div>
                )}

                {/* Modal Footer */}
                <div className={styles.modalFooterRow}>
                  <button
                    className={styles.modalCloseFooterBtn}
                    onClick={() => setSelectedPost(null)}
                  >
                    Close Article
                  </button>
                  <button
                    className={styles.backToTopBtn}
                    onClick={() => {
                      const container = document.querySelector(`.${styles.modalScrollBody}`);
                      if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    ↑ Back to Top
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
