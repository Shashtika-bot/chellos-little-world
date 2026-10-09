import React from 'react';
import { Heart } from 'lucide-react';

export default function GratitudeSection({ gratitudeNotes = [] }) {
  const getCardBg = (color) => {
    switch (color) {
      case 'blush':
        return 'var(--color-dusty-blush)';
      case 'yellow':
        return 'var(--color-sticky-yellow)';
      case 'cream':
      default:
        return 'var(--color-cream)';
    }
  };

  return (
    <section
      id="gratitude"
      style={{
        backgroundColor: 'var(--color-warm-ivory)',
        padding: '6.5rem 1.75rem',
        position: 'relative'
      }}
      className="paper-texture"
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--color-muted-rose)',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}
        >
          A HEART OVERFLOWING
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5.2vw, 3.8rem)',
            color: 'var(--color-deep-chocolate)',
            fontWeight: 700,
            lineHeight: 1.15
          }}
        >
          Things I Will Always Be Grateful For
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.5rem, 2.8vw, 1.95rem)',
            color: 'var(--color-cocoa)',
            margin: '0.75rem auto 3.75rem auto',
            maxWidth: '680px'
          }}
        >
          Twelve small treasures of our friendship that mean everything to me ♡
        </p>

        {/* 12-Card Scrapbook Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {gratitudeNotes.map((item, index) => {
            const rotation = ((index % 5) - 2) * 1.2;
            const bg = getCardBg(item.color);

            return (
              <div
                key={item.id || index}
                style={{
                  backgroundColor: bg,
                  borderRadius: '12px',
                  padding: '1.75rem 1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(180, 155, 134, 0.25)',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  cursor: 'default',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.zIndex = '5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${rotation}deg)`;
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.zIndex = '1';
                }}
              >
                {/* Subtle Washi Tape in corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '25px',
                    width: '45px',
                    height: '16px',
                    backgroundColor: 'rgba(201, 149, 141, 0.65)',
                    transform: 'rotate(2deg)',
                    borderLeft: '2px dashed rgba(255, 255, 255, 0.4)',
                    borderRight: '2px dashed rgba(255, 255, 255, 0.4)'
                  }}
                />

                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-taupe)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      #0{index + 1}
                    </span>
                    <Heart size={16} fill="var(--color-muted-rose)" stroke="none" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-handwritten)',
                      fontSize: '1.85rem',
                      color: 'var(--color-deep-chocolate)',
                      lineHeight: 1.2,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      lineHeight: 1.5,
                      color: 'var(--color-warm-brown-text)',
                      fontStyle: 'italic'
                    }}
                  >
                    {item.note}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px dashed rgba(75, 48, 37, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.15rem',
                    color: 'var(--color-cocoa)'
                  }}
                >
                  thank you ♡
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
