import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const PRODUCTS = [
  // --- Evening Gowns ---
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
    description: 'Cut from heavy mulberry silk with hand-woven gold zari borders and cascading split sleeves. Featured in the 2026 Spring Couture collection.'
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
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    colors: ['#fbcfe8', '#f472b6', '#cbd5e1'],
    sizes: ['S', 'M', 'L'],
    description: 'Pastel romantic tulle overlaid with French botanical threadwork and subtly shimmering seed pearls.'
  },
  {
    id: 9,
    name: 'Amethyst Satin Corset Gown',
    category: 'Evening Gowns',
    price: 410,
    originalPrice: 510,
    rating: 4.7,
    reviews: 48,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=800&q=80',
    colors: ['#8b5cf6', '#4c1d95', '#000000'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A structural masterpiece featuring a boned corset bodice and a liquid satin draping skirt.'
  },
  {
    id: 10,
    name: 'Midnight Blue Tulle Ballgown',
    category: 'Evening Gowns',
    price: 520,
    originalPrice: 650,
    rating: 5.0,
    reviews: 29,
    tag: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    colors: ['#1e1b4b', '#172554', '#cbd5e1'],
    sizes: ['S', 'M', 'L'],
    description: 'Voluminous layers of midnight blue tulle over a shimmering celestial organza lining.'
  },
  {
    id: 11,
    name: 'Scarlet Chiffon Goddess Gown',
    category: 'Evening Gowns',
    price: 350,
    originalPrice: 420,
    rating: 4.8,
    reviews: 88,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8cf4c8cae?w=800&q=80',
    colors: ['#dc2626', '#991b1b', '#fca5a5'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A Grecian-inspired chiffon gown with a dramatic plunging neckline and sweeping floor-length train.'
  },
  {
    id: 12,
    name: 'Obsidian Velvet Mermaid Gown',
    category: 'Evening Gowns',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviews: 112,
    tag: 'Classic',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    colors: ['#000000', '#333333', '#ffffff'],
    sizes: ['S', 'M', 'L'],
    description: 'Sleek, form-fitting black velvet tailored to accentuate the silhouette, finished with a subtle flare.'
  },

  // --- Silk & Festive ---
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
    description: 'A harmonious blend of royal silk velvet and micro-zardozi embroidery with an architectural detachable cape drape.'
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
    image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80',
    colors: ['#0284c7', '#0369a1', '#14b8a6'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Authentic Katan silk crafted in Varanasi with a modern structured corseted bodice and sweeping floor-length flair.'
  },
  {
    id: 13,
    name: 'Golden Zari Kanjeevaram Lehenga',
    category: 'Silk & Festive',
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviews: 154,
    tag: 'Bridal Edit',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?w=800&q=80',
    colors: ['#d97706', '#b45309', '#fef3c7'],
    sizes: ['S', 'M', 'L'],
    description: 'A breathtaking three-piece ensemble made from pure Kanjeevaram silk with heavy temple borders.'
  },
  {
    id: 14,
    name: 'Rani Pink Chanderi Silk Suit',
    category: 'Silk & Festive',
    price: 290,
    originalPrice: 380,
    rating: 4.8,
    reviews: 73,
    tag: 'Festive Ready',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&q=80',
    colors: ['#db2777', '#9d174d', '#fbcfe8'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Lightweight and elegant Chanderi silk with delicate silver gota patti work. Perfect for day festivities.'
  },
  {
    id: 15,
    name: 'Ivory Handloom Tissue Silk Saree',
    category: 'Silk & Festive',
    price: 340,
    originalPrice: 420,
    rating: 4.7,
    reviews: 41,
    tag: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?w=800&q=80',
    colors: ['#fdfbf7', '#e5e5e5', '#d4d4d4'],
    sizes: ['Free Size'],
    description: 'Translucent and luxurious handloom tissue silk that shimmers elegantly, paired with a matching blouse piece.'
  },
  {
    id: 16,
    name: 'Mustard Mysore Silk Kurta Set',
    category: 'Silk & Festive',
    price: 220,
    originalPrice: 290,
    rating: 4.6,
    reviews: 55,
    tag: 'Everyday Luxury',
    image: 'https://images.unsplash.com/photo-1622396090074-abdc59d57a53?w=800&q=80',
    colors: ['#eab308', '#a16207', '#fef08a'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Rich Mysore silk in vibrant mustard, accompanied by matching straight pants and an organza dupatta.'
  },

  // --- Summer Maxi ---
  {
    id: 3,
    name: 'Champagne Silk Halter Maxi',
    category: 'Summer Maxi',
    price: 260,
    originalPrice: 320,
    rating: 4.8,
    reviews: 76,
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    colors: ['#fef3c7', '#fed7aa', '#f43f5e'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Liquid silk-satin slip dress featuring a sculpted cowl neckline, cross-back ties, and a fluid bias-cut hem.'
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
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80',
    colors: ['#fde047', '#fed7aa', '#ffffff'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: '100% certified organic Italian flax linen with delicate sun-ray knife pleating and mother-of-pearl buttons.'
  },
  {
    id: 17,
    name: 'Ocean Breeze Crepe Tiered Maxi',
    category: 'Summer Maxi',
    price: 180,
    originalPrice: 240,
    rating: 4.9,
    reviews: 132,
    tag: 'Vacation Edit',
    image: 'https://images.unsplash.com/photo-1523359232262-132d93e13d10?w=800&q=80',
    colors: ['#0ea5e9', '#0284c7', '#e0f2fe'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A breezy tiered crepe maxi in vibrant cerulean, perfect for seaside strolls and resort lounging.'
  },
  {
    id: 18,
    name: 'Lavender Field Cotton Smocked Dress',
    category: 'Summer Maxi',
    price: 150,
    originalPrice: 190,
    rating: 4.6,
    reviews: 47,
    tag: 'Casual Chic',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=800&q=80',
    colors: ['#d8b4fe', '#9333ea', '#ffffff'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Soft brushed cotton with a flattering smocked bodice and puff sleeves. Effortless and wildly comfortable.'
  },
  {
    id: 19,
    name: 'Coral Reef Georgette Flowy Maxi',
    category: 'Summer Maxi',
    price: 195,
    originalPrice: 250,
    rating: 4.8,
    reviews: 89,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe8b?w=800&q=80',
    colors: ['#fb7185', '#be123c', '#ffe4e6'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A vibrant coral georgette gown with a high-low hemline that dances in the summer wind.'
  },
  {
    id: 20,
    name: 'White Pearl Eyelet Cotton Maxi',
    category: 'Summer Maxi',
    price: 230,
    originalPrice: 290,
    rating: 4.9,
    reviews: 65,
    tag: 'Timeless',
    image: 'https://images.unsplash.com/photo-1512413914486-1eb86bc3c0a5?w=800&q=80',
    colors: ['#ffffff', '#f8fafc', '#e2e8f0'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Classic white eyelet cotton maxi dress featuring scalloped edges and a beautifully tailored A-line skirt.'
  },

  // --- Cocktail Sparkle ---
  {
    id: 4,
    name: 'Midnight Celestial Sequin Dress',
    category: 'Cocktail Sparkle',
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviews: 115,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    colors: ['#0f172a', '#1e1b4b', '#312e81'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Hand-applied micro sequins over midnight stretch mesh. Catches ambient light gracefully from every dimension.'
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
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    colors: ['#09090b', '#27272a', '#71717a'],
    sizes: ['XS', 'S', 'M'],
    description: 'Architectural crepe silhouette adorned with cruelty-free ostrich feather accents and Swarovski crystal piping.'
  },
  {
    id: 21,
    name: 'Platinum Crystal Embellished Mini',
    category: 'Cocktail Sparkle',
    price: 290,
    originalPrice: 380,
    rating: 4.7,
    reviews: 93,
    tag: 'Party Ready',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80',
    colors: ['#d4d4d8', '#71717a', '#3f3f46'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A dazzling platinum mini dress completely hand-beaded with reflective glass crystals.'
  },
  {
    id: 22,
    name: 'Ruby Red Beaded Fringe Dress',
    category: 'Cocktail Sparkle',
    price: 360,
    originalPrice: 450,
    rating: 4.8,
    reviews: 62,
    tag: 'Vintage Glam',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80',
    colors: ['#991b1b', '#7f1d1d', '#fca5a5'],
    sizes: ['S', 'M', 'L'],
    description: 'Inspired by the 1920s, this ruby red flapper-style dress features kinetic beaded fringe that moves beautifully.'
  },
  {
    id: 23,
    name: 'Emerald Green Sequin Slip Dress',
    category: 'Cocktail Sparkle',
    price: 240,
    originalPrice: 310,
    rating: 4.6,
    reviews: 44,
    tag: 'Modern Classic',
    image: 'https://images.unsplash.com/photo-1596783049182-e3a1f49635ec?w=800&q=80',
    colors: ['#065f46', '#064e3b', '#6ee7b7'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A minimalist 90s slip dress silhouette completely drenched in deep emerald sequins.'
  },
  {
    id: 24,
    name: 'Diamond Dust Holographic Bodycon',
    category: 'Cocktail Sparkle',
    price: 310,
    originalPrice: 390,
    rating: 4.9,
    reviews: 108,
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1617260835359-5367b7e28dfc?w=800&q=80',
    colors: ['#f8fafc', '#94a3b8', '#e2e8f0'],
    sizes: ['XS', 'S', 'M'],
    description: 'A futuristic bodycon dress made from innovative holographic fabric that changes color under light.'
  }
];

const CATEGORIES = [
  'All Dresses',
  'Evening Gowns',
  'Silk & Festive',
  'Summer Maxi',
  'Cocktail Sparkle'
];

const BLOG_POSTS = [
  {
    id: 1,
    tag: 'Style Guide',
    title: 'How to Style a Silk Gown for a Black-Tie Gala',
    excerpt: 'Discover the art of accessorising mulberry silk with statement jewellery, evening clutches, and strappy heels for a flawless red-carpet moment.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'
  },
  {
    id: 2,
    tag: 'Trend Report',
    title: 'Top 6 Festive Colours Dominating the 2026 Season',
    excerpt: 'From Royal Crimson to Peacock Teal — our couture directors break down the definitive palette of the season and how to wear each shade.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80'
  },
  {
    id: 3,
    tag: 'Care Guide',
    title: 'The Ultimate Mulberry Silk Care Ritual',
    excerpt: 'Protect your investment with expert-approved washing, steaming, and storage techniques straight from our Milan atelier.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'
  }
];

const FAQ_DATA = [
  {
    q: 'What sizes do you offer?',
    a: 'We offer XS through 3XL across most styles. Each product page includes a detailed size chart with bust, waist, and hip measurements. Our in-house stylists are also available for a complimentary fit consultation.'
  },
  {
    q: 'How long does delivery take?',
    a: 'Express delivery (48–72 hours) is available worldwide on orders over $150. Standard delivery takes 5–7 business days. All orders ship with insured, signature-required tracking.'
  },
  {
    q: 'What is your returns policy?',
    a: 'We offer a hassle-free 30-day return window. Items must be unworn and in original packaging. We provide a complimentary prepaid return label — no questions asked.'
  },
  {
    q: 'Are your silks ethically sourced?',
    a: 'Absolutely. We source 100% certified organic mulberry silk directly from generational master weavers. We are GOTS certified and operate under fair-trade principles throughout our supply chain.'
  },
  {
    q: 'Can I request custom sizing or colour?',
    a: 'Yes! Our bespoke atelier service allows for custom sizing, colour matching, and design alterations. Please contact our styling team at least 3 weeks before your event for bespoke commissions.'
  }
];

export default function Home({ onNavigateAbout, cartCount, setCartCount }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Dresses');
  const [wishlist, setWishlist] = useState(new Set([1, 4]));
  const [quickViewDress, setQuickViewDress] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [toastMessage, setToastMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [discountClaimed, setDiscountClaimed] = useState(false);

  // Cart Drawer
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[1], qty: 1, selectedSize: 'M' },
    { ...PRODUCTS[3], qty: 1, selectedSize: 'S' }
  ]);

  // FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // Size Guide
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Bestsellers Carousel
  const carouselRef = useRef(null);
  const BESTSELLERS = PRODUCTS.filter(p => [2, 1, 8, 6, 4].includes(p.id));

  // Hero Carousel
  const [heroSlide, setHeroSlide] = useState(0);
  const HERO_SLIDES = [
    {
      src: '/hero-dress.jpg', alt: 'Emerald Zari Runway Gown',
      badge: 'Runway Highlight', title: 'Emerald Zari Gown',
      heading: 'Where Elegance Meets', sub: 'Pure Couture.',
      desc: 'Handcrafted from 100% organic mulberry silk with hand-woven gold zari borders. Born in our Milan atelier.',
      price: '$380', old: '$490', disc: '-22%',
    },
    {
      src: '/hero-slide-2.jpg', alt: 'Royal Crimson Velvet Saree Gown',
      badge: 'Bestseller', title: 'Crimson Velvet Gown',
      heading: 'Royal Glamour, Artisan', sub: 'Craftsmanship.',
      desc: 'Royal mulberry velvet adorned with genuine antique gold bullion zardozi. A masterclass in modern bridal couture.',
      price: '$420', old: '$550', disc: '-24%',
    },
    {
      src: '/hero-slide-3.jpg', alt: 'Champagne Silk Halter Maxi',
      badge: 'New Arrival', title: 'Champagne Silk Maxi',
      heading: 'Effortless Luxury, Every', sub: 'Season.',
      desc: 'Liquid silk-satin slip dress with a sculpted cowl neckline and fluid bias-cut hem. Timeless and breathtaking.',
      price: '$260', old: '$320', disc: '-19%',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(s => (s + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  // Close cart on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') { setCartOpen(false); setSizeGuideOpen(false); } };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
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
    const size = selectedSizes[dress.id] || dress.sizes[0];
    setCartItems(prev => {
      const existing = prev.find(i => i.id === dress.id && i.selectedSize === size);
      if (existing) return prev.map(i => i.id === dress.id && i.selectedSize === size ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...dress, qty: 1, selectedSize: size }];
    });
    setCartCount((c) => c + 1);
    triggerToast(`Added ${dress.name} (${size}) to Bag! 🛍️`);
    if (quickViewDress) setQuickViewDress(null);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id, size) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.selectedSize === size)));
    setCartCount(c => Math.max(0, c - 1));
  };

  const handleQtyChange = (id, size, delta) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id && i.selectedSize === size) {
        const newQty = i.qty + delta;
        if (newQty <= 0) return null;
        return { ...i, qty: newQty };
      }
      return i;
    }).filter(Boolean));
    setCartCount(c => Math.max(0, c + delta));
  };

  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
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

      {/* Floating Cart Button */}
      <button className={styles.floatingCartBtn} onClick={() => setCartOpen(true)}>
        🛍️ <span className={styles.floatingCartCount}>{cartItems.reduce((s, i) => s + i.qty, 0)}</span>
      </button>

      {/* Cart Drawer Overlay */}
      {cartOpen && (
        <div className={styles.cartOverlay} onClick={() => setCartOpen(false)}>
          <div className={styles.cartDrawer} onClick={e => e.stopPropagation()}>
            <div className={styles.cartHeader}>
              <h3 className={styles.cartTitle}>🛍️ Your Bag <span className={styles.cartItemCount}>({cartItems.length})</span></h3>
              <button className={styles.cartClose} onClick={() => setCartOpen(false)}>✕</button>
            </div>
            <div className={styles.cartItems}>
              {cartItems.length === 0 ? (
                <div className={styles.cartEmpty}>
                  <span className={styles.cartEmptyIcon}>🛍️</span>
                  <p>Your bag is empty</p>
                  <button className={styles.btnPrimary} onClick={() => setCartOpen(false)}>Continue Shopping</button>
                </div>
              ) : cartItems.map(item => (
                <div key={`${item.id}-${item.selectedSize}`} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartItemImg} />
                  <div className={styles.cartItemInfo}>
                    <div className={styles.cartItemName}>{item.name}</div>
                    <div className={styles.cartItemMeta}>Size: {item.selectedSize} • ${item.price}</div>
                    <div className={styles.cartItemQtyRow}>
                      <button className={styles.qtyBtn} onClick={() => handleQtyChange(item.id, item.selectedSize, -1)}>−</button>
                      <span className={styles.qtyVal}>{item.qty}</span>
                      <button className={styles.qtyBtn} onClick={() => handleQtyChange(item.id, item.selectedSize, +1)}>+</button>
                    </div>
                  </div>
                  <div className={styles.cartItemRight}>
                    <span className={styles.cartItemTotal}>${item.price * item.qty}</span>
                    <button className={styles.cartRemoveBtn} onClick={() => handleRemoveFromCart(item.id, item.selectedSize)}>🗑</button>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 && (
              <div className={styles.cartFooter}>
                <div className={styles.cartSummaryRow}>
                  <span>Subtotal</span>
                  <span className={styles.cartSubtotal}>${cartTotal}</span>
                </div>
                <div className={styles.cartSummaryRow} style={{color:'var(--text-muted)', fontSize:'0.82rem'}}>
                  <span>Express Shipping</span>
                  <span style={{color:'#22c55e'}}>FREE ✓</span>
                </div>
                <div className={styles.cartDivider}/>
                <div className={styles.cartSummaryRow} style={{fontWeight:700, fontSize:'1.1rem'}}>
                  <span>Total</span>
                  <span className={styles.cartTotal}>${cartTotal}</span>
                </div>
                <button className={styles.checkoutBtn}>Proceed to Checkout →</button>
                <button className={styles.continueShopping} onClick={() => setCartOpen(false)}>Continue Shopping</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div className={styles.modalOverlay} onClick={() => setSizeGuideOpen(false)}>
          <div className={styles.sizeGuideModal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalCloseRow}>
              <h3 className={styles.sizeGuideTitle}>📏 Aura Couture Size Guide</h3>
              <button className={styles.modalClose} onClick={() => setSizeGuideOpen(false)}>✕</button>
            </div>
            <p className={styles.sizeGuideNote}>All measurements are in centimetres. We recommend choosing the size that matches your largest measurement.</p>
            <div className={styles.sizeTableWrapper}>
              <table className={styles.sizeTable}>
                <thead>
                  <tr><th>Size</th><th>Bust (cm)</th><th>Waist (cm)</th><th>Hips (cm)</th><th>UK</th><th>US</th><th>EU</th></tr>
                </thead>
                <tbody>
                  {[['XS','78–82','60–64','86–90','6','2','34'],
                    ['S','82–86','64–68','90–94','8','4','36'],
                    ['M','86–90','68–72','94–98','10','6','38'],
                    ['L','90–95','72–77','98–103','12','8','40'],
                    ['XL','95–101','77–83','103–109','14','10','42']].map(row => (
                    <tr key={row[0]}>{row.map((c,i) => <td key={i}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.sizeGuideTip}>💡 <strong>Tip:</strong> Between sizes? Our silks have a natural 2–3 cm drape allowance — size down for a fitted silhouette or size up for a relaxed, flowing look.</p>
          </div>
        </div>
      )}


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

      {/* Hero Editorial Static Layout */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Left Column: Big Typography & Copy */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.sparkle}>✨</span> Haute Couture Spring/Summer 2026
            </div>
            
            <h1 className={styles.heroTitle}>
              Elegance In<br/>
              <span className={styles.heroSerif}>Every Stitch.</span>
            </h1>
            
            <p className={styles.heroDescription}>
              Handcrafted designer gowns, ethereal mulberry silks, and red-carpet festive attire tailored for the contemporary muse who refuses to blend in. Born in our Milan atelier.
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
                <span className={styles.statLabel}>Silhouettes</span>
              </div>
              <div className={styles.statBorder}></div>
              <div className={styles.heroStatItem}>
                <span className={styles.statNumber}>4.95 ★</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.statBorder}></div>
              <div className={styles.heroStatItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Pure Silk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div className={styles.heroRightCollage}>
            <div className={styles.collageMain}>
              <img src="/saree-main.jpg" alt="Royal Banarasi Red Saree" className={styles.collageImgMain} />
            </div>
            
            <div className={styles.collageSecondary}>
              <img src="/saree-secondary.jpg" alt="Emerald Green Pastel Saree" className={styles.collageImgSecondary} />
            </div>

            {/* Floating Card over the collage */}
            <div className={styles.floatingProductCard}>
              <div className={styles.floatingBadgeTag}>Runway Exclusive</div>
              <div className={styles.floatingDressTitle}>Royal Banarasi Saree</div>
              <div className={styles.floatingPriceRow}>
                <span className={styles.floatingPrice}>$580</span>
                <span className={styles.floatingOldPrice}>$750</span>
              </div>
            </div>

            {/* Backdrop glow */}
            <div className={styles.heroCollageGlow}></div>
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
          {filteredProducts.slice(0, 4).map((dress) => {
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

                  {/* Sizes Preview */}
                  <div className={styles.sizeRow} onClick={(e) => e.stopPropagation()}>
                    <span className={styles.sizeLabel}>Sizes:</span>
                    <div className={styles.sizePills}>
                      {dress.sizes.map((size) => (
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

        {/* View All Button */}
        {filteredProducts.length > 4 && (
          <div className={styles.viewAllContainer}>
            <button
              className={styles.btnSecondary}
              onClick={() => navigate('/collections')}
              style={{ marginTop: '3rem', padding: '1rem 3rem' }}
            >
              Show More Products ➔
            </button>
          </div>
        )}
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



      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImageWrapper}>
            <img 
              src="/atelier-crafting.jpg" 
              alt="Crafting couture dress" 
              className={styles.storyImage} 
            />
            <div className={styles.storyBadge}>Est.<br/>2024</div>
          </div>
          <div className={styles.storyContent}>
            <div className={styles.subHeading}>THE ATELIER</div>
            <h2>Artisan Craftsmanship <span className={styles.italicWord}>Redefined.</span></h2>
            <p>Every Aura Couture piece begins its life in our private atelier in Milan. We source only 100% organic mulberry silk, spinning each thread with heritage techniques passed down through generations of master weavers.</p>
            <p>It takes over 140 hours of meticulous hand-embroidery to create a single runway gown. We don't just make dresses; we craft heirloom art pieces designed to be cherished for a lifetime.</p>
            <div className={styles.storySignature}>Isabella Aura</div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className={styles.instagramSection}>
        <div className={styles.subHeading}>@AURA.COUTURE</div>
        <h2 className={styles.instaTitle}>Shop The <span className={styles.italicWord}>Look</span></h2>
        <a href="#" className={styles.instaHandle}>Follow us on Instagram ➔</a>
        
        <div className={styles.instaGrid}>
          {[
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
            '/instagram-look-3.jpg',
            'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=600&q=80'
          ].map((img, i) => (
            <div key={i} className={styles.instaItem}>
              <img src={img} alt={`Instagram styled look ${i+1}`} className={styles.instaImage} />
              <div className={styles.instaOverlay}>
                <span className={styles.instaIcon}>♡</span>
                <span className={styles.instaShopText}>Shop This Style</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselHeader}>
          <div>
            <div className={styles.subHeading}>CURATED PICKS</div>
            <h2 className={styles.sectionTitle}>Bestselling <span className={styles.italicWord}>Silhouettes</span></h2>
          </div>
          <div className={styles.carouselArrows}>
            <button className={styles.arrowBtn} onClick={() => scrollCarousel(-1)}>‹</button>
            <button className={styles.arrowBtn} onClick={() => scrollCarousel(1)}>›</button>
          </div>
        </div>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {BESTSELLERS.map(dress => (
            <div key={dress.id} className={styles.carouselCard} onClick={() => setQuickViewDress(dress)}>
              <div className={styles.carouselImgWrapper}>
                <img src={dress.image} alt={dress.name} className={styles.carouselImg} loading="lazy" />
                <div className={styles.carouselTag}>{dress.tag}</div>
              </div>
              <div className={styles.carouselInfo}>
                <div className={styles.cardCategory}>{dress.category}</div>
                <div className={styles.cardName}>{dress.name}</div>
                <div className={styles.carouselPrice}>
                  <span className={styles.price}>${dress.price}</span>
                  <span className={styles.oldPrice}>${dress.originalPrice}</span>
                </div>
                <button className={styles.addToBagBtn} onClick={e => { e.stopPropagation(); handleAddToCart(dress, e); }}>Add to Bag +</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Style Blog Section */}
      <section className={styles.blogSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.subHeading}>THE AURA JOURNAL</div>
          <h2 className={styles.sectionTitle}>Style <span className={styles.italicWord}>Insights</span> & Trend Reports</h2>
          <p className={styles.sectionSubtitle}>Expert styling advice, trend breakdowns, and couture care guides from our Milan atelier team.</p>
        </div>
        <div className={styles.blogGrid}>
          {BLOG_POSTS.map(post => (
            <div key={post.id} className={styles.blogCard}>
              <div className={styles.blogImgWrapper}>
                <img src={post.image} alt={post.title} className={styles.blogImg} loading="lazy" />
                <span className={styles.blogTag}>{post.tag}</span>
              </div>
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogMeta}>
                  <span className={styles.blogReadTime}>🕐 {post.readTime}</span>
                  <button className={styles.blogReadMore}>Read Article →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guide CTA Banner */}
      <section className={styles.sizeGuideBanner}>
        <div className={styles.sizeGuideBannerContent}>
          <span className={styles.sizeGuideEmoji}>📏</span>
          <div>
            <h4 className={styles.sizeGuideBannerTitle}>Not Sure About Your Size?</h4>
            <p className={styles.sizeGuideBannerDesc}>Use our detailed size guide to find your perfect Aura fit — bust, waist, and hip measurements included.</p>
          </div>
          <button className={styles.sizeGuideBtn} onClick={() => setSizeGuideOpen(true)}>View Size Guide</button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.subHeading}>GOT QUESTIONS?</div>
          <h2 className={styles.sectionTitle}>Frequently <span className={styles.italicWord}>Asked</span> Questions</h2>
        </div>
        <div className={styles.faqList}>
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}>
              <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className={styles.faqAnswer}>{faq.a}</div>
              )}
            </div>
          ))}
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
