import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import styles from './ProductCatalogView.module.css';

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

const COLOR_PALETTES = [
  { name: 'Gold / Champagne', hex: '#c9a84c', query: 'gold' },
  { name: 'Emerald', hex: '#059669', query: 'emerald' },
  { name: 'Midnight / Navy', hex: '#0f172a', query: 'midnight' },
  { name: 'Crimson / Ruby', hex: '#991b1b', query: 'crimson' },
  { name: 'Rose / Blush', hex: '#f472b6', query: 'rose' },
  { name: 'Sapphire / Blue', hex: '#1d4ed8', query: 'blue' },
  { name: 'Ivory / White', hex: '#ffffff', query: 'white' },
  { name: 'Terracotta', hex: '#c2410c', query: 'terracotta' }
];

const SIGNATURE_TAGS = [
  'Runway Edit',
  'Haute Couture',
  'Limited Drop',
  'Bestseller',
  'Trending',
  'Artisan Heritage'
];

export default function ProductCatalogView({
  initialCategory = 'all',
  showCategoryFilter = true,
  filterTitle = '',
  filterSubtitle = '',
  customProducts = null,
  breadcrumbs = null
}) {
  const navigate = useNavigate();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Source products: either custom provided or from global database
  const baseProducts = customProducts || PRODUCTS;

  // Toggle size
  const handleToggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Toggle color
  const handleToggleColor = (colorQuery) => {
    setSelectedColor((prev) => (prev === colorQuery ? null : colorQuery));
  };

  // Toggle tag
  const handleToggleTag = (tag) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  // Reset all filters
  const resetAllFilters = () => {
    if (showCategoryFilter) {
      setSelectedCategory('all');
    }
    setPriceRange('all');
    setSelectedSizes([]);
    setSelectedColor(null);
    setSelectedTag(null);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filter calculation
  const filteredProducts = baseProducts
    .filter((item) => {
      // Category
      if (showCategoryFilter && selectedCategory !== 'all' && item.categorySlug !== selectedCategory) {
        return false;
      }

      // Price
      if (priceRange === 'under-300' && item.price >= 300) return false;
      if (priceRange === '300-450' && (item.price < 300 || item.price > 450)) return false;
      if (priceRange === 'above-450' && item.price <= 450) return false;

      // Sizes
      if (selectedSizes.length > 0) {
        const hasSize = item.sizes && item.sizes.some((sz) => selectedSizes.includes(sz));
        if (!hasSize) return false;
      }

      // Color
      if (selectedColor) {
        const matchColor =
          item.colors &&
          item.colors.some(
            (c) =>
              c.name.toLowerCase().includes(selectedColor.toLowerCase()) ||
              (c.name.toLowerCase().includes('gold') && selectedColor === 'gold')
          );
        if (!matchColor) return false;
      }

      // Tag
      if (selectedTag && item.tag !== selectedTag) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.fabric && item.fabric.toLowerCase().includes(q)) ||
          (item.description && item.description.toLowerCase().includes(q));
        if (!matches) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      return 0; // featured
    });

  // Calculate active filter count
  const activeCount =
    (showCategoryFilter && selectedCategory !== 'all' ? 1 : 0) +
    (priceRange !== 'all' ? 1 : 0) +
    selectedSizes.length +
    (selectedColor ? 1 : 0) +
    (selectedTag ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  // Category counts
  const categoryCounts = {
    all: baseProducts.length,
    'evening-gowns': baseProducts.filter((p) => p.categorySlug === 'evening-gowns').length,
    'silk-festive': baseProducts.filter((p) => p.categorySlug === 'silk-festive').length,
    'summer-maxi': baseProducts.filter((p) => p.categorySlug === 'summer-maxi').length,
    'cocktail-sparkle': baseProducts.filter((p) => p.categorySlug === 'cocktail-sparkle').length
  };

  return (
    <div className={styles.catalogWrapper}>
      {/* ── Left-Aligned Breadcrumb ── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className={styles.breadcrumbBar}>
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.label || idx}>
                  {crumb.path && !isLast ? (
                    <span
                      className={styles.breadcrumbLink}
                      onClick={() => navigate(crumb.path)}
                      role="link"
                      tabIndex={0}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                  )}
                  {!isLast && <span className={styles.breadcrumbSeparator}>/</span>}
                </React.Fragment>
              );
            })}
          </nav>

          <button
            className={styles.mobileFilterToggle}
            onClick={() => setMobileFilterOpen((prev) => !prev)}
            aria-label="Filter and Sort"
          >
            <span>⚡ Filters</span>
            {activeCount > 0 && <span className={styles.mobileBadge}>{activeCount}</span>}
          </button>
        </div>
      )}

      {/* ── Optional Title Header ── */}
      {filterTitle && (
        <div className={styles.headerBlock}>
          <div className={styles.headerText}>
            <h2 className={styles.headerTitle}>{filterTitle}</h2>
            {filterSubtitle && <p className={styles.headerSubtitle}>{filterSubtitle}</p>}
          </div>

          {!breadcrumbs && (
            <button
              className={styles.mobileFilterToggle}
              onClick={() => setMobileFilterOpen((prev) => !prev)}
            >
              <span>⚡ Filter & Sort</span>
              {activeCount > 0 && <span className={styles.mobileBadge}>{activeCount}</span>}
            </button>
          )}
        </div>
      )}

      {/* ── Main Two-Column Layout (Left Filter + Right Products) ── */}
      <div className={styles.twoColumnLayout}>
        {/* =========================================================================
            LEFT SIDEBAR: LUXURY FILTER CONTROL PANEL
            ========================================================================= */}
        <aside
          className={`${styles.filterSidebar} ${mobileFilterOpen ? styles.sidebarOpenMobile : ''}`}
        >
          {/* Sidebar Top Title & Reset */}
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitleGroup}>
              <span className={styles.sidebarSpark}>✦</span>
              <h3 className={styles.sidebarTitle}>Refine</h3>
              {activeCount > 0 && (
                <span className={styles.activeFilterCountBadge} title={`${activeCount} active filters`}>
                  {activeCount}
                </span>
              )}
            </div>

            <div className={styles.sidebarActions}>
              {activeCount > 0 && (
                <button
                  className={styles.resetAllBtn}
                  onClick={resetAllFilters}
                  title="Clear all active filters"
                >
                  Reset All
                </button>
              )}

              {/* Mobile close 'X' */}
              <button
                className={styles.mobileCloseBtn}
                onClick={() => setMobileFilterOpen(false)}
                aria-label="Close filters"
              >
                ✕
              </button>
            </div>
          </div>

          <div className={styles.sidebarContent}>
            {/* 1. Category Filter */}
            {showCategoryFilter && (
              <div className={styles.filterSection}>
                <h4 className={styles.filterSectionTitle}>Collections & Universes</h4>
                <div className={styles.optionsList}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                    />
                    <span className={styles.customRadio} />
                    <span className={styles.optionLabel}>All Silhouettes</span>
                    <span className={styles.countPill}>{categoryCounts.all}</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={selectedCategory === 'evening-gowns'}
                      onChange={() => setSelectedCategory('evening-gowns')}
                    />
                    <span className={styles.customRadio} />
                    <span className={styles.optionLabel}>Evening Gowns</span>
                    <span className={styles.countPill}>{categoryCounts['evening-gowns']}</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={selectedCategory === 'silk-festive'}
                      onChange={() => setSelectedCategory('silk-festive')}
                    />
                    <span className={styles.customRadio} />
                    <span className={styles.optionLabel}>Silk & Festive</span>
                    <span className={styles.countPill}>{categoryCounts['silk-festive']}</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={selectedCategory === 'summer-maxi'}
                      onChange={() => setSelectedCategory('summer-maxi')}
                    />
                    <span className={styles.customRadio} />
                    <span className={styles.optionLabel}>Summer Maxi</span>
                    <span className={styles.countPill}>{categoryCounts['summer-maxi']}</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="categoryGroup"
                      checked={selectedCategory === 'cocktail-sparkle'}
                      onChange={() => setSelectedCategory('cocktail-sparkle')}
                    />
                    <span className={styles.customRadio} />
                    <span className={styles.optionLabel}>Cocktail Sparkle</span>
                    <span className={styles.countPill}>{categoryCounts['cocktail-sparkle']}</span>
                  </label>
                </div>
              </div>
            )}

            {/* 2. Price Range Filter */}
            <div className={styles.filterSection}>
              <h4 className={styles.filterSectionTitle}>Price Investment</h4>
              <div className={styles.optionsList}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="priceGroup"
                    checked={priceRange === 'all'}
                    onChange={() => setPriceRange('all')}
                  />
                  <span className={styles.customRadio} />
                  <span className={styles.optionLabel}>All Price Tiers</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="priceGroup"
                    checked={priceRange === 'under-300'}
                    onChange={() => setPriceRange('under-300')}
                  />
                  <span className={styles.customRadio} />
                  <span className={styles.optionLabel}>Under $300</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="priceGroup"
                    checked={priceRange === '300-450'}
                    onChange={() => setPriceRange('300-450')}
                  />
                  <span className={styles.customRadio} />
                  <span className={styles.optionLabel}>$300 – $450</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="priceGroup"
                    checked={priceRange === 'above-450'}
                    onChange={() => setPriceRange('above-450')}
                  />
                  <span className={styles.customRadio} />
                  <span className={styles.optionLabel}>Above $450 (Couture)</span>
                </label>
              </div>
            </div>

            {/* 3. Silhouette Sizes */}
            <div className={styles.filterSection}>
              <h4 className={styles.filterSectionTitle}>Silhouette Size</h4>
              <div className={styles.sizesGrid}>
                {ALL_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`${styles.sizePill} ${
                      selectedSizes.includes(size) ? styles.sizePillActive : ''
                    }`}
                    onClick={() => handleToggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Silk Shades / Colors */}
            <div className={styles.filterSection}>
              <h4 className={styles.filterSectionTitle}>Silk Tone & Shade</h4>
              <div className={styles.colorsList}>
                {COLOR_PALETTES.map((color) => {
                  const isActive = selectedColor === color.query;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      className={`${styles.colorItemBtn} ${isActive ? styles.colorItemActive : ''}`}
                      onClick={() => handleToggleColor(color.query)}
                    >
                      <span
                        className={styles.colorDot}
                        style={{
                          backgroundColor: color.hex,
                          boxShadow: isActive ? `0 0 8px ${color.hex}` : 'none'
                        }}
                      />
                      <span className={styles.colorLabel}>{color.name}</span>
                      {isActive && <span className={styles.colorCheck}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Signature Edition Tags */}
            <div className={styles.filterSection}>
              <h4 className={styles.filterSectionTitle}>Couture Editions</h4>
              <div className={styles.tagsPillList}>
                {SIGNATURE_TAGS.map((tag) => {
                  const isTagActive = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      className={`${styles.tagPillBtn} ${isTagActive ? styles.tagPillActive : ''}`}
                      onClick={() => handleToggleTag(tag)}
                    >
                      {isTagActive && <span>✓ </span>}
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* =========================================================================
            RIGHT MAIN: PRODUCT CATALOG & RESULTS GRID
            ========================================================================= */}
        <main className={styles.productCatalogMain}>
          {/* Top Control Bar: Search + Results Count + Sorting */}
          <div className={styles.catalogTopBar}>
            {/* Left: Count and Active Filter Pills */}
            <div className={styles.topBarLeft}>
              <div className={styles.resultsCounter}>
                Showing <strong>{filteredProducts.length}</strong> of{' '}
                <span>{baseProducts.length} Silhouettes</span>
              </div>

              {/* Active Filter Pills Strip */}
              {activeCount > 0 && (
                <div className={styles.activePillsStrip}>
                  {showCategoryFilter && selectedCategory !== 'all' && (
                    <span className={styles.activeChip}>
                      Collection: {selectedCategory.replace('-', ' ')}
                      <button onClick={() => setSelectedCategory('all')}>✕</button>
                    </span>
                  )}

                  {priceRange !== 'all' && (
                    <span className={styles.activeChip}>
                      Price: {priceRange}
                      <button onClick={() => setPriceRange('all')}>✕</button>
                    </span>
                  )}

                  {selectedSizes.map((sz) => (
                    <span key={sz} className={styles.activeChip}>
                      Size: {sz}
                      <button onClick={() => handleToggleSize(sz)}>✕</button>
                    </span>
                  ))}

                  {selectedColor && (
                    <span className={styles.activeChip}>
                      Color: {selectedColor}
                      <button onClick={() => setSelectedColor(null)}>✕</button>
                    </span>
                  )}

                  {selectedTag && (
                    <span className={styles.activeChip}>
                      Tag: {selectedTag}
                      <button onClick={() => setSelectedTag(null)}>✕</button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className={styles.activeChip}>
                      Keyword: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}>✕</button>
                    </span>
                  )}

                  <button className={styles.clearAllLink} onClick={resetAllFilters}>
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {/* Right: Search & Sort Dropdown */}
            <div className={styles.topBarRight}>
              {/* Live Search */}
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search silhouettes, fabric, embroidery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInputField}
                />
                {searchQuery && (
                  <button className={styles.clearSearchX} onClick={() => setSearchQuery('')}>
                    ✕
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className={styles.sortContainer}>
                <span className={styles.sortPrefix}>Sort:</span>
                <select
                  className={styles.sortDropdown}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated ★</option>
                  <option value="reviews">Most Reviewed</option>
                </select>
              </div>
            </div>
          </div>

          {/* ── Products Grid ── */}
          {filteredProducts.length === 0 ? (
            <div className={styles.emptyCatalogBox}>
              <span className={styles.emptyIcon}>✦</span>
              <h3>No Silhouettes Match Your Selection</h3>
              <p>
                Try widening your price range, clearing size filters, or resetting your search keywords.
              </p>
              <button className={styles.emptyResetBtn} onClick={resetAllFilters}>
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filteredProducts.map((item) => (
                <article
                  key={item.id}
                  className={styles.productCard}
                  onClick={() => navigate(`/product/${item.id}`)}
                  role="button"
                  tabIndex={0}
                >
                  {/* Media Frame */}
                  <div className={styles.mediaFrame}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.cardImage}
                      onError={(e) => {
                        e.currentTarget.src = '/hero-dress.jpg';
                      }}
                    />
                    <div className={styles.imageVignette} />

                    {/* Tag badge */}
                    <span className={styles.tagBadgePill}>{item.tag}</span>

                    {/* Price pill */}
                    <div className={styles.pricePill}>
                      <span className={styles.salePrice}>${item.price}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className={styles.origPrice}>${item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className={styles.cardBody}>
                    <div className={styles.categorySubLabel}>{item.category}</div>

                    <h3 className={styles.productCardTitle}>{item.name}</h3>

                    <p className={styles.productCardDesc}>{item.description}</p>

                    {/* Colors Swatches Bar */}
                    {item.colors && item.colors.length > 0 && (
                      <div className={styles.cardColorsRow}>
                        <span className={styles.colorsLabel}>Colors:</span>
                        <div className={styles.colorDotsStrip}>
                          {item.colors.slice(0, 3).map((col, cIdx) => (
                            <span
                              key={cIdx}
                              className={styles.miniColorDot}
                              style={{ backgroundColor: col.hex }}
                              title={col.name}
                            />
                          ))}
                          {item.colors.length > 3 && (
                            <span className={styles.moreColors}>+{item.colors.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Card Footer: Rating & CTA */}
                    <div className={styles.cardFooter}>
                      <span className={styles.ratingText}>
                        ★ {item.rating} ({item.reviews})
                      </span>
                      <span className={styles.viewLink}>
                        <span>View Details</span>
                        <span className={styles.linkArrow}>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
