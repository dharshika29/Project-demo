import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

export default function Sale() {
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

      {/* ── Product Grid ── */}
      <section style={{ maxWidth: '1280px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '2rem'
        }}>
          {PRODUCTS.filter((p) => p.originalPrice && p.originalPrice > p.price).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(181, 114, 122, 0.3)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-lg)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#fca5a5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(181, 114, 122, 0.3)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.src = '/spotlight-dress.jpg';
                  }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: '#b5727a',
                  color: '#fff',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  Special Archive
                </span>

                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.4rem',
                  background: 'rgba(10, 13, 20, 0.85)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  backdropFilter: 'blur(8px)'
                }}>
                  <span style={{ color: 'var(--primary-light)', fontWeight: 700, fontSize: '0.85rem' }}>
                    ${item.price}
                  </span>
                  {item.originalPrice && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textDecoration: 'line-through' }}>
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
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
                  color: '#fca5a5',
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
                    color: '#fca5a5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    View Archive Piece →
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
