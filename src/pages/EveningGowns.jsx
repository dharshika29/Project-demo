import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCatalogView from '../components/products/ProductCatalogView';

export default function EveningGowns() {
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
            <span style={{ color: 'var(--text-secondary)' }}>Evening Gowns</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            fontWeight: 600,
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Haute Couture <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Evening Gowns</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Sculptural silhouettes, royal hand-embroidered Banarasi weaves, and red-carpet gala gowns
            crafted with generational precision.
          </p>
        </div>
      </section>



      {/* ── Evening Gowns Product Catalog with Left Sidebar Filter ── */}
      <section style={{ maxWidth: '1320px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <ProductCatalogView
          initialCategory="evening-gowns"
          showCategoryFilter={true}
          filterTitle="All Evening Gowns Silhouettes"
          filterSubtitle="Click on any couture creation to inspect embroidery specifications, fabric weave, and custom measurements."
        />
      </section>
    </div>
  );
}
