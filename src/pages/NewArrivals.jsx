import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCatalogView from '../components/products/ProductCatalogView';

export default function NewArrivals() {
  const navigate = useNavigate();

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
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201, 168, 76, 0.12) 0%, transparent 70%)',
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
            <span style={{ color: 'var(--text-secondary)' }}>New Arrivals</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            fontWeight: 600,
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Runway Edit 2026 <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>New Arrivals</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            The newest drops directly from international runways and atelier debuts.
          </p>
        </div>
      </section>

      {/* ── New Arrivals Product Catalog with Left Sidebar Filter ── */}
      <section style={{ maxWidth: '1320px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <ProductCatalogView
          initialCategory="all"
          showCategoryFilter={true}
          filterTitle="All Runway New Arrivals"
          filterSubtitle="Explore our fresh 2026 atelier additions with real-time left-side filters."
        />
      </section>
    </div>
  );
}
