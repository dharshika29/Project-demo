import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './OrderSuccess.module.css';

export default function OrderSuccess() {
  const navigate = useNavigate();
  const { lastOrder } = useCart();

  // Fallback sample order if navigated directly
  const order = lastOrder || {
    id: 'AUR-2026-8942',
    date: 'October 18, 2026',
    customer: {
      name: 'Lady Genevieve Sterling',
      email: 'client@prestige.com',
      address: '14 Via Monte Napoleone, Suite 4B, Milan 20121, Italy'
    },
    items: [
      {
        id: 1,
        name: 'Mauve Pink Sequins Net Evening Gown',
        image: 'https://media.samyakk.in/pub/media/catalog/product/cache/d47d9b4b8c33f09ac326aed90267cb26/m/a/mauve-pink-sequins-embroidered-net-evening-gown-with-pentagon-neck-ab1604.jpg',
        price: 490,
        qty: 1,
        selectedSize: 'M',
        selectedColor: 'Mauve Pink'
      }
    ],
    total: 490,
    shipping: 'Complimentary DHL Express',
    estimatedDelivery: 'October 23, 2026'
  };

  return (
    <div className={styles.successPage}>
      <div className={styles.container}>
        <div className={styles.successCard}>
          {/* Header */}
          <div className={styles.celebrationHeader}>
            <span className={styles.sparkleIcon}>✨</span>
            <div className={styles.badge}>✓ Couture Commission Confirmed</div>
            <h1 className={styles.successTitle}>
              Thank You, <em>{order.customer.name}</em>
            </h1>
            <p className={styles.successSub}>
              Your bespoke atelier order has been received by our Milan salon.
              A confirmation dossier and tracking credentials have been dispatched to{' '}
              <strong style={{ color: '#fff' }}>{order.customer.email}</strong>.
            </p>
          </div>

          {/* Meta Box */}
          <div className={styles.orderMetaBox}>
            <div>
              <div className={styles.orderIdLabel}>Order Reference ID</div>
              <div className={styles.orderIdVal}>#{order.id}</div>
            </div>
            <div className={styles.deliveryEstimate}>
              <div className={styles.deliveryLabel}>Estimated White-Glove Delivery</div>
              <div className={styles.deliveryVal}>{order.estimatedDelivery}</div>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className={styles.timelineSection}>
            <h3 className={styles.timelineHeading}>Atelier Production &amp; Courier Timeline</h3>
            <div className={styles.timelineSteps}>
              <div className={styles.timelineNode}>
                <div className={`${styles.nodeIcon} ${styles.nodeDone}`}>✓</div>
                <div className={styles.nodeTitle}>Order Placed</div>
                <div className={styles.nodeTime}>Today, Handled</div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeIcon}>🪡</div>
                <div className={styles.nodeTitle}>Pattern Inspection</div>
                <div className={styles.nodeTime}>Milan Atelier</div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeIcon}>✈️</div>
                <div className={styles.nodeTitle}>Armored Dispatch</div>
                <div className={styles.nodeTime}>DHL Express Freight</div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeIcon}>🎁</div>
                <div className={styles.nodeTitle}>White-Glove Delivery</div>
                <div className={styles.nodeTime}>Signature Required</div>
              </div>
            </div>
          </div>

          {/* Items Summary */}
          <div className={styles.itemsSection}>
            <h3 className={styles.sectionHeading}>Ordered Creations</h3>
            <div className={styles.itemsList}>
              {order.items.map((item, idx) => (
                <div key={idx} className={styles.itemRow}>
                  <div className={styles.itemLeft}>
                    <img src={item.image} alt={item.name} className={styles.itemThumb} />
                    <div>
                      <div className={styles.itemName}>{item.name}</div>
                      <div className={styles.itemMeta}>
                        Size: {item.selectedSize || 'M'} • Qty: {item.qty} {item.selectedColor ? `• ${item.selectedColor}` : ''}
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>${item.price * item.qty}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right', color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
              Total Paid: <span style={{ color: 'var(--gold, #c9a84c)', fontWeight: 700 }}>${order.total}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <button
              className={styles.trackBtn}
              onClick={() => navigate('/track-order')}
            >
              Track Order Status ➔
            </button>
            <button
              className={styles.continueBtn}
              onClick={() => navigate('/collections')}
            >
              Continue Exploring Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
