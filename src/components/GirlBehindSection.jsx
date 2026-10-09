import React from 'react';
import Polaroid from './Polaroid';

export default function GirlBehindSection({ data, onSelectMemory }) {
  return (
    <section
      id="girl-behind"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: '6rem 1.75rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Large Tilted Polaroid */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Polaroid
            imageUrl={data.polaroid?.imageUrl}
            caption={data.polaroid?.caption || 'that radiant smile ♡'}
            rotation={data.polaroid?.rotation || 3}
            tapeColor={data.polaroid?.tapeColor || 'blush'}
            showTape={true}
            maxWidth="360px"
            onClick={() => onSelectMemory && onSelectMemory(data.polaroid)}
          />
        </div>

        {/* Right Column: Heading, Quote, and Handwritten Personality Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--color-deep-chocolate)',
              fontWeight: 700,
              lineHeight: 1.15
            }}
          >
            {data.heading || 'The girl behind all my favourite memories.'}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
              lineHeight: 1.7,
              color: 'var(--color-warm-brown-text)',
              fontStyle: 'italic'
            }}
          >
            “{data.body || 'Some people walk into your life and become memories. You somehow became part of the way I remember an entire chapter of mine.'}”
          </p>

          {/* Personality Labels / Stickers */}
          <div style={{ marginTop: '0.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-taupe)',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              Who you are to me:
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem'
              }}
            >
              {data.traits?.map((trait, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: trait.bg || '#FFF9EF',
                    color: trait.color || '#382219',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.45rem',
                    padding: '0.45rem 1.25rem',
                    borderRadius: '8px',
                    transform: `rotate(${trait.rotation || 0}deg)`,
                    boxShadow: '0 4px 12px rgba(56, 34, 25, 0.08)',
                    border: '1px solid rgba(180, 155, 134, 0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'transform 0.25s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = `rotate(0deg) scale(1.08)`)}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${trait.rotation || 0}deg)`)}
                >
                  <span>{trait.text}</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>♡</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
