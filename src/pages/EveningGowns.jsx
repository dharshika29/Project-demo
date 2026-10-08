import React from 'react';
import { useNavigate } from 'react-router-dom';

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

      {/* ── Featured Centerpiece: Aurelia Royal Gown ── */}
      <section style={{ maxWidth: '1280px', margin: '3.5rem auto 0', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: 'var(--shadow-xl)'
        }}>
          {/* Left Side: Editorial Details */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(201, 168, 76, 0.1)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.9rem',
              borderRadius: '20px',
              marginBottom: '1.25rem'
            }}>
              <span>✦</span>
              <span>Signature Piece</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              The Aurelia Royal <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Gown</span>
            </h2>

            <p style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '1.75rem'
            }}>
              A masterpiece of heritage craftsmanship. Featuring an internal boned sweetheart corset
              bodice with dainty micro-straps, falling gracefully into a 24-kali flared sweep skirt.
              Hand-embroidered with authentic gold zardozi, gotta patti motifs, and micro-sequins.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(10, 13, 20, 0.6)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '0.85rem 1rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Hand Embroidery</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-light)', marginTop: '0.2rem' }}>180+ Atelier Hours</div>
              </div>

              <div style={{
                background: 'rgba(10, 13, 20, 0.6)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '0.85rem 1rem'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Fabric</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-light)', marginTop: '0.2rem' }}>Pure Mulberry Silk</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  color: '#0a0d14',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(201, 168, 76, 0.3)'
                }}
              >
                Inquire Bespoke Order
              </button>

              <button
                onClick={() => navigate('/collections')}
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Back to Collections
              </button>
            </div>
          </div>

          {/* Right Side: Clean High-Resolution Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              borderRadius: '20px',
              padding: '8px',
              background: 'linear-gradient(145deg, rgba(201, 168, 76, 0.45) 0%, rgba(20, 28, 43, 0.8) 100%)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
              maxWidth: '440px',
              width: '100%'
            }}>
              <img
                src="/evening-gown-showcase.png"
                alt="Aurelia Royal Evening Gown"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
