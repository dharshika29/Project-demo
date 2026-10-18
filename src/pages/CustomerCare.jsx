import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import styles from './CustomerCare.module.css';

const TABS = [
  { id: 'size-guide', label: 'Size & Fit Guide', icon: '📐' },
  { id: 'shipping', label: 'Shipping & Delivery', icon: '✈️' },
  { id: 'returns', label: 'Returns & Exchanges', icon: '🔄' },
  { id: 'care-guide', label: 'Fabric Care Guide', icon: '✨' },
  { id: 'faq', label: 'Frequently Asked Questions', icon: '❓' },
  { id: 'track-order', label: 'Track My Order', icon: '📦' }
];

const SIZE_CHART_CM = [
  { size: 'XS (EU 34 / US 2)', bust: '81 - 84 cm', waist: '61 - 64 cm', hip: '86 - 89 cm', length: '148 cm' },
  { size: 'S (EU 36 / US 4)', bust: '85 - 88 cm', waist: '65 - 68 cm', hip: '90 - 93 cm', length: '150 cm' },
  { size: 'M (EU 38 / US 6)', bust: '89 - 92 cm', waist: '69 - 72 cm', hip: '94 - 97 cm', length: '152 cm' },
  { size: 'L (EU 40 / US 8)', bust: '93 - 97 cm', waist: '73 - 77 cm', hip: '98 - 102 cm', length: '153 cm' },
  { size: 'XL (EU 42 / US 10)', bust: '98 - 103 cm', waist: '78 - 83 cm', hip: '103 - 108 cm', length: '155 cm' },
  { size: 'Bespoke Couture', bust: 'Custom Made', waist: 'Custom Made', hip: 'Custom Made', length: 'To Specification' }
];

const SIZE_CHART_INCH = [
  { size: 'XS (EU 34 / US 2)', bust: '32 - 33 in', waist: '24 - 25 in', hip: '34 - 35 in', length: '58 in' },
  { size: 'S (EU 36 / US 4)', bust: '33.5 - 34.5 in', waist: '25.5 - 26.5 in', hip: '35.5 - 36.5 in', length: '59 in' },
  { size: 'M (EU 38 / US 6)', bust: '35 - 36 in', waist: '27 - 28.5 in', hip: '37 - 38 in', length: '60 in' },
  { size: 'L (EU 40 / US 8)', bust: '36.5 - 38 in', waist: '29 - 30.5 in', hip: '38.5 - 40 in', length: '60.5 in' },
  { size: 'XL (EU 42 / US 10)', bust: '38.5 - 40.5 in', waist: '31 - 32.5 in', hip: '40.5 - 42.5 in', length: '61 in' },
  { size: 'Bespoke Couture', bust: 'Custom Made', waist: 'Custom Made', hip: 'Custom Made', length: 'To Specification' }
];

const FAQ_ITEMS = [
  {
    category: 'Ordering & Payment',
    q: 'What payment methods does Aura Couture accept?',
    a: 'We accept all major international credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, PayPal, and wire transfers for bespoke commissions over $5,000. All transactions are protected by bank-grade 256-bit SSL encryption.'
  },
  {
    category: 'Ordering & Payment',
    q: 'Can I cancel or modify my couture order?',
    a: 'Because our gowns undergo immediate hand-cutting and bead preparation in our atelier, orders can be adjusted within 24 hours of placement. Contact our Private Concierge at hello@auracouture.com or call +39 02 1234 5678.'
  },
  {
    category: 'Sizing & Customizations',
    q: 'Do you offer custom alterations or custom sizing?',
    a: 'Yes! Every evening gown and silk ensemble can be customized to your exact body measurements. Simply select "Bespoke Fit" upon checkout or visit our Bespoke Orders page to schedule a virtual toile fitting with our Milan pattern masters.'
  },
  {
    category: 'Shipping & Delivery',
    q: 'How are the dresses packaged and shipped?',
    a: 'Every piece is packaged in our signature archival keepsake box lined with acid-free tissue paper, an engraved cedar wood hanger, and a breathable anti-tarnish muslin garment bag. Shipments travel via insured white-glove DHL Express with signature required upon delivery.'
  },
  {
    category: 'Shipping & Delivery',
    q: 'Are custom duties and import taxes included?',
    a: 'Yes. All prices displayed on Aura Couture include prepaid duties and local taxes (DDP - Delivered Duty Paid). You will never experience surprise fees or customs delays upon arrival.'
  },
  {
    category: 'Returns & Authenticity',
    q: 'What is your return policy?',
    a: 'We offer 14-day complimentary returns on standard-size collection pieces. Items must be unworn, unaltered, with all original security tags and garment bags intact. Customized and bespoke pieces are crafted exclusively for you and are eligible for complimentary alterations rather than direct returns.'
  },
  {
    category: 'Returns & Authenticity',
    q: 'How do I verify the authenticity of my garment?',
    a: 'Every Aura Couture creation features an individually numbered micro-woven silk heritage certificate sewn into the inner lining, accompanied by an embossed digital authenticity passport signed by our creative director.'
  }
];

