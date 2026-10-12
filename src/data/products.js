// Central Fashion Products Data Store for AURA COUTURE

export const PRODUCTS = [
  // --- Evening Gowns ---
  {
    id: 1,
    name: 'Emerald Zari Runway Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 380,
    originalPrice: 490,
    rating: 4.9,
    reviews: 142,
    tag: 'Runway Edit',
    image: '/hero-dress.jpg',
    gallery: [
      '/hero-dress.jpg',
      '/evening-gown-showcase.png',
      '/collections-collage.png'
    ],
    colors: [
      { name: 'Emerald Forest', hex: '#059669' },
      { name: 'Midnight Obsidian', hex: '#0f172a' },
      { name: 'Imperial Amber', hex: '#d97706' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Cut from heavy mulberry silk with hand-woven gold zari borders and cascading split sleeves. Featured in the 2026 Spring Couture collection in Paris.',
    fabric: '100% Pure Mulberry Silk with 24K Electroplated Gold Zari Threading',
    embroidery: '180+ Hours of Hand-carved Zardozi, Micro-sequins, and Dabka Work',
    silhouette: 'Sculpted Sweetheart Bodice with 24-Kali Flared Skirt and Cathedral Train',
    care: 'Professional Couture Dry Clean Only. Store in breathable muslin bag.'
  },
  {
    id: 5,
    name: 'Blush Rose Floral Embroidered Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 390,
    originalPrice: 480,
    rating: 4.9,
    reviews: 64,
    tag: 'Limited Drop',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      '/hero-dress.jpg'
    ],
    colors: [
      { name: 'Blush Pink', hex: '#fbcfe8' },
      { name: 'French Rose', hex: '#f472b6' },
      { name: 'Silver Mist', hex: '#cbd5e1' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Pastel romantic tulle overlaid with French botanical threadwork and subtly shimmering seed pearls hand-set by master karigars.',
    fabric: 'Multi-layer Parisian Organza & Fine Silk Crepe',
    embroidery: 'Micro Seed Pearl Appliqué & Botanical Resham Threadwork',
    silhouette: 'Ballgown Silhouette with Hand-gathered Tulle Flounce',
    care: 'Specialist Dry Clean Only.'
  },
  {
    id: 9,
    name: 'Amethyst Satin Corset Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 410,
    originalPrice: 510,
    rating: 4.7,
    reviews: 48,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      '/hero-dress.jpg'
    ],
    colors: [
      { name: 'Royal Amethyst', hex: '#8b5cf6' },
      { name: 'Deep Violet', hex: '#4c1d95' },
      { name: 'Onyx Noir', hex: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A structural masterpiece featuring a spiral-boned corset bodice and a liquid satin draping skirt that cascades into a graceful puddle train.',
    fabric: 'Heavy Duchess Satin & Pure Silk Charmeuse',
    embroidery: 'Architectural Pave Crystal Piping along Bodice',
    silhouette: 'Hourglass Corsetry with High Thigh Draped Slit',
    care: 'Dry Clean Only.'
  },
  {
    id: 10,
    name: 'Midnight Blue Tulle Ballgown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 520,
    originalPrice: 650,
    rating: 5.0,
    reviews: 29,
    tag: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      '/collections-collage.png'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1e1b4b' },
      { name: 'Cobalt Royal', hex: '#172554' },
      { name: 'Celestial Star', hex: '#cbd5e1' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Voluminous layers of midnight blue tulle over a shimmering celestial organza lining designed for state galas and gala premieres.',
    fabric: 'Multi-tiered Silk Illusion Tulle & Metallic Lurex Weave',
    embroidery: 'Hand-scattered Starry Swarovski Crystals',
    silhouette: 'Dramatic Regal Ballgown with Structured Horsehair Hem',
    care: 'White-glove Couture Clean.'
  },
  {
    id: 11,
    name: 'Scarlet Chiffon Goddess Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 350,
    originalPrice: 420,
    rating: 4.8,
    reviews: 88,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8cf4c8cae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568252542512-9fe8cf4c8cae?w=800&q=80'
    ],
    colors: [
      { name: 'Scarlet Red', hex: '#dc2626' },
      { name: 'Burgundy Crimson', hex: '#991b1b' },
      { name: 'Coral Rose', hex: '#fca5a5' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A Grecian-inspired chiffon gown with a dramatic plunging neckline and sweeping floor-length train that moves like liquid poetry.',
    fabric: '100% Pure Silk Georgette Chiffon',
    embroidery: 'Hand-pleated Bodice with Gold Cord Accents',
    silhouette: 'Empire Grecian Column with Flowing Cape Train',
    care: 'Delicate Silk Dry Clean.'
  },
  {
    id: 12,
    name: 'Obsidian Velvet Mermaid Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviews: 112,
    tag: 'Classic',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80'
    ],
    colors: [
      { name: 'Deep Obsidian', hex: '#000000' },
      { name: 'Anthracite Gray', hex: '#333333' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Sleek, form-fitting black silk velvet tailored to accentuate the silhouette, finished with a subtle flare and internal boning.',
    fabric: 'Heavy Mulberry Silk Velvet with French Cotton Backing',
    embroidery: 'Minimalist Micro-Crystal Edge Binding',
    silhouette: 'Fitted Mermaid Silhouette with Fluted Sweep',
    care: 'Specialist Velvet Dry Clean Only.'
  },

  // --- Silk & Festive ---
  {
    id: 2,
    name: 'Royal Crimson Velvet Saree Gown',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 420,
    originalPrice: 550,
    rating: 5.0,
    reviews: 98,
    tag: 'Bestseller',
    image: '/spotlight-dress.jpg',
    gallery: [
      '/spotlight-dress.jpg',
      '/saree-main.jpg',
      '/saree-secondary.jpg'
    ],
    colors: [
      { name: 'Crimson Velvet', hex: '#881337' },
      { name: 'Plum Royal', hex: '#701a75' },
      { name: 'Midnight Navy', hex: '#0f172a' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A harmonious blend of royal silk velvet and micro-zardozi embroidery with an architectural detachable cape drape.',
    fabric: 'Pure Silk Velvet & Varanasi Gold Tissue Organza',
    embroidery: 'Authentic Zardozi, Kasab Bullion, and French Sequins',
    silhouette: 'Structured Saree Silhouette with Pre-pleated Pallu',
    care: 'Heritage Fabric Dry Clean.'
  },
  {
    id: 6,
    name: 'Peacock Blue Banarasi Fusion Dress',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 450,
    originalPrice: 580,
    rating: 5.0,
    reviews: 82,
    tag: 'Artisan Heritage',
    image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80',
      '/saree-main.jpg'
    ],
    colors: [
      { name: 'Peacock Cerulean', hex: '#0284c7' },
      { name: 'Deep Teal', hex: '#0369a1' },
      { name: 'Emerald Sea', hex: '#14b8a6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Authentic Katan silk crafted in Varanasi with a modern structured corseted bodice and sweeping floor-length flair.',
    fabric: 'Handloom Katan Silk with Kadwa Brocade Weave',
    embroidery: 'Pure Gold Zari Floral Jaal across skirt',
    silhouette: 'Corseted Bodice with 16-Kali Volume Skirt',
    care: 'Dry Clean Only.'
  },
  {
    id: 13,
    name: 'Golden Zari Kanjeevaram Lehenga',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviews: 154,
    tag: 'Bridal Edit',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583391733958-d25e07fac0fa?w=800&q=80'
    ],
    colors: [
      { name: 'Antique Gold', hex: '#d97706' },
      { name: 'Henna Copper', hex: '#b45309' },
      { name: 'Champagne Silk', hex: '#fef3c7' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'A breathtaking three-piece ensemble made from pure Kanjeevaram silk with heavy temple borders and hand-knotted latkans.',
    fabric: 'Pure Mulberry Silk with Tested Silver & Gold Bullion Zari',
    embroidery: 'Temple Korvai Border with Handloom Peacock Motifs',
    silhouette: 'Grand 4.5 Meter Flare Bridal Lehenga Ensemble',
    care: 'Bridal Preservation Clean Only.'
  },
  {
    id: 14,
    name: 'Rani Pink Chanderi Silk Suit',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 290,
    originalPrice: 380,
    rating: 4.8,
    reviews: 73,
    tag: 'Festive Ready',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&q=80'
    ],
    colors: [
      { name: 'Rani Magenta', hex: '#db2777' },
      { name: 'Rose Red', hex: '#9d174d' },
      { name: 'Petal Pink', hex: '#fbcfe8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Lightweight and elegant Chanderi silk with delicate silver gota patti work. Paired with wide-leg culottes and a sheer organza dupatta.',
    fabric: 'Pure Chanderi Silk-Cotton Blend with Silk Organza Dupatta',
    embroidery: 'Jaipuri Hand-cut Silver Gota Patti and Mirror Accents',
    silhouette: 'Straight Cut Kurta with Flared Palazzo Trousers',
    care: 'Dry Clean.'
  },

  // --- Summer Maxi ---
  {
    id: 3,
    name: 'Champagne Silk Halter Maxi',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 260,
    originalPrice: 320,
    rating: 4.8,
    reviews: 76,
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    ],
    colors: [
      { name: 'Champagne Cream', hex: '#fef3c7' },
      { name: 'Peach Sunset', hex: '#fed7aa' },
      { name: 'Wild Rose', hex: '#f43f5e' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Liquid silk-satin slip dress featuring a sculpted cowl neckline, cross-back ties, and a fluid bias-cut hem that ripples with every step.',
    fabric: '100% Pure Mulberry Silk Satin (19 Momme)',
    embroidery: 'Self-fabric French Bias Binding',
    silhouette: '90s Bias-Cut Slip with Cross Back Ties',
    care: 'Gentle Hand Wash or Dry Clean.'
  },
  {
    id: 7,
    name: 'Tuscan Sun Linen Pleated Sundress',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 210,
    originalPrice: 260,
    rating: 4.7,
    reviews: 53,
    tag: 'Eco-Luxe',
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80'
    ],
    colors: [
      { name: 'Tuscan Sun Yellow', hex: '#fde047' },
      { name: 'Warm Sand', hex: '#fed7aa' },
      { name: 'Ivory Flax', hex: '#ffffff' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: '100% certified organic Italian flax linen with delicate sun-ray knife pleating and genuine mother-of-pearl buttons.',
    fabric: 'Certified Organic Italian Flax Linen',
    embroidery: 'Accordion Knife Pleating & Hand-carved Shell Buttons',
    silhouette: 'A-Line Maxi Sundress with Removable Sash Belt',
    care: 'Cold Machine Wash on Delicate or Dry Clean.'
  },

  // --- Cocktail Sparkle ---
  {
    id: 4,
    name: 'Midnight Celestial Sequin Dress',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviews: 115,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'
    ],
    colors: [
      { name: 'Midnight Sparkle', hex: '#0f172a' },
      { name: 'Indigo Sapphire', hex: '#1e1b4b' },
      { name: 'Electric Violet', hex: '#312e81' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Hand-applied micro sequins over midnight stretch mesh. Catches ambient light gracefully from every dimension.',
    fabric: 'Stretch Illusion Mesh with Pave Sequins',
    embroidery: 'Dense Micro-Facet Glass Sequins',
    silhouette: 'Body-Contouring Column Cocktail Dress',
    care: 'Specialist Hand Clean Only.'
  },
  {
    id: 8,
    name: 'Onyx Feather & Crystal Gala Dress',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 480,
    originalPrice: 620,
    rating: 5.0,
    reviews: 41,
    tag: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#09090b' },
      { name: 'Charcoal Pave', hex: '#27272a' },
      { name: 'Silver Smoke', hex: '#71717a' }
    ],
    sizes: ['XS', 'S', 'M'],
    description: 'Architectural crepe silhouette adorned with cruelty-free ostrich feather accents and Swarovski crystal piping along the asymmetric neckline.',
    fabric: 'Heavy Crepe de Chine with Feather Trims',
    embroidery: 'Baguette Cut Crystal Borders',
    silhouette: 'Asymmetric One-Shoulder Cocktail Dress',
    care: 'Atelier Couture Dry Clean.'
  }
];

// Helper functions
export function getProductById(id) {
  const numericId = parseInt(id, 10);
  return PRODUCTS.find((p) => p.id === numericId) || PRODUCTS[0];
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}
