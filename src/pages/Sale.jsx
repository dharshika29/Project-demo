import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCatalogView from '../components/products/ProductCatalogView';

export default function Sale() {
  const navigate = useNavigate();
  const saleProducts = PRODUCTS.filter((p) => p.originalPrice && p.originalPrice > p.price);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-primary)',
      paddingBottom: '5rem'
    }}>
      {/* ── Hero Banner ── */}
      <section style={{
        padding: '4.5rem 2rem 2.5rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(181, 114, 122, 0.15) 0%, transparent 70%)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem'
          }}>
            <span style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
            <span>/</span>
            <span style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => navigate('/collections')}>Collections</span>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Private Sale</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            fontWeight: 600,
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Privé Archive <span style={{ color: '#fca5a5', fontStyle: 'italic' }}>Sale</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 1.5rem',
            lineHeight: 1.65
          }}>
            Exclusive archival silhouettes available up to 40% off with promo code <strong>AURA40</strong>.
          </p>
        </div>
      </section>

      {/* ── Sale Product Catalog with Left Sidebar Filter ── */}
      <section style={{ maxWidth: '1320px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <ProductCatalogView
          customProducts={saleProducts}
          showCategoryFilter={true}
          filterTitle="Privé Archive Privilege Pieces"
          filterSubtitle="Rare archival haute-couture gowns with exclusive member discount pricing. Filter by category, silhouette, or budget."
        />
      </section>
    </div>
  );
}
