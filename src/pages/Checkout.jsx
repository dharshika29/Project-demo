import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Checkout.module.css';

export default function Checkout() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartSubtotal,
    discountAmount,
    discountCode,
    clearCart,
    setLastOrder
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: 'Lady Genevieve Sterling',
    email: 'client@prestige.com',
    phone: '+44 7911 123456',
    address: '14 Via Monte Napoleone, Suite 4B',
    city: 'Milan',
    postalCode: '20121',
    country: 'Italy',
    courierOption: 'dhl_express',
    paymentMethod: 'card',
    cardNumber: '4532 •••• •••• 8924',
    cardExpiry: '11/28',
    cardCvv: '•••',
    specialNotes: 'Complimentary archival box with scented lavender pouch please.'
  });

  const [courierFee, setCourierFee] = useState(0);

  const grandTotal = Math.max(0, cartSubtotal - discountAmount + courierFee);

  const handleCourierChange = (type, fee) => {
    setFormData({ ...formData, courierOption: type });
    setCourierFee(fee);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Generate luxurious Order ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `AUR-2026-${randomNum}`;

    const orderObj = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      customer: {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city} ${formData.postalCode}, ${formData.country}`
      },
      items: [...cartItems],
      subtotal: cartSubtotal,
      discount: discountAmount,
      discountCode: discountCode,
      shipping: courierFee === 0 ? 'Complimentary DHL Express' : 'Armored Saturday Priority',
      total: grandTotal,
      estimatedDelivery: 'October 23, 2026'
    };

    setLastOrder(orderObj);
    clearCart();
    navigate('/order-success');
  };

  // If cart is empty and no items, guide back to cart
  if (cartItems.length === 0) {
    return (
      <div className={styles.checkoutPage}>
        <div style={{ textAlign: 'center', padding: '7rem 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
            Your Shopping Bag is Currently Empty
          </h2>
          <p style={{ color: '#a8a29e', marginBottom: '2rem' }}>
            Please select an haute couture piece before proceeding to checkout.
          </p>
          <button
            onClick={() => navigate('/collections')}
            style={{
              background: 'linear-gradient(135deg, #e8d19a 0%, #c9a84c 100%)',
              color: '#080a10',
              fontWeight: 700,
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Explore Runway Collections ➔
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutPage}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.badge}>✦ Encrypted White-Glove Checkout ✦</div>
        <h1 className={styles.pageTitle}>
          Maison <em>Checkout &amp; Delivery</em>
        </h1>

        {/* Stepper */}
        <div className={styles.stepperRow}>
          <span className={styles.stepNode} onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
            <span className={styles.stepCircle}>✓</span> 1. Shopping Bag
          </span>
          <span className={styles.stepArrow}>➔</span>
          <span className={`${styles.stepNode} ${styles.stepNodeActive}`}>
            <span className={styles.stepCircle}>2</span> 2. Delivery &amp; Payment
          </span>
          <span className={styles.stepArrow}>➔</span>
          <span className={styles.stepNode}>
            <span className={styles.stepCircle}>3</span> 3. Order Confirmation
          </span>
        </div>
      </section>

      <div className={styles.container}>
        <form onSubmit={handlePlaceOrder} className={styles.checkoutGrid}>
          {/* Left: Input Sections */}
          <div className={styles.formColumn}>
            {/* Step 1: Client Information */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>👤</span>
                <h2 className={styles.sectionTitle}>1. Client &amp; Contact Credentials</h2>
              </div>

              <div className={styles.fieldsGrid}>
                <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                  <label>Full Name / Title</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email Address (For Order Tracking)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Telephone (SMS Delivery Updates)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.inputField}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Delivery Destination */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🏛️</span>
                <h2 className={styles.sectionTitle}>2. White-Glove Delivery Address</h2>
              </div>

              <div className={styles.fieldsGrid}>
                <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                  <label>Street Address &amp; Suite</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Postal Code / ZIP</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                  <label>Country / Territory</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={styles.selectField}
                  >
                    <option value="Italy">Italy (Milan / Rome)</option>
                    <option value="France">France (Paris)</option>
                    <option value="United Kingdom">United Kingdom (London)</option>
                    <option value="United States">United States (New York / LA)</option>
                    <option value="United Arab Emirates">United Arab Emirates (Dubai / Abu Dhabi)</option>
                    <option value="India">India (Mumbai / Delhi)</option>
                    <option value="Switzerland">Switzerland (Geneva / Zurich)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Courier Selection */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>✈️</span>
                <h2 className={styles.sectionTitle}>3. Courier Shipping Method</h2>
              </div>

              <div className={styles.courierOptions}>
                <div
                  className={`${styles.courierOption} ${formData.courierOption === 'dhl_express' ? styles.courierOptionActive : ''}`}
                  onClick={() => handleCourierChange('dhl_express', 0)}
                >
                  <div className={styles.courierLeft}>
                    <span>🕊️</span>
                    <div>
                      <p className={styles.courierTitle}>DHL Express White-Glove Courier</p>
                      <p className={styles.courierSub}>2 - 3 Business Days • Temperature &amp; Archival Protected</p>
                    </div>
                  </div>
                  <span className={styles.courierPrice}>FREE ✓</span>
                </div>

                <div
                  className={`${styles.courierOption} ${formData.courierOption === 'armored_priority' ? styles.courierOptionActive : ''}`}
                  onClick={() => handleCourierChange('armored_priority', 25)}
                >
                  <div className={styles.courierLeft}>
                    <span>🛡️</span>
                    <div>
                      <p className={styles.courierTitle}>Armored Priority Saturday Hand-Delivery</p>
                      <p className={styles.courierSub}>Direct-to-Suite by Dedicated Concierge Agent</p>
                    </div>
                  </div>
                  <span className={styles.courierPrice} style={{ color: 'var(--gold, #c9a84c)' }}>+$25</span>
                </div>
              </div>
            </div>

            {/* Step 4: Payment Method */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>💳</span>
                <h2 className={styles.sectionTitle}>4. Payment &amp; Security Protocol</h2>
              </div>

              <div className={styles.paymentTabs}>
                <button
                  type="button"
                  className={`${styles.paymentTab} ${formData.paymentMethod === 'card' ? styles.paymentTabActive : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                >
                  💳 Credit Card
                </button>
                <button
                  type="button"
                  className={`${styles.paymentTab} ${formData.paymentMethod === 'applepay' ? styles.paymentTabActive : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'applepay' })}
                >
                  🍏 Apple Pay
                </button>
                <button
                  type="button"
                  className={`${styles.paymentTab} ${formData.paymentMethod === 'wire' ? styles.paymentTabActive : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'wire' })}
                >
                  🏛️ Salon Wire
                </button>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className={styles.fieldsGrid}>
                  <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                    <label>Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className={styles.inputField}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={formData.cardExpiry}
                      onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                      className={styles.inputField}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>CVV / CVC</label>
                    <input
                      type="text"
                      required
                      value={formData.cardCvv}
                      onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                      className={styles.inputField}
                    />
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'applepay' && (
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px' }}>
                  <p style={{ margin: '0 0 0.5rem', color: '#fff', fontWeight: 600 }}>Apple Pay Biometric Express Active</p>
                  <p style={{ margin: 0, color: '#a8a29e', fontSize: '0.85rem' }}>Double-click power button on confirmation step to authenticate.</p>
                </div>
              )}

              {formData.paymentMethod === 'wire' && (
                <div style={{ padding: '1.25rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px' }}>
                  <p style={{ margin: '0 0 0.5rem', color: '#fff', fontWeight: 600 }}>Private Salon Wire Transfer</p>
                  <p style={{ margin: 0, color: '#e5e0d8', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    An invoice with IBAN details for Banca d'Italia will be dispatched to your email. Garment tailoring begins upon wire clearance.
                  </p>
                </div>
              )}

              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--gold, #c9a84c)', marginBottom: '0.45rem' }}>
                  Atelier Notes &amp; Gift Wrapping Instructions
                </label>
                <textarea
                  rows="2"
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className={styles.textareaField}
                  placeholder="Special tailoring notes, gift card messages..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right: Order Review Column */}
          <div className={styles.orderReviewCard}>
            <h3 className={styles.reviewHeading}>Review Atelier Bag</h3>

            <div className={styles.orderItemsList}>
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className={styles.orderItemRow}>
                  <img src={item.image} alt={item.name} className={styles.orderItemThumb} />
                  <div className={styles.orderItemDetails}>
                    <div className={styles.orderItemName}>{item.name}</div>
                    <div className={styles.orderItemMeta}>
                      Size: {item.selectedSize} • Qty: {item.qty}
                    </div>
                  </div>
                  <div className={styles.orderItemPrice}>${item.price * item.qty}</div>
                </div>
              ))}
            </div>

            <div className={styles.summaryRow}>
              <span>Items Subtotal</span>
              <span style={{ color: '#fff' }}>${cartSubtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div className={styles.summaryRow} style={{ color: '#34d399' }}>
                <span>Salon Privilege ({discountCode})</span>
                <span>-${discountAmount}</span>
              </div>
            )}

            <div className={styles.summaryRow}>
              <span>Courier Delivery</span>
              <span style={{ color: courierFee === 0 ? '#34d399' : 'var(--gold, #c9a84c)' }}>
                {courierFee === 0 ? 'COMPLIMENTARY ✓' : `+$${courierFee}`}
              </span>
            </div>

            <div className={styles.summaryRow}>
              <span>All Taxes &amp; Duties (DDP)</span>
              <span style={{ color: '#a8a29e' }}>Prepaid ✓</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.grandTotalRow}>
              <span className={styles.grandTotalLabel}>Total Payable</span>
              <span className={styles.grandTotalVal}>${grandTotal}</span>
            </div>

            <button type="submit" className={styles.placeOrderBtn}>
              Place Couture Order (${grandTotal}) ✦
            </button>

            <div className={styles.securityGuarantee}>
              <span>🔒 256-Bit SSL Encrypted Protocol | 🕊️ 14-Day Returns</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
