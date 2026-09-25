import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Emerald Zari Runway Gown',
    category: 'Evening Gowns',
    price: 380,
    originalPrice: 490,
    rating: 4.9,
    reviews: 142,
    tag: 'Runway Edit',
    image: '/hero-dress.jpg',
    colors: ['#059669', '#0f172a', '#d97706'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Cut from heavy mulberry silk with hand-woven gold zari borders and cascading split sleeves. Featured in the 2026 Spring Couture collection.'
  },
  {
    id: 2,
    name: 'Royal Crimson Velvet Saree Gown',
    category: 'Silk & Festive',
    price: 420,
    originalPrice: 550,
    rating: 5.0,
    reviews: 98,
    tag: 'Bestseller',
    image: '/spotlight-dress.jpg',
    colors: ['#881337', '#701a75', '#0f172a'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'A harmonious blend of royal silk velvet and micro-zardozi embroidery with an architectural detachable cape drape.'
  },
  {
    id: 3,
    name: 'Champagne Silk Halter Maxi',
    category: 'Summer Maxi',
    price: 260,
    originalPrice: 320,
    rating: 4.8,
    reviews: 76,
    tag: 'New Arrival',
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    colors: ['#fef3c7', '#fed7aa', '#f43f5e'],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Liquid silk-satin slip dress featuring a sculpted cowl neckline, cross-back ties, and a fluid bias-cut hem.'
  },
  {
    id: 4,
    name: 'Midnight Celestial Sequin Dress',
    category: 'Cocktail Sparkle',
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviews: 115,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    colors: ['#0f172a', '#1e1b4b', '#312e81'],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Hand-applied micro sequins over midnight stretch mesh. Catches ambient light gracefully from every dimension.'
  },
  {
    id: 5,
    name: 'Blush Rose Floral Embroidered Gown',
    category: 'Evening Gowns',
    price: 390,
    originalPrice: 480,
    rating: 4.9,
    reviews: 64,
    tag: 'Limited Drop',
    image:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    colors: ['#fbcfe8', '#f472b6', '#cbd5e1'],
    sizes: ['S', 'M', 'L'],
    description:
      'Pastel romantic tulle overlaid with French botanical threadwork and subtly shimmering seed pearls.'
  },
  {
    id: 6,
    name: 'Peacock Blue Banarasi Fusion Dress',
    category: 'Silk & Festive',
    price: 450,
    originalPrice: 580,
    rating: 5.0,
    reviews: 82,
    tag: 'Artisan Heritage',
    image:
      'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80',
    colors: ['#0284c7', '#0369a1', '#14b8a6'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Authentic Katan silk crafted in Varanasi with a modern structured corseted bodice and sweeping floor-length flair.'
  },
  {
    id: 7,
    name: 'Tuscan Sun Linen Pleated Sundress',
    category: 'Summer Maxi',
    price: 210,
    originalPrice: 260,
    rating: 4.7,
    reviews: 53,
    tag: 'Eco-Luxe',
    image:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    colors: ['#fde047', '#fed7aa', '#ffffff'],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      '100% certified organic Italian flax linen with delicate sun-ray knife pleating and mother-of-pearl buttons.'
  },
  {
    id: 8,
    name: 'Onyx Feather & Crystal Gala Dress',
    category: 'Cocktail Sparkle',
    price: 480,
    originalPrice: 620,
    rating: 5.0,
    reviews: 41,
    tag: 'Haute Couture',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    colors: ['#09090b', '#27272a', '#71717a'],
    sizes: ['XS', 'S', 'M'],
    description:
      'Architectural crepe silhouette adorned with cruelty-free ostrich feather accents and Swarovski crystal piping.'
  }
];

const CATEGORIES = [
  'All Dresses',
  'Evening Gowns',
  'Silk & Festive',
  'Summer Maxi',
  'Cocktail Sparkle'
];

export default function Home({ onNavigateAbout, cartCount, setCartCount }) {
  const [selectedCategory, setSelectedCategory] = useState('All Dresses');
  const [wishlist, setWishlist] = useState(new Set([1, 4]));
  const [quickViewDress, setQuickViewDress] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [toastMessage, setToastMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [discountClaimed, setDiscountClaimed] = useState(false);

  // Countdown timer for Flash Sale
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleWishlistToggle = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
        triggerToast('Removed from your Wishlist');
      } else {
        updated.add(id);
        triggerToast('Added to your Wishlist ❤️');
      }
      return updated;
    });
  };

  const handleAddToCart = (dress, e) => {
    if (e) e.stopPropagation();
    setCartCount((c) => c + 1);
    const size = selectedSizes[dress.id] || dress.sizes[0];
    triggerToast(`Added ${dress.name} (${size}) to Bag! 🛍️`);
    if (quickViewDress) setQuickViewDress(null);
  };

  const filteredProducts =
    selectedCategory === 'All Dresses'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === selectedCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setDiscountClaimed(true);
      triggerToast('VIP Welcome Code: AURA-FIRST-15 Activated! ✨');
    }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Toast Notification */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}

      {/* Top Luxury Announcement Bar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementContent}>
          <span>✨ <strong>SPRING COUTURE 2026</strong>: Flat 40% OFF with code <code>AURA40</code></span>
          <span className={styles.announcementDivider}>•</span>
          <span>Complimentary Express Shipping on Orders Over $150</span>
          <span className={styles.announcementDivider}>•</span>
          <span>Handcrafted Luxury Silks</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Left Column: Editorial Copy */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.sparkle}>✨</span> Haute Couture Spring/Summer 2026
            </div>

            <h1 className={styles.heroTitle}>
              Where Elegance Meets <span className={styles.heroSerif}>Pure Couture.</span>
            </h1>

            <p className={styles.heroDescription}>
              Handcrafted designer gowns, ethereal mulberry silks, and red-carpet festive attire tailored for the contemporary muse who refuses to blend in.
            </p>

            <div className={styles.heroCtaGroup}>
              <a href="#collections" className={styles.btnPrimary}>
                Explore Runway Edit <span>➔</span>
              </a>
              <button
                className={styles.btnSecondary}
                onClick={() => setQuickViewDress(PRODUCTS[0])}
              >
                <span>▶</span> Spotlight Preview
              </button>
            </div>

            <div className={styles.heroStatsRow}>
              <div className={styles.heroStatItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Curated Silhouettes</span>
              </div>
              <div className={styles.statBorder}></div>
              <div className={styles.heroStatItem}>
                <span className={styles.statNumber}>4.95 ★</span>
                <span className={styles.statLabel}>Global Stylist Rating</span>
              </div>
              <div className={styles.statBorder}></div>
              <div className={styles.heroStatItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Authentic Silk & Zari</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Glassmorphism Overlays */}
          <div className={styles.heroRight}>
            <div className={styles.heroImageWrapper}>
              <img
                src="/hero-dress.jpg"
                alt="Emerald Zari Runway Gown"
                className={styles.heroImage}
              />
              <div className={styles.heroImageGlow}></div>

              {/* Floating Badge 1: Product Pill */}
              <div className={styles.floatingProductCard}>
                <div className={styles.floatingBadgeTag}>Runway Highlight</div>
                <div className={styles.floatingDressTitle}>Emerald Zari Gown</div>
                <div className={styles.floatingPriceRow}>
                  <span className={styles.floatingPrice}>$380</span>
                  <span className={styles.floatingOldPrice}>$490</span>
                  <span className={styles.floatingDiscount}>-22%</span>
                </div>
              </div>

              {/* Floating Badge 2: Stylist Rating */}
              <div className={styles.floatingRatingCard}>
                <div className={styles.stars}>★★★★★</div>
                <div className={styles.ratingText}>"Epitome of modern luxury."</div>
                <div className={styles.ratingAuthor}>— Vogue Fashion Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Filters */}
      <section id="collections" className={styles.catalogSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.subHeading}>THE CURATED CATALOG</div>
          <h2 className={styles.sectionTitle}>
            Discover The <span className={styles.italicWord}>Runway</span> Collection
          </h2>
          <p className={styles.sectionSubtitle}>
            Every silhouette is cut with precision, using the finest mulberry silks, French tulles, and hand-embroidered artisanal motifs.
          </p>
        </div>

        <div className={styles.categoryPills}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryPill} ${
                selectedCategory === cat ? styles.categoryPillActive : ''
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              <span className={styles.pillCount}>
                {cat === 'All Dresses'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.map((dress) => {
            const isWishlisted = wishlist.has(dress.id);
            const activeColor = selectedColors[dress.id] || dress.colors[0];
            const activeSize = selectedSizes[dress.id] || dress.sizes[0];

            return (
              <div
                key={dress.id}
                className={styles.productCard}
                onClick={() => setQuickViewDress(dress)}
              >
                {/* Image Container with Badges */}
                <div className={styles.cardImageContainer}>
                  <img
                    src={dress.image}
                    alt={dress.name}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.tagBadge}>{dress.tag}</div>

                  {/* Wishlist Button */}
                  <button
                    className={`${styles.wishlistBtn} ${
                      isWishlisted ? styles.wishlistActive : ''
                    }`}
                    onClick={(e) => handleWishlistToggle(dress.id, e)}
                    title="Add to Wishlist"
                  >
                    {isWishlisted ? '❤️' : '🤍'}
                  </button>

                  {/* Overlay Quick Action */}
                  <div className={styles.cardHoverOverlay}>
                    <button
                      className={styles.quickViewBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewDress(dress);
                      }}
                    >
                      Quick View 👁️
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className={styles.cardDetails}>
                  <div className={styles.cardCategory}>{dress.category}</div>
                  <h3 className={styles.cardName}>{dress.name}</h3>

                  <div className={styles.ratingRow}>
                    <span className={styles.starIcon}>★</span>
                    <span className={styles.ratingVal}>{dress.rating}</span>
                    <span className={styles.reviewCount}>({dress.reviews})</span>
                  </div>

                  {/* Swatches & Sizes Preview */}
                  <div className={styles.swatchRow} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.colorDots}>
                      {dress.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className={`${styles.colorDot} ${
                            activeColor === color ? styles.colorDotActive : ''
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [dress.id]: color
                            }))
                          }
                        />
                      ))}
                    </div>

                    <div className={styles.sizePills}>
                      {dress.sizes.slice(0, 3).map((size) => (
                        <span
                          key={size}
                          className={`${styles.sizePill} ${
                            activeSize === size ? styles.sizePillActive : ''
                          }`}
                          onClick={() =>
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [dress.id]: size
                            }))
                          }
                        >
                          {size}
                        </span>
                      ))}
                      {dress.sizes.length > 3 && (
                        <span className={styles.sizeMore}>
                          +{dress.sizes.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className={styles.cardFooter}>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>${dress.price}</span>
                      <span className={styles.oldPrice}>
                        ${dress.originalPrice}
                      </span>
                    </div>

                    <button
                      className={styles.addToBagBtn}
                      onClick={(e) => handleAddToCart(dress, e)}
                    >
                      Bag +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Limited Edition Spotlight Lookbook Banner with Live Countdown */}
      <section className={styles.spotlightBanner}>
        <div className={styles.spotlightContainer}>
          <div className={styles.spotlightImageCol}>
            <img
              src="/spotlight-dress.jpg"
              alt="Crimson Velvet Saree Gown"
              className={styles.spotlightImage}
            />
            <div className={styles.spotlightBadge}>Only 18 Pieces Left</div>
          </div>

          <div className={styles.spotlightInfoCol}>
            <div className={styles.spotlightTag}>EXCLUSIVE PRIVATE DROP</div>
            <h2 className={styles.spotlightTitle}>
              The Royal Crimson <br />
              <span className={styles.italicWord}>Velvet & Zardozi</span> Edition
            </h2>
            <p className={styles.spotlightDesc}>
              A masterclass in modern bridal and gala glamour. Impeccably tailored from 100% royal mulberry velvet with genuine antique gold bullion work.
            </p>

            {/* Countdown Box */}
            <div className={styles.countdownContainer}>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownVal}>
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Hours</span>
              </div>
              <span className={styles.countdownColon}>:</span>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownVal}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Mins</span>
              </div>
              <span className={styles.countdownColon}>:</span>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownVal}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Secs</span>
              </div>
            </div>

            <div className={styles.spotlightActions}>
              <button
                className={styles.btnPrimary}
                onClick={() => setQuickViewDress(PRODUCTS[1])}
              >
                Claim This Silhouette ($420)
              </button>
              <button
                className={styles.btnSecondary}
                onClick={onNavigateAbout}
              >
                Project Structure ➔
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Love & Press Proof */}
      <section className={styles.reviewsSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.subHeading}>CRITICS & CLIENTS</div>
          <h2 className={styles.sectionTitle}>Adored by Modern Muses</h2>
        </div>

        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewQuote}>
              "The drapery and shimmer of the Emerald Zari gown is breathtaking. Wore it to the Milan Gala and received countless compliments."
            </p>
            <div className={styles.reviewerInfo}>
              <span className={styles.reviewerName}>Eleanor Vance</span>
              <span className={styles.reviewerCity}>Paris • Verified Couture Client</span>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewQuote}>
              "The Banarasi fusion dress arrived in customized luxury packaging in 48 hours. The pure silk touch and fit are top-tier perfection."
            </p>
            <div className={styles.reviewerInfo}>
              <span className={styles.reviewerName}>Priya Ranganathan</span>
              <span className={styles.reviewerCity}>London • Wedding Guest</span>
            </div>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.reviewStars}>★★★★★</div>
            <p className={styles.reviewQuote}>
              "Unmatched silhouette definition. The attention to detail in the zardozi threadwork sets Aura Couture far above luxury retail brands."
            </p>
            <div className={styles.reviewerInfo}>
              <span className={styles.reviewerName}>Sophia Montgomery</span>
              <span className={styles.reviewerCity}>New York • Fashion Stylist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Craftsmanship Pillars */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🕊️</div>
            <h4 className={styles.trustTitle}>Ethical Artisan Mulberry Silk</h4>
            <p className={styles.trustDesc}>
              Zero synthetic adulterants. Hand-spun silk fibers directly from generational master weavers.
            </p>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>⚡</div>
            <h4 className={styles.trustTitle}>Express Courier Delivery</h4>
            <p className={styles.trustDesc}>
              Direct to your suite in 48 to 72 hours worldwide with insured signature tracking.
            </p>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🪡</div>
            <h4 className={styles.trustTitle}>Bespoke Tailoring Support</h4>
            <p className={styles.trustDesc}>
              Complimentary alteration consultation with our in-house atelier master stylists.
            </p>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>✨</div>
            <h4 className={styles.trustTitle}>Seamless 30-Day Returns</h4>
            <p className={styles.trustDesc}>
              Try at leisure in the comfort of your home with prepaid doorstep concierge pick-up.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Club Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterBadge}>AURA VIP SALON</div>
          <h2 className={styles.newsletterTitle}>
            Join The Inner Circle. Receive <span className={styles.italicWord}>15% Off</span>
          </h2>
          <p className={styles.newsletterDesc}>
            Gain priority runway access, invitation-only private drops, and personal trunk show reservations.
          </p>

          {discountClaimed ? (
            <div className={styles.claimedBox}>
              🎉 Welcome to the Salon! Use code <strong>AURA-FIRST-15</strong> at checkout.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                required
                placeholder="Enter your personal email address..."
                className={styles.emailInput}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Unlock Privilege
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewDress && (
        <div
          className={styles.modalOverlay}
          onClick={() => setQuickViewDress(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setQuickViewDress(null)}
            >
              ✕
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageCol}>
                <img
                  src={quickViewDress.image}
                  alt={quickViewDress.name}
                  className={styles.modalImage}
                />
                <div className={styles.modalTag}>{quickViewDress.tag}</div>
              </div>

              <div className={styles.modalInfoCol}>
                <div className={styles.modalCategory}>
                  {quickViewDress.category}
                </div>
                <h2 className={styles.modalTitle}>{quickViewDress.name}</h2>

                <div className={styles.modalRating}>
                  <span className={styles.starIcon}>★</span>
                  <span>{quickViewDress.rating} Rating</span>
                  <span className={styles.reviewDot}>•</span>
                  <span>{quickViewDress.reviews} Verified Inquiries</span>
                </div>

                <div className={styles.modalPriceRow}>
                  <span className={styles.modalPrice}>
                    ${quickViewDress.price}
                  </span>
                  <span className={styles.modalOldPrice}>
                    ${quickViewDress.originalPrice}
                  </span>
                  <span className={styles.modalSavePill}>
                    Save $
                    {quickViewDress.originalPrice - quickViewDress.price}
                  </span>
                </div>

                <p className={styles.modalDesc}>{quickViewDress.description}</p>

                {/* Available Sizes in Modal */}
                <div className={styles.modalOptionGroup}>
                  <label className={styles.optionLabel}>Select Silhouette Size:</label>
                  <div className={styles.modalSizeList}>
                    {quickViewDress.sizes.map((sz) => (
                      <button
                        key={sz}
                        className={`${styles.modalSizeBtn} ${
                          (selectedSizes[quickViewDress.id] ||
                            quickViewDress.sizes[0]) === sz
                            ? styles.modalSizeBtnActive
                            : ''
                        }`}
                        onClick={() =>
                          setSelectedSizes((prev) => ({
                            ...prev,
                            [quickViewDress.id]: sz
                          }))
                        }
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Colors in Modal */}
                <div className={styles.modalOptionGroup}>
                  <label className={styles.optionLabel}>Atelier Color Tone:</label>
                  <div className={styles.modalColorList}>
                    {quickViewDress.colors.map((c, i) => (
                      <span
                        key={i}
                        className={`${styles.colorDotLg} ${
                          (selectedColors[quickViewDress.id] ||
                            quickViewDress.colors[0]) === c
                            ? styles.colorDotLgActive
                            : ''
                        }`}
                        style={{ backgroundColor: c }}
                        onClick={() =>
                          setSelectedColors((prev) => ({
                            ...prev,
                            [quickViewDress.id]: c
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className={styles.modalActions}>
                  <button
                    className={styles.modalAddBtn}
                    onClick={() => handleAddToCart(quickViewDress)}
                  >
                    Add To Shopping Bag 🛍️
                  </button>
                  <button
                    className={`${styles.modalWishlistBtn} ${
                      wishlist.has(quickViewDress.id)
                        ? styles.wishlistActive
                        : ''
                    }`}
                    onClick={(e) => handleWishlistToggle(quickViewDress.id, e)}
                  >
                    {wishlist.has(quickViewDress.id)
                      ? '❤️ Wishlisted'
                      : '🤍 Add to Wishlist'}
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
