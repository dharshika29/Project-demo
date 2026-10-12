import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, PRODUCTS } from '../data/products';
import styles from './ProductDetail.module.css';

export default function ProductDetail({ cartCount, setCartCount, wishlistCount, setWishlistCount }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = getProductById(id);

  // States
  const [selectedImg, setSelectedImg] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { name: 'Gold', hex: '#c9a84c' });
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('craft');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedNotification, setAddedNotification] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);

  // Update selected image and defaults when product changes
  useEffect(() => {
    setSelectedImg(product.image);
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, product]);

  const handleAddToCart = () => {
    if (setCartCount) {
      setCartCount((prev) => prev + quantity);
    }
    setAddedNotification(true);
    setTimeout(() => {
      setAddedNotification(false);
    }, 3500);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => {
      const next = !prev;
      if (setWishlistCount) {
        setWishlistCount((c) => (next ? c + 1 : Math.max(0, c - 1)));
      }
      return next;
    });
  };

  // Related / recommended products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className={styles.productDetailPage}>
      {/* ── Top Notification Banner ── */}
      {addedNotification && (
        <div className={styles.notificationToast}>
          <div className={styles.toastContent}>
            <span className={styles.toastSparkle}>✦</span>
            <div>
              <strong>Added to Shopping Bag:</strong> {quantity}x {product.name} ({selectedSize})
            </div>
          </div>
          <button
            className={styles.toastCloseBtn}
            onClick={() => setAddedNotification(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── 1. Breadcrumbs & Quick Back ── */}
      <section className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <div className={styles.breadcrumbRow}>
            <div className={styles.crumbs}>
              <span className={styles.crumbLink} onClick={() => navigate('/')}>Home</span>
              <span className={styles.crumbSep}>/</span>
              <span className={styles.crumbLink} onClick={() => navigate('/collections')}>Collections</span>
              <span className={styles.crumbSep}>/</span>
              <span className={styles.crumbLink} onClick={() => navigate(`/${product.categorySlug}`)}>
                {product.category}
              </span>
              <span className={styles.crumbSep}>/</span>
              <span className={styles.crumbCurrent}>{product.name}</span>
            </div>

            <button
              className={styles.backBtn}
              onClick={() => navigate('/collections')}
            >
              <span>← Back to Collections</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Main Product Showcase ── */}
      <section className={styles.showcaseSection}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>

            {/* Left Column: Gallery Media */}
            <div className={styles.galleryColumn}>
              <div className={styles.mainImageFrame}>
                <img
                  src={selectedImg}
                  alt={product.name}
                  className={styles.mainHeroImage}
                  onError={(e) => {
                    e.currentTarget.src = '/hero-dress.jpg';
                  }}
                />
                <div className={styles.imageOverlayVignette} />

                {/* Floating Badges */}
                <div className={styles.topBadgePill}>
                  <span className={styles.badgeSpark}>✦</span>
                  <span>{product.tag || 'Haute Edition 2026'}</span>
                </div>

                <div className={styles.craftBadgePill}>
                  <span>100% Authentic Natural Weave</span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              {product.gallery && product.gallery.length > 1 && (
                <div className={styles.thumbStrip}>
                  {product.gallery.map((thumbUrl, idx) => (
                    <button
                      key={idx}
                      className={`${styles.thumbBtn} ${selectedImg === thumbUrl ? styles.thumbActive : ''}`}
                      onClick={() => setSelectedImg(thumbUrl)}
                    >
                      <img
                        src={thumbUrl}
                        alt={`${product.name} angle ${idx + 1}`}
                        className={styles.thumbImg}
                        onError={(e) => {
                          e.currentTarget.src = '/hero-dress.jpg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Atelier Trust Guarantee Badges */}
              <div className={styles.atelierGuarantees}>
                <div className={styles.guaranteeBox}>
                  <span className={styles.guaranteeIcon}>🧵</span>
                  <div>
                    <h5>Master Artisan Handloom</h5>
                    <p>Individually tailored in our private maison atelier</p>
                  </div>
                </div>
                <div className={styles.guaranteeBox}>
                  <span className={styles.guaranteeIcon}>🛡️</span>
                  <div>
                    <h5>Lifetime Authenticity Guarantee</h5>
                    <p>Delivered with serial-numbered seal of provenance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Couture Studio Details */}
            <div className={styles.infoColumn}>
              <div className={styles.infoStickyInner}>
                {/* Collection Category & Rating */}
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{product.category}</span>
                  <div className={styles.ratingGroup}>
                    <span className={styles.starIcon}>★</span>
                    <span className={styles.ratingNumber}>{product.rating}</span>
                    <span className={styles.reviewCount}>({product.reviews} Couture Reviews)</span>
                  </div>
                </div>

                {/* Product Title */}
                <h1 className={styles.productTitle}>{product.name}</h1>

                {/* Price Display */}
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>${product.price}</span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className={styles.discountPill}>
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                  <span className={styles.taxNote}>Taxes & Global Duties Included</span>
                </div>

                {/* Promo Coupon Pill */}
                <div className={styles.promoCouponBar}>
                  <span className={styles.promoSpark}>✨</span>
                  <span>Use code <strong>AURA40</strong> for exclusive 40% privilege on archival pieces</span>
                </div>

                {/* Description */}
                <p className={styles.productDescription}>{product.description}</p>

                {/* Color Selector */}
                {product.colors && product.colors.length > 0 && (
                  <div className={styles.optionSection}>
                    <div className={styles.optionHeader}>
                      <span className={styles.optionTitle}>Atelier Silk Shade:</span>
                      <span className={styles.optionSelectedValue}>{selectedColor.name}</span>
                    </div>
                    <div className={styles.colorPillsRow}>
                      {product.colors.map((c, idx) => (
                        <button
                          key={idx}
                          className={`${styles.colorSwatchBtn} ${selectedColor.name === c.name ? styles.colorSwatchActive : ''}`}
                          onClick={() => setSelectedColor(c)}
                          title={c.name}
                        >
                          <span
                            className={styles.colorDot}
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className={styles.colorNameLabel}>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className={styles.optionSection}>
                    <div className={styles.optionHeader}>
                      <span className={styles.optionTitle}>Select Silhouette Size:</span>
                      <button
                        className={styles.sizeGuideBtn}
                        onClick={() => setShowSizeModal(true)}
                      >
                        📐 Size & Tailoring Guide
                      </button>
                    </div>

                    <div className={styles.sizeGrid}>
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          className={`${styles.sizePill} ${selectedSize === sz ? styles.sizePillActive : ''}`}
                          onClick={() => setSelectedSize(sz)}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & CTA Row */}
                <div className={styles.actionBlock}>
                  <div className={styles.quantityPicker}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className={styles.qtyValue}>{quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    className={styles.addToBagBtn}
                    onClick={handleAddToCart}
                  >
                    <span>Add to Shopping Bag</span>
                    <span>•</span>
                    <span>${product.price * quantity}</span>
                  </button>

                  <button
                    className={`${styles.wishlistIconBtn} ${isWishlisted ? styles.wishlistedActive : ''}`}
                    onClick={handleToggleWishlist}
                    aria-label="Save to Wishlist"
                    title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                  >
                    <span>{isWishlisted ? '♥' : '♡'}</span>
                  </button>
                </div>

                {/* Instant Atelier Consultation CTA */}
                <div className={styles.bespokeCallout}>
                  <div>
                    <h4 className={styles.bespokeTitle}>Desire Made-to-Measure Customization?</h4>
                    <p className={styles.bespokeSub}>
                      Our master stylists can customize neckline depth, sleeve length, or waist drape.
                    </p>
                  </div>
                  <button
                    className={styles.bespokeBtn}
                    onClick={() => navigate('/contact')}
                  >
                    Book Stylist
                  </button>
                </div>

                {/* Detailed Information Tabs */}
                <div className={styles.detailsTabsSection}>
                  <div className={styles.tabHeaders}>
                    <button
                      className={`${styles.tabHeaderBtn} ${activeTab === 'craft' ? styles.tabHeaderActive : ''}`}
                      onClick={() => setActiveTab('craft')}
                    >
                      ✦ Atelier & Fabric
                    </button>
                    <button
                      className={`${styles.tabHeaderBtn} ${activeTab === 'silhouette' ? styles.tabHeaderActive : ''}`}
                      onClick={() => setActiveTab('silhouette')}
                    >
                      📐 Fit & Cut
                    </button>
                    <button
                      className={`${styles.tabHeaderBtn} ${activeTab === 'shipping' ? styles.tabHeaderActive : ''}`}
                      onClick={() => setActiveTab('shipping')}
                    >
                      📦 White-Glove Delivery
                    </button>
                  </div>

                  <div className={styles.tabContentArea}>
                    {activeTab === 'craft' && (
                      <div className={styles.tabBody}>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Fabric Composition:</span>
                          <span className={styles.specValue}>{product.fabric || 'Pure Mulberry Silk (19 Momme)'}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Hand Embroidery:</span>
                          <span className={styles.specValue}>{product.embroidery || 'Hand-carved Micro-Zardozi & Casings'}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Garment Care:</span>
                          <span className={styles.specValue}>{product.care || 'Specialist Couture Dry Clean Only'}</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'silhouette' && (
                      <div className={styles.tabBody}>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Silhouette Structure:</span>
                          <span className={styles.specValue}>{product.silhouette || 'Sculpted Sweetheart Bodice with Flared Skirt'}</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Model Measurements:</span>
                          <span className={styles.specValue}>Model is 5'10" (178cm) wearing size S</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Closure:</span>
                          <span className={styles.specValue}>Concealed back invisible zipper with silk rouleau loops</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'shipping' && (
                      <div className={styles.tabBody}>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Dispatch Time:</span>
                          <span className={styles.specValue}>Express priority dispatched within 24-48 business hours</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Packaging:</span>
                          <span className={styles.specValue}>Signature Aura Couture keepsake gift box with garment dust bag</span>
                        </div>
                        <div className={styles.specRow}>
                          <span className={styles.specLabel}>Returns:</span>
                          <span className={styles.specValue}>Complimentary 14-day insured returns with prepaid courier pickup</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Complementary Silhouettes ("Complete The Look") ── */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedHeader}>
            <span className={styles.relatedSpark}>✦ MAISON CURATION ✦</span>
            <h2 className={styles.relatedTitle}>Complete The Look</h2>
            <p className={styles.relatedSub}>Complementary silhouettes handpicked by our creative directors</p>
          </div>

          <div className={styles.relatedGrid}>
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className={styles.relatedCard}
                onClick={() => navigate(`/product/${rel.id}`)}
              >
                <div className={styles.relatedImageFrame}>
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className={styles.relatedImg}
                    onError={(e) => {
                      e.currentTarget.src = '/hero-dress.jpg';
                    }}
                  />
                  <div className={styles.relatedOverlay} />
                  <span className={styles.relatedPriceTag}>${rel.price}</span>
                </div>
                <div className={styles.relatedBody}>
                  <span className={styles.relatedCat}>{rel.category}</span>
                  <h3 className={styles.relatedName}>{rel.name}</h3>
                  <button
                    className={styles.relatedViewBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${rel.id}`);
                    }}
                  >
                    <span>View Silhouette</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Size Guide Modal ── */}
      {showSizeModal && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setShowSizeModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseBtn}
              onClick={() => setShowSizeModal(false)}
            >
              ✕
            </button>
            <h3 className={styles.modalTitle}>Couture Size & Measurements Guide</h3>
            <p className={styles.modalSubtitle}>All dimensions are listed in inches and centimeters for precision tailoring.</p>

            <table className={styles.sizeTable}>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (in)</th>
                  <th>Waist (in)</th>
                  <th>Hips (in)</th>
                  <th>Length (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>XS</strong></td>
                  <td>32 - 33"</td>
                  <td>24 - 25"</td>
                  <td>34 - 35"</td>
                  <td>58"</td>
                </tr>
                <tr>
                  <td><strong>S</strong></td>
                  <td>34 - 35"</td>
                  <td>26 - 27"</td>
                  <td>36 - 37"</td>
                  <td>59"</td>
                </tr>
                <tr>
                  <td><strong>M</strong></td>
                  <td>36 - 37"</td>
                  <td>28 - 29"</td>
                  <td>38 - 39"</td>
                  <td>60"</td>
                </tr>
                <tr>
                  <td><strong>L</strong></td>
                  <td>38 - 40"</td>
                  <td>30 - 32"</td>
                  <td>40 - 42"</td>
                  <td>60.5"</td>
                </tr>
                <tr>
                  <td><strong>XL</strong></td>
                  <td>41 - 43"</td>
                  <td>33 - 35"</td>
                  <td>43 - 45"</td>
                  <td>61"</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.modalNote}>
              <span>✦</span>
              <p>Need custom made-to-measure sizing? Contact our atelier concierge for bespoke assistance at no additional cost.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
