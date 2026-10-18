import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCatalogView from '../components/products/ProductCatalogView';

export default function Sale() {
  const saleProducts = PRODUCTS.filter((p) => p.originalPrice && p.originalPrice > p.price);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-primary)',
      paddingBottom: '5rem',
      paddingTop: '2rem'
    }}>
      <section style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
        <ProductCatalogView
          customProducts={saleProducts}
          showFilterSidebar={false}
          showCategoryFilter={false}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Collections', path: '/collections' },
            { label: 'Private Sale' }
          ]}
        />
      </section>
    </div>
  );
}
