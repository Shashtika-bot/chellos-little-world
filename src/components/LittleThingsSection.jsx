import React from 'react';
import StickyNote from './StickyNote';
import { Heart } from 'lucide-react';

export default function LittleThingsSection({ notes = [] }) {
  return (
    <section
      id="little-things"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: '6.5rem 1.75rem',
        position: 'relative'
      }}
      className="paper-texture"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Section Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
            color: 'var(--color-deep-chocolate)',
            fontWeight: 700,
            lineHeight: 1.15
          }}
        >
          You Remember The Little Things.
        </h2>

        {/* Handwritten Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: 'var(--color-muted-rose)',
            margin: '0.85rem auto 4rem auto',
            maxWidth: '720px',
            lineHeight: 1.3
          }}
        >
          And that has always been one of my favourite things about you.
        </p>

        {/* Spacious 3-Column Grid of Paper Notes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem 2rem',
            alignItems: 'stretch'
          }}
        >
          {notes.map((note) => (
            <div
              key={note.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0.5rem'
              }}
            >
              <StickyNote
                rotation={note.rotation || 0}
                paperColor={note.paperColor || 'cream'}
                tapeColor="rose"
                showTape={true}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.75rem'
                }}
              >
                <Heart size={20} fill="var(--color-muted-rose)" stroke="none" style={{ marginBottom: '1rem', opacity: 0.7 }} />
                
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    color: 'var(--color-deep-chocolate)',
                    lineHeight: 1.45,
                    fontWeight: 600
                  }}
                >
                  “{note.text}”
                </p>

                {note.subtext && (
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-cocoa)',
                      marginTop: '0.75rem',
                      lineHeight: 1.5,
                      opacity: 0.85
                    }}
                  >
                    {note.subtext}
                  </p>
                )}
              </StickyNote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
