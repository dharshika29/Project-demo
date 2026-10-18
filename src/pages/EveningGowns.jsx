import React from 'react';
import ProductCatalogView from '../components/products/ProductCatalogView';

export default function EveningGowns() {
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
          initialCategory="evening-gowns"
          showCategoryFilter={true}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'Collections', path: '/collections' },
            { label: 'Evening Gowns' }
          ]}
        />
      </section>
    </div>
  );
}
