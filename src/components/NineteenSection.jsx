import React from 'react';
import ConfettiCanvas from './ConfettiCanvas';
import Polaroid from './Polaroid';

export default function NineteenSection({ nineteenData, onSelectMemory }) {
  return (
    <section
      id="nineteen"
      style={{
        backgroundColor: 'var(--color-dusty-blush)',
        position: 'relative',
        padding: '6rem 1.75rem',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      {/* Subtle falling confetti */}
      <ConfettiCanvas isContinuous={true} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Left Column: Enormous 19 with Overlapping Polaroid */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '340px'
          }}
        >
          {/* Enormous Serif 19 */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(10rem, 24vw, 17rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              color: 'rgba(56, 34, 25, 0.16)',
              userSelect: 'none',
              letterSpacing: '-0.05em'
            }}
          >
            {nineteenData.number || '19'}
          </div>

          {/* Overlapping Small Polaroid */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-40%, -50%)',
              width: '240px',
              zIndex: 3
            }}
          >
            <Polaroid
              imageUrl={nineteenData.polaroid?.imageUrl}
              caption={nineteenData.polaroid?.caption || 'chapter 19 ✧'}
              rotation={nineteenData.polaroid?.rotation || -4}
              tapeColor={nineteenData.polaroid?.tapeColor || 'cream'}
              showTape={true}
              onClick={() => onSelectMemory && onSelectMemory(nineteenData.polaroid)}
            />
          </div>
        </div>

        {/* Right Column: Quotes & Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-deep-chocolate)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {nineteenData.quote1 || '19 years of being unapologetically you.'}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.3vw, 1.6rem)',
              lineHeight: 1.6,
              color: 'var(--color-warm-brown-text)',
              fontStyle: 'italic'
            }}
          >
            {nineteenData.quote2 || 'And somehow, I got lucky enough to become part of some of those years.'}
          </p>

          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '2.1rem',
              color: 'var(--color-cocoa)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem'
            }}
          >
            <span>{nineteenData.quote3 || 'here’s to everything you’re becoming. ✧'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
