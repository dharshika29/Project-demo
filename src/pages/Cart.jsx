import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartCount,
    cartSubtotal,
    discountCode,
    discountAmount,
    discountSuccess,
    discountError,
    cartTotal,
    shippingFee,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyDiscount,
    removeDiscount
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon.trim()) {
      applyDiscount(inputCoupon);
      setInputCoupon('');
    }
  };

  return (
    <div className={styles.cartPage}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.badge}>✦ Haute Couture Atelier Bag ✦</div>
        <h1 className={styles.pageTitle}>
          Your Curated <em>Shopping Bag</em>
        </h1>
        <p className={styles.subTitle}>
          Review your chosen heirlooms, select custom tailoring options, and proceed to white-glove checkout.
        </p>
      </section>

      <div className={styles.container}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛍️</div>
            <h2 className={styles.emptyTitle}>Your Shopping Bag is Empty</h2>
            <p className={styles.emptyDesc}>
              Discover our latest Grand Palais runway silhouettes, heritage Banarasi silks, and sparkling evening gowns.
            </p>
            <button
              className={styles.checkoutBtn}
              onClick={() => navigate('/collections')}
              style={{ width: 'auto', padding: '1rem 2.5rem' }}
            >
              Explore Runway Collections ➔
            </button>
          </div>
        ) : (
          <div className={styles.cartLayout}>
            {/* Left: Cart Items List */}
            <div className={styles.itemsCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardHeading}>
                  Selected Silhouettes ({cartCount} {cartCount === 1 ? 'Piece' : 'Pieces'})
                </h2>
                <button className={styles.clearAllBtn} onClick={clearCart}>
                  Clear All
                </button>
              </div>

              <div className={styles.itemList}>
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className={styles.itemRow}>
                    <div
                      className={styles.itemThumbnailWrapper}
                      onClick={() => navigate(`/product/${item.id}`)}
                      title={`View ${item.name}`}
                    >
                      <img src={item.image} alt={item.name} className={styles.itemThumbnail} />
                    </div>

                    <div className={styles.itemDetails}>
                      <span className={styles.itemCategory}>{item.category}</span>
                      <h3
                        className={styles.itemName}
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.name}
                      </h3>

                      <div className={styles.itemSpecs}>
                        <span className={styles.specBadge}>Size: {item.selectedSize}</span>
                        {item.selectedColor && (
                          <span className={styles.specBadge}>Color: {item.selectedColor}</span>
                        )}
                      </div>

                      <div className={styles.qtyControl}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          title="Decrease quantity"
                        >
                          −
                        </button>
                        <span className={styles.qtyVal}>{item.qty}</span>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          title="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className={styles.itemPriceCol}>
                      <span className={styles.itemTotal}>${item.price * item.qty}</span>
                      {item.originalPrice && (
                        <span className={styles.itemOriginalPrice}>
                          ${item.originalPrice * item.qty}
                        </span>
                      )}
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Summary Card */}
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryHeading}>Order Summary</h3>

              <div className={styles.summaryRow}>
                <span>Bag Subtotal</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>${cartSubtotal}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>White-Glove Insured Courier</span>
                <span className={styles.freeBadge}>COMPLIMENTARY ✓</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Customs Duties &amp; VAT (DDP)</span>
                <span style={{ color: '#a8a29e' }}>Prepaid by Maison ✓</span>
              </div>

              {discountAmount > 0 && (
                <div className={styles.summaryRow} style={{ color: '#34d399' }}>
                  <span>Salon Privilege ({discountCode})</span>
                  <span>-${discountAmount}</span>
                </div>
              )}

              {/* Coupon Form */}
              <div className={styles.couponBox}>
                <form onSubmit={handleApplyCoupon} className={styles.couponForm}>
                  <input
                    type="text"
                    placeholder="Coupon (e.g. AURA40)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className={styles.couponInput}
                  />
                  <button type="submit" className={styles.couponBtn}>
                    Apply
                  </button>
                </form>

                {discountSuccess && (
                  <div className={`${styles.couponMsg} ${styles.couponSuccess}`}>
                    {discountSuccess}{' '}
                    <button
                      onClick={removeDiscount}
                      style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline' }}
                    >
                      Remove
                    </button>
                  </div>
                )}
                {discountError && (
                  <div className={`${styles.couponMsg} ${styles.couponError}`}>
                    {discountError}
                  </div>
                )}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Grand Total</span>
                <span className={styles.totalAmount}>${cartTotal}</span>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={() => navigate('/checkout')}
              >
                Proceed to Haute Checkout ➔
              </button>

              <button
                className={styles.continueBtn}
                onClick={() => navigate('/collections')}
              >
                Continue Exploring Collections
              </button>

              <div className={styles.trustPerks}>
                <div className={styles.perkItem}>
                  <span>🕊️</span>
                  <span>14-Day Complimentary Couture Returns</span>
                </div>
                <div className={styles.perkItem}>
                  <span>🎁</span>
                  <span>Signature Archival Keepsake Box Included</span>
                </div>
                <div className={styles.perkItem}>
                  <span>🔒</span>
                  <span>Bank-Grade 256-Bit SSL Encrypted Protocol</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