export default function CustomerCare({ initialTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on route or prop
  const getTabFromPath = () => {
    if (initialTab) return initialTab;
    const path = location.pathname.replace('/', '');
    if (path === 'size-guide') return 'size-guide';
    if (path === 'shipping') return 'shipping';
    if (path === 'returns') return 'returns';
    if (path === 'care-guide') return 'care-guide';
    if (path === 'faq') return 'faq';
    if (path === 'track-order') return 'track-order';
    return 'faq';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath());
  const [unit, setUnit] = useState('cm'); // 'cm' or 'inch'

  // Size calculator state
  const [calcBust, setCalcBust] = useState('');
  const [calcWaist, setCalcWaist] = useState('');
  const [calcHips, setCalcHips] = useState('');
  const [recommendedSize, setRecommendedSize] = useState(null);

  // FAQ state
  const [faqCategory, setFaqCategory] = useState('All');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Track order state
  const [trackingId, setTrackingId] = useState('AUR-2026-9481');
  const [trackedOrder, setTrackedOrder] = useState({
    id: 'AUR-2026-9481',
    gown: 'Mauve Pink Sequins Embroidered Net Evening Gown',
    destination: 'London, United Kingdom',
    estimatedDate: 'October 21, 2026',
    status: 'In Transit — White-Glove Armored Courier',
    steps: [
      { name: 'Order Confirmed & Silk Reserved', time: 'Oct 15, 10:20 AM', done: true },
      { name: 'Hand-Cut by Milan Pattern Masters', time: 'Oct 16, 03:45 PM', done: true },
      { name: '180h Artisan Hand Embroidery Completed', time: 'Oct 17, 07:15 PM', done: true },
      { name: 'Dispatched via DHL Express Couture Freight', time: 'Oct 18, 09:30 AM', done: true, active: true },
      { name: 'Scheduled White-Glove Delivery (Signature Required)', time: 'Estimated Oct 21', done: false }
    ]
  });

  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname, initialTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/${tabId}`);
  };

  const calculateSize = (e) => {
    e.preventDefault();
    const bustNum = parseFloat(calcBust);
    const waistNum = parseFloat(calcWaist);
    if (!bustNum || !waistNum) return;

    // Approximate size calculation
    let size = 'M (EU 38 / US 6)';
    const b = unit === 'inch' ? bustNum * 2.54 : bustNum;
    const w = unit === 'inch' ? waistNum * 2.54 : waistNum;

    if (b <= 84 && w <= 64) size = 'XS (EU 34 / US 2)';
    else if (b <= 88 && w <= 68) size = 'S (EU 36 / US 4)';
    else if (b <= 93 && w <= 73) size = 'M (EU 38 / US 6)';
    else if (b <= 98 && w <= 78) size = 'L (EU 40 / US 8)';
    else if (b <= 104 && w <= 84) size = 'XL (EU 42 / US 10)';
    else size = 'Bespoke Custom Size Recommended';

    setRecommendedSize(size);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = faqCategory === 'All' || item.category === faqCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.a.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className={styles.headerInner}>
          <div className={styles.badge}>✦ Atelier Client Relations ✦</div>
          <h1 className={styles.title}>
            Maison Concierge &amp; <em>Customer Care</em>
          </h1>
          <p className={styles.subtitle}>
            Comprehensive guidance on sizing, white-glove international shipping,
            heirloom fabric preservation, order tracking, and bespoke support.
          </p>

          {/* Navigation Tabs */}
          <div className={styles.tabsNav}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className={styles.container}>
        <div className={styles.tabContentCard}>
          {/* ──────────────── 1. SIZE & FIT GUIDE ──────────────── */}
          {activeTab === 'size-guide' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>Atelier Sizing &amp; Measurement Guide</h2>
                  <p className={styles.tabDesc}>
                    Every Aura Couture garment is engineered to drape flawlessly across international standards.
                  </p>
                </div>
                <div className={styles.unitToggle}>
                  <button
                    className={`${styles.unitBtn} ${unit === 'cm' ? styles.unitBtnActive : ''}`}
                    onClick={() => setUnit('cm')}
                  >
                    Centimeters (CM)
                  </button>
                  <button
                    className={`${styles.unitBtn} ${unit === 'inch' ? styles.unitBtnActive : ''}`}
                    onClick={() => setUnit('inch')}
                  >
                    Inches (IN)
                  </button>
                </div>
              </div>

              <div className={styles.tableWrapper}>
                <table className={styles.luxuryTable}>
                  <thead>
                    <tr>
                      <th>Couture Size</th>
                      <th>Bust</th>
                      <th>Natural Waist</th>
                      <th>High Hip</th>
                      <th>Gown Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(unit === 'cm' ? SIZE_CHART_CM : SIZE_CHART_INCH).map((row, idx) => (
                      <tr key={idx}>
                        <td className={styles.highlightCell}>{row.size}</td>
                        <td>{row.bust}</td>
                        <td>{row.waist}</td>
                        <td>{row.hip}</td>
                        <td>{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Interactive Size Calculator */}
              <div className={styles.calculatorBox}>
                <h3 className={styles.calcTitle}>
                  <span>✨</span> Find Your Ideal Silhouette Fit
                </h3>
                <p className={styles.calcSubtitle}>
                  Enter your exact measurements to receive our atelier's bespoke size recommendation.
                </p>
                <form onSubmit={calculateSize}>
                  <div className={styles.calcGrid}>
                    <div className={styles.calcInputGroup}>
                      <label>Bust ({unit.toUpperCase()})</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder={unit === 'cm' ? 'e.g. 88' : 'e.g. 34.5'}
                        value={calcBust}
                        onChange={(e) => setCalcBust(e.target.value)}
                        className={styles.calcInput}
                        required
                      />
                    </div>
                    <div className={styles.calcInputGroup}>
                      <label>Waist ({unit.toUpperCase()})</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder={unit === 'cm' ? 'e.g. 68' : 'e.g. 26.5'}
                        value={calcWaist}
                        onChange={(e) => setCalcWaist(e.target.value)}
                        className={styles.calcInput}
                        required
                      />
                    </div>
                    <div className={styles.calcInputGroup}>
                      <label>Hips ({unit.toUpperCase()})</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder={unit === 'cm' ? 'e.g. 94' : 'e.g. 37'}
                        value={calcHips}
                        onChange={(e) => setCalcHips(e.target.value)}
                        className={styles.calcInput}
                      />
                    </div>
                  </div>
                  <button type="submit" className={styles.calcActionBtn}>
                    Calculate Recommended Size ✦
                  </button>
                </form>

                {recommendedSize && (
                  <div className={styles.calcResultBox}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Your Recommended Fit:
                      </span>
                      <div className={styles.calcResultBadge}>{recommendedSize}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ──────────────── 2. SHIPPING & DELIVERY ──────────────── */}
          {activeTab === 'shipping' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>White-Glove International Delivery</h2>
                  <p className={styles.tabDesc}>
                    Insured, temperature-monitored luxury courier logistics dispatched from our Milan salon.
                  </p>
                </div>
              </div>

              <div className={styles.shippingPillars}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>🕊️</div>
                  <h3 className={styles.pillarTitle}>Complimentary Global Courier</h3>
                  <p className={styles.pillarText}>
                    All orders over $500 enjoy complimentary express courier transit via DHL Express with full insurance coverage.
                  </p>
                </div>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>🏛️</div>
                  <h3 className={styles.pillarTitle}>All Taxes &amp; Duties Prepaid</h3>
                  <p className={styles.pillarText}>
                    Delivered Duty Paid (DDP). Customs clearance, VAT, and import tariffs are settled upfront by Aura Couture.
                  </p>
                </div>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>🎁</div>
                  <h3 className={styles.pillarTitle}>Signature Archival Packaging</h3>
                  <p className={styles.pillarText}>
                    Delivered in an embossed acid-free heirloom keepsake box with a cedar wood hanger and organic muslin garment dust bag.
                  </p>
                </div>
              </div>

              <div className={styles.deliveryTimelineBox}>
                <h3 className={styles.timelineHeading}>Estimated International Transit Times</h3>
                <div className={styles.countryGrid}>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🇮🇹</div>
                    <div className={styles.countryName}>Italy &amp; Switzerland</div>
                    <div className={styles.countryTime}>1 - 2 Business Days</div>
                    <div className={styles.countryCarrier}>Atelier Private Van / DHL Express</div>
                  </div>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🇪🇺</div>
                    <div className={styles.countryName}>European Union &amp; UK</div>
                    <div className={styles.countryTime}>2 - 3 Business Days</div>
                    <div className={styles.countryCarrier}>DHL Priority Air Express</div>
                  </div>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🇺🇸</div>
                    <div className={styles.countryName}>United States &amp; Canada</div>
                    <div className={styles.countryTime}>3 - 4 Business Days</div>
                    <div className={styles.countryCarrier}>FedEx International Priority</div>
                  </div>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🇦🇪</div>
                    <div className={styles.countryName}>UAE &amp; Middle East</div>
                    <div className={styles.countryTime}>2 - 4 Business Days</div>
                    <div className={styles.countryCarrier}>DHL Express Armored Courier</div>
                  </div>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🇮🇳</div>
                    <div className={styles.countryName}>India &amp; South Asia</div>
                    <div className={styles.countryTime}>3 - 5 Business Days</div>
                    <div className={styles.countryCarrier}>BlueDart DHL Premium Freight</div>
                  </div>
                  <div className={styles.countryCard}>
                    <div className={styles.countryFlag}>🌏</div>
                    <div className={styles.countryName}>Australia &amp; East Asia</div>
                    <div className={styles.countryTime}>4 - 5 Business Days</div>
                    <div className={styles.countryCarrier}>DHL Worldwide Express</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ──────────────── 3. RETURNS & EXCHANGES ──────────────── */}
          {activeTab === 'returns' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>14-Day Complimentary Couture Exchange</h2>
                  <p className={styles.tabDesc}>
                    If your chosen piece does not fit your vision with absolute perfection, we facilitate seamless exchanges.
                  </p>
                </div>
              </div>

              <div className={styles.returnStepsRow}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>01</span>
                  <h3 className={styles.stepTitle}>Initiate With Concierge</h3>
                  <p className={styles.stepText}>
                    Email concierge@auracouture.com with your Order Number within 14 days of delivery.
                  </p>
                </div>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>02</span>
                  <h3 className={styles.stepTitle}>Home Courier Pickup</h3>
                  <p className={styles.stepText}>
                    Our concierge books a complimentary DHL pickup directly from your residence or hotel.
                  </p>
                </div>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>03</span>
                  <h3 className={styles.stepTitle}>Atelier Inspection</h3>
                  <p className={styles.stepText}>
                    Our quality masters inspect the garment to verify tags and unworn condition within 24 hours.
                  </p>
                </div>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>04</span>
                  <h3 className={styles.stepTitle}>Immediate Reimbursement</h3>
                  <p className={styles.stepText}>
                    Refunds are processed to the original payment method or credited toward an alternate silhouette.
                  </p>
                </div>
              </div>

              <div className={styles.policyHighlights}>
                <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontFamily: 'var(--font-heading)' }}>
                  Couture Return Standards
                </h4>
                <ul className={styles.policyList}>
                  <li>
                    <span className={styles.checkMark}>✓</span> Gowns must be unworn, unperfumed, and unaltered.
                  </li>
                  <li>
                    <span className={styles.checkMark}>✓</span> Signature black silk safety seal must remain attached.
                  </li>
                  <li>
                    <span className={styles.checkMark}>✓</span> Accompanied by original archival packaging and cedar hanger.
                  </li>
                  <li>
                    <span className={styles.checkMark}>✓</span> Bespoke commissions include unlimited complimentary alterations instead of standard returns.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ──────────────── 4. FABRIC CARE GUIDE ──────────────── */}
          {activeTab === 'care-guide' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>Heirloom Fabric &amp; Embroidery Preservation</h2>
                  <p className={styles.tabDesc}>
                    Expert guidelines to maintain the brilliance of gold zari, organic mulberry silk, and hand-embroidered paillettes for generations.
                  </p>
                </div>
              </div>

              <div className={styles.fabricGrid}>
                <div className={styles.fabricCard}>
                  <span className={styles.fabricBadge}>Heritage Silk &amp; Brocade</span>
                  <h3 className={styles.fabricTitle}>Pure Kanjeevaram &amp; Banarasi</h3>
                  <ul className={styles.fabricInstructions}>
                    <li>Store wrapped in unbleached pure cotton or muslin fabric; never in plastic bags.</li>
                    <li>Refold along fresh fold lines every six months to prevent permanent creasing.</li>
                    <li>Exclusively professional specialist dry cleaning (hydrocarbon solvent only).</li>
                    <li>Never spray perfume directly on metallic zari threads to avoid oxidation.</li>
                  </ul>
                </div>

                <div className={styles.fabricCard}>
                  <span className={styles.fabricBadge}>Haute Embellishment</span>
                  <h3 className={styles.fabricTitle}>Sequin Mesh &amp; Hand-Zardozi</h3>
                  <ul className={styles.fabricInstructions}>
                    <li>Always hang on our provided contoured cedar wood hanger to protect shoulder seams.</li>
                    <li>Steam reverse-side only using a low-temperature vertical garment steamer.</li>
                    <li>Avoid direct iron contact with faceted glass crystal beads and metallic sequins.</li>
                    <li>Store with padded tissue around 3D floral corsages to preserve architectural shape.</li>
                  </ul>
                </div>

                <div className={styles.fabricCard}>
                  <span className={styles.fabricBadge}>Fluid Silhouettes</span>
                  <h3 className={styles.fabricTitle}>Chiffon, Georgette &amp; French Tulle</h3>
                  <ul className={styles.fabricInstructions}>
                    <li>Keep away from sharp jewelry clasps to prevent delicate thread pulls.</li>
                    <li>Air dry horizontally in natural shaded breezes if exposed to ambient humidity.</li>
                    <li>Store in a climate-controlled room (45-55% relative humidity).</li>
                    <li>Complimentary lifetime loose thread restoration service available at all boutiques.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ──────────────── 5. FAQS ACCORDION ──────────────── */}
          {activeTab === 'faq' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>Frequently Asked Questions</h2>
                  <p className={styles.tabDesc}>
                    Instant answers regarding ordering, atelier customizations, delivery, and authenticity.
                  </p>
                </div>
              </div>

              <div className={styles.faqSearchBox}>
                <span>🔍</span>
                <input
                  type="text"
                  placeholder="Search questions about sizing, delivery, alterations..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className={styles.faqSearchInput}
                />
              </div>

              <div className={styles.faqCategoryPills}>
                {['All', 'Ordering & Payment', 'Sizing & Customizations', 'Shipping & Delivery', 'Returns & Authenticity'].map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.faqPill} ${faqCategory === cat ? styles.faqPillActive : ''}`}
                    onClick={() => setFaqCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className={styles.accordionList}>
                {filteredFaqs.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${styles.accordionItem} ${openFaqIndex === idx ? styles.accordionItemActive : ''}`}
                  >
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.accordionIcon}>{openFaqIndex === idx ? '✕' : '+'}</span>
                    </button>
                    {openFaqIndex === idx && (
                      <div className={styles.accordionBody}>
                        <p style={{ margin: 0 }}>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ──────────────── 6. TRACK MY ORDER ──────────────── */}
          {activeTab === 'track-order' && (
            <div>
              <div className={styles.tabHeader}>
                <div>
                  <h2 className={styles.tabTitle}>Live Couture Order Tracking</h2>
                  <p className={styles.tabDesc}>
                    Follow the journey of your gown from pattern drafting in Milan to your doorstep.
                  </p>
                </div>
              </div>

              <form
                className={styles.trackForm}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  className={styles.trackInput}
                  placeholder="Enter Order ID (e.g. AUR-2026-9481)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
                <button type="submit" className={styles.trackBtn}>
                  Query Order Status ✦
                </button>
              </form>

              {trackedOrder && (
                <div className={styles.trackOrderCard}>
                  <div className={styles.trackOrderHeader}>
                    <div>
                      <h3 className={styles.trackOrderId}>Order #{trackedOrder.id}</h3>
                      <p style={{ margin: 0, color: '#a8a29e', fontSize: '0.9rem' }}>
                        {trackedOrder.gown} • Bound for {trackedOrder.destination}
                      </p>
                    </div>
                    <span className={styles.trackStatusBadge}>{trackedOrder.status}</span>
                  </div>

                  <div className={styles.timelineProgress}>
                    {trackedOrder.steps.map((st, i) => (
                      <div key={i} className={styles.timelineStep}>
                        <div
                          className={`${styles.stepIndicator} ${st.active ? styles.stepIndicatorActive : ''}`}
                        >
                          {st.done ? '✓' : i + 1}
                        </div>
                        <div className={styles.stepDetail}>
                          <div className={styles.stepName}>{st.name}</div>
                          <div className={styles.stepTime}>{st.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Concierge Strip */}
          <div className={styles.conciergeStrip}>
            <div className={styles.conciergeText}>
              <h4>Require Personal Styling Advice?</h4>
              <p>Our senior atelier stylists are on standby 24/7 via WhatsApp or private phone consult.</p>
            </div>
            <Link to="/contact" className={styles.conciergeBtn}>
              Contact Atelier Concierge →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
