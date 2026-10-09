import React, { useState } from 'react';
import StickyNote from './StickyNote';
import Polaroid from './Polaroid';
import {
  Film,
  Music2,
  Camera,
  MessageCircle,
  Moon,
  Home,
  Coffee,
  Zap,
  HeartHandshake,
  Gift,
  Sparkles
} from 'lucide-react';

const iconMap = {
  film: Film,
  music: Music2,
  camera: Camera,
  'message-circle': MessageCircle,
  moon: Moon,
  home: Home,
  coffee: Coffee,
  zap: Zap,
  'heart-handshake': HeartHandshake,
  gift: Gift,
  sparkle: Sparkles
};

export default function ChaosSection({ categories = [], onSelectMemory }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || null);

  return (
    <section
      id="chaos"
      style={{
        backgroundColor: 'var(--color-warm-ivory)',
        padding: '6.5rem 1.75rem',
        position: 'relative'
      }}
      className="paper-texture"
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            OUR SCRAPBOOK ARCHIVE
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
            A Little Bit Of Our Chaos
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(1.5rem, 2.8vw, 1.95rem)',
              color: 'var(--color-cocoa)',
              margin: '0.75rem auto 0 auto',
              maxWidth: '680px'
            }}
          >
            Pick a chapter below to unlock the unhinged memory attached to it ♡
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left: Loose Grid of Illustrated Category Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignContent: 'flex-start'
            }}
          >
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory?.id === cat.id;
              const IconComp = iconMap[cat.icon] || Sparkles;
              const tilt = ((idx % 5) - 2) * 1.5;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isSelected ? 'var(--color-deep-chocolate)' : 'var(--color-cream)',
                    color: isSelected ? 'var(--color-cream)' : 'var(--color-warm-brown-text)',
                    border: `1.5px solid ${isSelected ? 'var(--color-deep-chocolate)' : 'rgba(180, 155, 134, 0.4)'}`,
                    borderRadius: '16px',
                    padding: '0.9rem 1.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    cursor: 'pointer',
                    transform: `rotate(${tilt}deg)`,
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'var(--color-dusty-blush)';
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'var(--color-cream)';
                      e.currentTarget.style.transform = `rotate(${tilt}deg)`;
                    }
                  }}
                >
                  <IconComp
                    size={20}
                    color={isSelected ? 'var(--color-dusty-blush)' : 'var(--color-muted-rose)'}
                    strokeWidth={1.8}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-handwritten)',
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      lineHeight: 1
                    }}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Yellow Sticky Note Panel + Polaroid Below */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
            {selectedCategory && (
              <>
                <StickyNote
                  rotation={-1.5}
                  paperColor="yellow"
                  tapeColor="rose"
                  showTape={true}
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    padding: '2.25rem 2rem',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-cocoa)',
                      fontWeight: 700,
                      marginBottom: '0.5rem'
                    }}
                  >
                    Chapter: {selectedCategory.name}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-handwritten)',
                      fontSize: '2.1rem',
                      color: 'var(--color-deep-chocolate)',
                      lineHeight: 1.2,
                      marginBottom: '1rem'
                    }}
                  >
                    {selectedCategory.noteTitle}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      lineHeight: 1.7,
                      color: 'var(--color-warm-brown-text)',
                      fontStyle: 'italic'
                    }}
                  >
                    “{selectedCategory.noteMemory}”
                  </p>
                </StickyNote>

                {/* Polaroid Below Sticky Note */}
                <div style={{ width: '100%', maxWidth: '340px' }}>
                  <Polaroid
                    imageUrl={selectedCategory.polaroidImage}
                    caption={selectedCategory.polaroidCaption}
                    rotation={2.5}
                    tapeColor="taupe"
                    showTape={true}
                    onClick={() =>
                      onSelectMemory &&
                      onSelectMemory({
                        title: selectedCategory.noteTitle,
                        caption: selectedCategory.polaroidCaption,
                        imageUrl: selectedCategory.polaroidImage,
                        description: selectedCategory.noteMemory
                      })
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
