import React, { useState } from 'react';
import { Sparkles, X, Heart, Star } from 'lucide-react';

export default function UniverseSection({ universeData }) {
  const [selectedStar, setSelectedStar] = useState(universeData?.stars?.[0] || null);

  const stars = universeData?.stars || [];

  return (
    <section
      id="universe"
      style={{
        backgroundColor: '#1E0E08',
        color: '#FFF9EF',
        padding: '6.5rem 1.75rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-muted-rose)',
              fontWeight: 700,
              marginBottom: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={14} />
            <span>CELESTIAL CONSTELLATION</span>
            <Sparkles size={14} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5.2vw, 3.8rem)',
              color: 'var(--color-cream)',
              fontWeight: 700,
              lineHeight: 1.15
            }}
          >
            {universeData.heading || 'Our Little Universe'}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
              color: 'var(--color-dusty-blush)',
              margin: '0.75rem auto 0 auto',
              maxWidth: '680px'
            }}
          >
            {universeData.subtitle || 'Different little moments. The same little world.'}
          </p>
        </div>

        {/* Constellation Canvas / Interactive Map */}
        <div
          className="constellation-container"
          style={{
            position: 'relative',
            width: '100%',
            height: '520px',
            backgroundColor: '#160a05',
            borderRadius: '20px',
            border: '1.5px solid rgba(201, 149, 141, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 80px rgba(0, 0, 0, 0.8)'
          }}
        >
          {/* Subtle Background Stars / Dust */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 90px 40px, #fbcfe8, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #eed, rgba(0,0,0,0))',
              backgroundSize: '240px 240px',
              opacity: 0.45,
              pointerEvents: 'none'
            }}
          />

          {/* SVG Constellation Connecting Lines */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 2
            }}
          >
            {/* Draw lines between sequential stars */}
            {stars.map((star, i) => {
              if (i === stars.length - 1) return null;
              const nextStar = stars[i + 1];
              return (
                <line
                  key={`line-${i}`}
                  x1={`${star.x}%`}
                  y1={`${star.y}%`}
                  x2={`${nextStar.x}%`}
                  y2={`${nextStar.y}%`}
                  stroke="rgba(235, 209, 193, 0.3)"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />
              );
            })}
            {/* Cross branch lines for natural constellation look */}
            {stars[1] && stars[5] && (
              <line
                x1={`${stars[1].x}%`}
                y1={`${stars[1].y}%`}
                x2={`${stars[5].x}%`}
                y2={`${stars[5].y}%`}
                stroke="rgba(201, 149, 141, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            )}
            {stars[2] && stars[6] && (
              <line
                x1={`${stars[2].x}%`}
                y1={`${stars[2].y}%`}
                x2={`${stars[6].x}%`}
                y2={`${stars[6].y}%`}
                stroke="rgba(201, 149, 141, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            )}
          </svg>

          {/* Clickable Star Nodes */}
          {stars.map((star) => {
            const isSelected = selectedStar?.id === star.id;
            return (
              <div
                key={star.id}
                className={`star-point ${isSelected ? 'active' : ''}`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`
                }}
                onClick={() => setSelectedStar(star)}
                role="button"
                tabIndex={0}
                aria-label={`Constellation star: ${star.label}`}
              >
                <div className="star-dot" />
                <div
                  className="star-label"
                  style={{
                    color: isSelected ? '#FFEAA7' : '#FFF9EF',
                    fontWeight: isSelected ? 700 : 500
                  }}
                >
                  {star.label}
                </div>
              </div>
            );
          })}

          {/* Active Memory Card Overlay inside Constellation */}
          {selectedStar && (
            <div
              className="modal-content-animated"
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                maxWidth: '380px',
                backgroundColor: 'rgba(56, 34, 25, 0.95)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '14px',
                padding: '1.5rem',
                border: '1.5px solid rgba(235, 209, 193, 0.4)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                zIndex: 25
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Star size={16} fill="#E5C07B" stroke="none" />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-dusty-blush)'
                    }}
                  >
                    {selectedStar.date || 'Star coordinate'}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedStar(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#EDE2D7',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'flex'
                  }}
                  aria-label="Close card"
                >
                  <X size={16} />
                </button>
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: 'var(--color-cream)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.2
                }}
              >
                {selectedStar.label}
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.08rem',
                  lineHeight: 1.6,
                  color: '#EDE2D7',
                  fontStyle: 'italic'
                }}
              >
                “{selectedStar.memory}”
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
