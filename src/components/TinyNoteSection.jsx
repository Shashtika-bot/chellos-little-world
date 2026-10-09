import React from 'react';
import StickyNote from './StickyNote';
import { Heart } from 'lucide-react';

export default function TinyNoteSection({ data }) {
  return (
    <section
      id="tiny-note"
      style={{
        backgroundColor: 'var(--color-dusty-blush)',
        padding: '6.5rem 1.75rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Large Yellow Sticky Note */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StickyNote
            rotation={-3}
            paperColor="yellow"
            tapeColor="taupe"
            showTape={true}
            style={{
              maxWidth: '380px',
              width: '100%',
              minHeight: '280px',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              boxShadow: '0 16px 36px rgba(56, 34, 25, 0.16)'
            }}
          >
            <Heart size={26} fill="var(--color-muted-rose)" stroke="none" style={{ marginBottom: '1.25rem' }} />
            
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                color: 'var(--color-deep-chocolate)',
                lineHeight: 1.3,
                fontWeight: 600
              }}
            >
              “{data.stickyText || 'hey beautiful, you look cute today ♡'}”
            </p>
          </StickyNote>
        </div>

        {/* Right Column: Quotes with Oversized Serif "I still have it." */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 2.6vw, 1.85rem)',
              color: 'var(--color-warm-brown-text)',
              fontStyle: 'italic',
              lineHeight: 1.4
            }}
          >
            {data.line1 || 'You probably thought this was just a tiny note.'}
          </p>

          {/* Oversized Serif Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.4rem, 7vw, 5.2rem)',
              color: 'var(--color-deep-chocolate)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: '0.5rem 0'
            }}
          >
            {data.bigText || 'I still have it.'}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(2rem, 3.8vw, 2.6rem)',
              color: 'var(--color-cocoa)',
              lineHeight: 1.2
            }}
          >
            {data.line2 || 'Of course I kept it.'}
          </p>

          {data.reflection && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'var(--color-warm-brown-text)',
                marginTop: '1rem',
                lineHeight: 1.6,
                opacity: 0.9,
                maxWidth: '480px'
              }}
            >
              {data.reflection}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
