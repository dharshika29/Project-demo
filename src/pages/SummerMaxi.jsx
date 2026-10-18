import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

export default function SummerMaxi() {
  const navigate = useNavigate();
  const maxiProducts = PRODUCTS.filter((p) => p.categorySlug === 'summer-maxi');

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
            <span style={{ color: 'var(--text-secondary)' }}>Summer Maxi</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
            fontWeight: 600,
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Resort Riviera <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Summer Maxi</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Airy Italian linen, bias-cut mulberry silk slips, and breezy silhouettes tailored for sunlit galas.
          </p>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section style={{ maxWidth: '1280px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '2rem'
        }}>
          {maxiProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-lg)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src = '/hero-dress.jpg';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(10, 13, 20, 0.85)',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--primary-light)',
                  backdropFilter: 'blur(8px)'
                }}>
                  {item.tag}
                </span>

                <span style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'linear-gradient(135deg, #e8d19a 0%, #c9a84c 100%)',
                  color: '#0a0d14',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px'
                }}>
                  ${item.price}
                </span>
              </div>

              <div style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '0.4rem'
                }}>
                  {item.category}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  lineHeight: '1.35',
                  marginBottom: '0.6rem',
                  color: 'var(--text-primary)',
                  minHeight: '2.7rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.name}
                </h3>
                <p style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '1.25rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  flexGrow: 1
                }}>
                  {item.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '0.9rem',
                  marginTop: 'auto'
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    ★ {item.rating} ({item.reviews})
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--primary-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    View Silhouette →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
