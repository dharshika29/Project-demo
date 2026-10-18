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
    image: '/evening-gown-showcase.png',
    gallery: [
      '/evening-gown-showcase.png',
      '/hero-dress.jpg',
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
  },

  // --- Additional Evening Gowns ---
  {
    id: 15,
    name: 'Ivory Pearl Cathedral Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 560,
    originalPrice: 690,
    rating: 5.0,
    reviews: 37,
    tag: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      '/hero-dress.jpg'
    ],
    colors: [
      { name: 'Pure Ivory', hex: '#ffffff' },
      { name: 'Alabaster Pearl', hex: '#f8fafc' },
      { name: 'Warm Champagne', hex: '#fef3c7' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Bespoke sculptural silhouette featuring hand-threaded baroque freshwater pearls, structured corsetry boning, and a dramatic chapel-length train.',
    fabric: 'Heavy Silk Faille & Illusion French Tulle',
    embroidery: '300+ Hours of Hand-embroidered Baroque Pearls and Silver Threadwork',
    silhouette: 'Cathedral Column with Detachable Pleated Train',
    care: 'White-Glove Specialist Preservation.'
  },
  {
    id: 16,
    name: 'Royal Sapphire Drape Gala Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 440,
    originalPrice: 540,
    rating: 4.8,
    reviews: 52,
    tag: 'Red Carpet',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80'
    ],
    colors: [
      { name: 'Royal Sapphire', hex: '#1d4ed8' },
      { name: 'Deep Cobalt', hex: '#1e3a8a' },
      { name: 'Midnight Obsidian', hex: '#0f172a' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Liquid sapphire crepe woven with subtle metallic threads, featuring an asymmetric cowl neckline and thigh-high waterfall draping.',
    fabric: 'Heavy Silk Moroccan Crepe with Lurex Sheen',
    embroidery: 'Hand-pleated Grecian Bodice with Crystal Brooch Accent',
    silhouette: 'Asymmetric Draped Column with Waterfall Hemline',
    care: 'Specialist Dry Clean Only.'
  },
  {
    id: 17,
    name: 'Champagne Gold Zari Ballgown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 490,
    originalPrice: 620,
    rating: 4.9,
    reviews: 63,
    tag: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      '/spotlight-dress.jpg'
    ],
    colors: [
      { name: 'Champagne Gold', hex: '#e8d19a' },
      { name: 'Antique Bronze', hex: '#78350f' },
      { name: 'Desert Dune', hex: '#fde68a' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Exquisite molten gold jacquard gown designed with an internal Basque waist corset and grand flared box pleats for red-carpet distinction.',
    fabric: 'Silk-Metallic Metallic Jacquard Brocade',
    embroidery: 'Hand-embroidered Gold Bullion Micro-piping',
    silhouette: 'Basque Waist Ballgown with Inverted Pleating',
    care: 'Specialist Silk Clean.'
  },
  {
    id: 18,
    name: 'Rose Gold Pleated Goddess Gown',
    category: 'Evening Gowns',
    categorySlug: 'evening-gowns',
    price: 410,
    originalPrice: 510,
    rating: 4.7,
    reviews: 44,
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80'
    ],
    colors: [
      { name: 'Rose Gold', hex: '#fda4af' },
      { name: 'Blush Copper', hex: '#fb7185' },
      { name: 'Champagne Shimmer', hex: '#fef08a' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Sunburst pleated metallic lamé that catches candlelit ballroom glimmers gracefully, finished with a plunging halter neck and low back.',
    fabric: 'Liquid Lurex Lamé & French Chiffon',
    embroidery: 'Precision Accordion Sunray Micro-Pleating',
    silhouette: 'Flowing Grecian Halter Gown with Dramatic Sweep',
    care: 'Delicate Hand Clean or Dry Clean.'
  },

  // --- Additional Silk & Festive ---
  {
    id: 19,
    name: 'Varanasi Crimson Brocade Lehenga',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 620,
    originalPrice: 780,
    rating: 5.0,
    reviews: 91,
    tag: 'Bridal Couture',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      '/saree-main.jpg'
    ],
    colors: [
      { name: 'Royal Crimson', hex: '#991b1b' },
      { name: 'Sindoor Red', hex: '#b91c1c' },
      { name: 'Antique Gold', hex: '#c9a84c' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Handwoven in Varanasi using pure gold zari Kadwa technique. Complemented by an artisanal zardozi blouse and sheer embroidered net dupatta.',
    fabric: 'Pure Katan Handloom Silk with Tested Gold Bullion',
    embroidery: 'Kadwa Brocade Floral Jaal with Hand-sewn Dabka and Sequins',
    silhouette: 'Grand 24-Kali Flared Bridal Lehenga Ensemble',
    care: 'Bridal Heritage Preservation Clean.'
  },
  {
    id: 20,
    name: 'Emerald Tissue Silk Katan Saree',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 480,
    originalPrice: 600,
    rating: 4.9,
    reviews: 78,
    tag: 'Artisan Heritage',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80'
    ],
    colors: [
      { name: 'Emerald Forest', hex: '#047857' },
      { name: 'Golden Tissue', hex: '#d97706' },
      { name: 'Peacock Green', hex: '#0f766e' }
    ],
    sizes: ['Free Size (Includes Unstitched Blouse)'],
    description: 'An ethereal confluence of gold tissue warp and emerald katan silk weft, shimmering with antique meenakari motifs across the pallu.',
    fabric: 'Varanasi Gold Tissue & Pure Katan Silk',
    embroidery: 'Dual-Tone Silver & Gold Meenakari Floral Borders',
    silhouette: 'Traditional 6-Yard Saree with 1-Meter Brocade Blouse Piece',
    care: 'Specialist Silk Preservation.'
  },
  {
    id: 21,
    name: 'Marigold Yellow Organza Anarkali',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 360,
    originalPrice: 450,
    rating: 4.8,
    reviews: 55,
    tag: 'Festive Glam',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80'
    ],
    colors: [
      { name: 'Marigold Yellow', hex: '#eab308' },
      { name: 'Haldi Ochre', hex: '#ca8a04' },
      { name: 'Ivory Gold', hex: '#fef08a' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Festive sunshine organza with handcrafted gotta patti medallions, scalloped borders, and delicate mirror embroidery for auspicious celebrations.',
    fabric: 'Pure Silk Organza & Mulberry Silk Satin Underlayer',
    embroidery: 'Jaipuri Hand-cut Gotta Patti with Beaded Mirror Latkans',
    silhouette: 'Floor-Length Tiered Flared Anarkali Ensemble',
    care: 'Specialist Dry Clean.'
  },
  {
    id: 22,
    name: 'Royal Indigo Banarasi Silk Saree',
    category: 'Silk & Festive',
    categorySlug: 'silk-festive',
    price: 440,
    originalPrice: 560,
    rating: 4.9,
    reviews: 67,
    tag: 'Heritage Weave',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80'
    ],
    colors: [
      { name: 'Royal Indigo', hex: '#1e1b4b' },
      { name: 'Midnight Navy', hex: '#0f172a' },
      { name: 'Silver Filigree', hex: '#cbd5e1' }
    ],
    sizes: ['Free Size (Includes Unstitched Blouse)'],
    description: 'Deep celestial indigo silk handwoven on traditional pit looms with intricate silver floral jaal and a majestic temple zari border.',
    fabric: '100% Certified Mulberry Handloom Katan Silk',
    embroidery: 'Silver Bullion Zari with Shikarbah Hunting Motifs',
    silhouette: 'Classic Drape Saree with Regal Heavy Pallu',
    care: 'Dry Clean Only. Muslin Cloth Wrap.'
  },

  // --- Additional Summer Maxi ---
  {
    id: 23,
    name: 'Amalfi Coast Riviera Silk Maxi',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 280,
    originalPrice: 350,
    rating: 4.9,
    reviews: 86,
    tag: 'Resort Luxe',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80'
    ],
    colors: [
      { name: 'Riviera Azure', hex: '#0284c7' },
      { name: 'Mediterranean Teal', hex: '#0f766e' },
      { name: 'Seashell White', hex: '#ffffff' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Airy silk georgette adorned with custom Mediterranean watercolor brushstrokes, a gathered halter bodice, and undulating floor sweep.',
    fabric: '100% Pure Mulberry Silk Georgette',
    embroidery: 'Hand-rolled Bias Edges with Dainty Mother-of-Pearl Accents',
    silhouette: 'Flowing Tiered Maxi with Elasticated Keyhole Back',
    care: 'Gentle Hand Wash or Dry Clean.'
  },
  {
    id: 24,
    name: 'Santorini White Linen Tiered Maxi',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 230,
    originalPrice: 290,
    rating: 4.7,
    reviews: 62,
    tag: 'Summer Breeze',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80'
    ],
    colors: [
      { name: 'Santorini White', hex: '#ffffff' },
      { name: 'Natural Ecru', hex: '#f5f5f4' },
      { name: 'Seafoam Tint', hex: '#ccfbf1' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Crisp Normandy linen crafted with delicate ladder-stitch lace inserts, adjustable shoulder ties, and breezy voluminous tiers.',
    fabric: '100% Normandy Flax Linen',
    embroidery: 'Hand-crocheted Cotton Lace Trim Along Flounces',
    silhouette: 'Relaxed Tiered Bohemian Maxi Dress',
    care: 'Cold Delicate Wash.'
  },
  {
    id: 25,
    name: 'Coral Sunset Cutout Silk Maxi',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 295,
    originalPrice: 370,
    rating: 4.8,
    reviews: 49,
    tag: 'Vacation Edit',
    image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&q=80'
    ],
    colors: [
      { name: 'Sunset Coral', hex: '#fb7185' },
      { name: 'Tangerine Glow', hex: '#f97316' },
      { name: 'Golden Apricot', hex: '#fdba74' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Sculpted waist cutouts fastened by hammered gold hardware, cascading into an asymmetrical godet-flared silk charmeuse skirt.',
    fabric: 'Heavy Weight Pure Silk Charmeuse (22 Momme)',
    embroidery: 'Custom 18K Gold-Electroplated Ring Findings',
    silhouette: 'Hourglass Cutout Maxi with Godet Flare Hem',
    care: 'Dry Clean Only.'
  },
  {
    id: 26,
    name: 'Sage Botanical Floral Slip Dress',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 240,
    originalPrice: 300,
    rating: 4.8,
    reviews: 57,
    tag: 'Day Galas',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80'
    ],
    colors: [
      { name: 'Sage Blossom', hex: '#84cc16' },
      { name: 'Eucalyptus Mint', hex: '#10b981' },
      { name: 'Ivory Flora', hex: '#fefce8' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Vintage-inspired botanical flora illustrated across lustrous silk crepe de chine, with a flattering cowl neckline and French seam finishing.',
    fabric: '100% Silk Crepe de Chine',
    embroidery: 'Hand-screen Printed Archival Flora',
    silhouette: 'Classic 1930s Bias-Cut Slip Silhouette',
    care: 'Delicate Hand Wash or Dry Clean.'
  },
  {
    id: 27,
    name: 'Aegean Blue Silk Halter Sundress',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 270,
    originalPrice: 340,
    rating: 4.7,
    reviews: 43,
    tag: 'Island Luxe',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80'
    ],
    colors: [
      { name: 'Aegean Blue', hex: '#0284c7' },
      { name: 'Capri Sky', hex: '#38bdf8' },
      { name: 'Seafoam Pale', hex: '#99f6e4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Weightless pleated silk chiffon featuring a high neck scarf tie, low open back, and tiered billowing skirt designed for coastal galas.',
    fabric: 'Double-Layered Pure Silk Chiffon',
    embroidery: 'Micro-rolled Hems with Gold Cord Accents',
    silhouette: 'Halter Scarf-Neck Maxi with High Slit',
    care: 'Dry Clean Recommended.'
  },
  {
    id: 28,
    name: 'Terracotta Pleated Linen Maxi',
    category: 'Summer Maxi',
    categorySlug: 'summer-maxi',
    price: 250,
    originalPrice: 310,
    rating: 4.9,
    reviews: 70,
    tag: 'Sunset Gala',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80'
    ],
    colors: [
      { name: 'Warm Terracotta', hex: '#c2410c' },
      { name: 'Desert Sienna', hex: '#9a3412' },
      { name: 'Golden Clay', hex: '#d97706' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Tuscan washed linen tailored with neat sunburst pleating across the waist, accompanied by a braided leather belt and deep side pockets.',
    fabric: 'Heavy Washed Italian Flax Linen',
    embroidery: 'Hand-braided Vegetable-Tanned Leather Belt',
    silhouette: 'A-Line Pleated Maxi with Square Neckline',
    care: 'Machine Wash Delicate Cold.'
  },

  // --- Additional Cocktail Sparkle ---
  {
    id: 29,
    name: 'Champagne Glitz Corset Mini Dress',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 360,
    originalPrice: 460,
    rating: 4.9,
    reviews: 83,
    tag: 'Party Edit',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80'
    ],
    colors: [
      { name: 'Champagne Glitz', hex: '#fde047' },
      { name: 'Molten Platinum', hex: '#e2e8f0' },
      { name: 'Rose Glaze', hex: '#f472b6' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Contour-sculpted mini cocktail dress crafted from shimmering pave crystal mesh over a structured sweetheart corset foundation.',
    fabric: 'Stretch Illusion Mesh with Pave Micro-Crystals',
    embroidery: 'Over 25,000 Micro Glass Facets Stitched by Hand',
    silhouette: 'Structured Sweetheart Corset Mini',
    care: 'Specialist Dry Clean Only.'
  },
  {
    id: 30,
    name: 'Silver Starlight Fringe Cocktail Gown',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 420,
    originalPrice: 530,
    rating: 5.0,
    reviews: 58,
    tag: 'Red Carpet',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80'
    ],
    colors: [
      { name: 'Silver Starlight', hex: '#cbd5e1' },
      { name: 'Moonlit Chrome', hex: '#94a3b8' },
      { name: 'Gunmetal Luxe', hex: '#475569' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Captivating glass bugle bead fringes that sway dynamically with every twirl, layered over a shimmering metallic silver under-slip.',
    fabric: 'French Tulle with Metallic Glass Bugle Beads',
    embroidery: 'Ombré Tiered Glass Bead Fringing',
    silhouette: '1920s Re-imagined Flapper Cocktail Silhouette',
    care: 'Atelier Specialist Hand Clean.'
  },
  {
    id: 31,
    name: 'Emerald Mirror-Embellished Shift',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 380,
    originalPrice: 480,
    rating: 4.8,
    reviews: 46,
    tag: 'Gala Night',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'
    ],
    colors: [
      { name: 'Emerald Sparkle', hex: '#047857' },
      { name: 'Bottle Green', hex: '#064e3b' },
      { name: 'Onyx Black', hex: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Sleek architectural shift dress frosted with miniature geometric mirror plaques and iridescent bugle beads for radiant evening gatherings.',
    fabric: 'Heavy Crepe Satin with Mirrored Appliqué',
    embroidery: 'Geometric Hand-cut Acrylic Mirror Mosaic',
    silhouette: 'Sleeveless Boxy Shift with Scalloped Hemline',
    care: 'Dry Clean Only.'
  },
  {
    id: 32,
    name: 'Rose Gold Sequin Midi Dress',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 340,
    originalPrice: 430,
    rating: 4.8,
    reviews: 64,
    tag: 'Sparkling Soirée',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80'
    ],
    colors: [
      { name: 'Rose Gold Glint', hex: '#fda4af' },
      { name: 'Champagne Blush', hex: '#fecdd3' },
      { name: 'Bronze Ember', hex: '#b45309' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Liquid rose gold reversible sequins that contour the figure elegantly, with a high square neckline and back vent for ease of motion.',
    fabric: 'Four-Way Stretch Micro-Sequin Velvet Mesh',
    embroidery: 'Reversible Dual-Faceted Micro Sequins',
    silhouette: 'Fitted Column Midi Dress with Back Slit',
    care: 'Specialist Clean Only.'
  },
  {
    id: 33,
    name: 'Midnight Noir Velvet Sparkle Mini',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 390,
    originalPrice: 490,
    rating: 4.9,
    reviews: 51,
    tag: 'After Hours',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80'
    ],
    colors: [
      { name: 'Midnight Noir', hex: '#09090b' },
      { name: 'Cosmic Jet', hex: '#18181b' },
      { name: 'Obsidian Sheen', hex: '#27272a' }
    ],
    sizes: ['XS', 'S', 'M'],
    description: 'Plush mulberry silk velvet dusted with cosmic Swarovski crystal constellation sparkles, framed with sculptural shoulder pads.',
    fabric: 'Heavy Silk Velvet with Heat-set Swarovski Crystals',
    embroidery: 'Constellation Micro-Crystal Hot-Fix Motif',
    silhouette: 'Tailored 80s Power-Shoulder Mini Dress',
    care: 'Velvet Atelier Clean.'
  },
  {
    id: 34,
    name: 'Ruby Crystal Cascade Sheath Dress',
    category: 'Cocktail Sparkle',
    categorySlug: 'cocktail-sparkle',
    price: 410,
    originalPrice: 520,
    rating: 5.0,
    reviews: 39,
    tag: 'VIP Exclusive',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?w=800&q=80'
    ],
    colors: [
      { name: 'Ruby Wine', hex: '#991b1b' },
      { name: 'Garnet Shimmer', hex: '#7f1d1d' },
      { name: 'Bordeaux Velvet', hex: '#4c0519' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Dramatic wine-red cocktail sheath featuring cascading crystal rope shoulder drapes that shimmer intoxicatingly under gala chandeliers.',
    fabric: 'Bonded Silk-Elastane Crepe with Crystal Ropes',
    embroidery: 'Dangling Hand-strung Faceted Austrian Crystal Ropes',
    silhouette: 'Body-Contouring Sleek Knee-Length Sheath',
    care: 'Specialist Preservation Only.'
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
