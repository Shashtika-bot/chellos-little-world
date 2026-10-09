import React from 'react';
import Polaroid from './Polaroid';
import { Heart } from 'lucide-react';

export default function MemoriesWovenSection({ data, onSelectMemory }) {
  return (
    <section
      id="woven-in"
      style={{
        backgroundColor: 'var(--color-deep-chocolate)',
        color: 'var(--color-cream)',
        padding: '7rem 1.75rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative delicate stars */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          color: 'var(--color-muted-rose)',
          opacity: 0.25,
          fontSize: '2rem'
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          color: 'var(--color-dusty-blush)',
          opacity: 0.25,
          fontSize: '2.5rem'
        }}
      >
        ✧
      </div>

      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr minmax(280px, 2fr) 1fr',
          gap: '2.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
        className="woven-grid"
      >
        {/* Left Tilted Polaroid */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Polaroid
            imageUrl={data.polaroidLeft?.imageUrl}
            caption={data.polaroidLeft?.caption}
            rotation={data.polaroidLeft?.rotation || -6}
            tapeColor="blush"
            showTape={true}
            maxWidth="260px"
            onClick={() => onSelectMemory && onSelectMemory(data.polaroidLeft)}
          />
        </div>

        {/* Center: Large Message */}
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Heart size={20} fill="var(--color-muted-rose)" stroke="none" />
            <Heart size={24} fill="var(--color-dusty-blush)" stroke="none" />
            <Heart size={20} fill="var(--color-muted-rose)" stroke="none" />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              lineHeight: 1.25,
              fontWeight: 700,
              color: 'var(--color-cream)',
              marginBottom: '1.75rem'
            }}
          >
            {data.line1 || 'Some people become memories.'}
            <br />
            <span style={{ color: 'var(--color-dusty-blush)', fontStyle: 'italic' }}>
              {data.line2 || 'You became part of mine.'}
            </span>
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)',
              color: 'var(--color-muted-rose)',
              letterSpacing: '0.02em'
            }}
          >
            {data.handwritten || 'not just remembered. woven in.'}
          </div>
        </div>

        {/* Right Tilted Polaroid */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Polaroid
            imageUrl={data.polaroidRight?.imageUrl}
            caption={data.polaroidRight?.caption}
            rotation={data.polaroidRight?.rotation || 5}
            tapeColor="taupe"
            showTape={true}
            maxWidth="260px"
            onClick={() => onSelectMemory && onSelectMemory(data.polaroidRight)}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .woven-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
