import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Eye,
  Shield,
  Compass,
  Smile,
  Sun,
  Bookmark,
  Flower2,
  Gem,
  RotateCw
} from 'lucide-react';

const iconComponents = {
  sparkles: Sparkles,
  heart: Heart,
  eye: Eye,
  shield: Shield,
  compass: Compass,
  smile: Smile,
  sun: Sun,
  bookmark: Bookmark,
  flower: Flower2,
  gem: Gem
};

export default function FlipCardsSection({ cards = [] }) {
  // Set to keep track of which cards are flipped
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="flip-cards"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: '6.5rem 1.75rem',
        position: 'relative'
      }}
      className="paper-texture"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
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
          TEN PIECES OF YOUR ESSENCE
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
          Things About You That I Adore
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
          Click or tap any card to reveal the heartfelt reason why ♡
        </p>

        {/* 2-Column Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {cards.map((card) => {
            const isFlipped = !!flippedCards[card.id];
            const IconComp = iconComponents[card.icon] || Sparkles;

            return (
              <div
                key={card.id}
                className="flip-card-wrapper"
                onClick={() => toggleFlip(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(card.id);
                  }
                }}
                aria-label={`${card.trait}: ${isFlipped ? 'Flipped' : 'Click to flip'}`}
              >
                <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  {/* Front Side: Dark Chocolate with Delicate Gold Icon & Personality Trait */}
                  <div className="flip-card-front">
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        color: 'var(--color-dusty-blush)',
                        opacity: 0.6
                      }}
                    >
                      <RotateCw size={16} />
                    </div>

                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(235, 209, 193, 0.15)',
                        border: '1px solid rgba(235, 209, 193, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E5C07B', // delicate gold
                        marginBottom: '1rem'
                      }}
                    >
                      <IconComp size={26} strokeWidth={1.8} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Heart size={16} fill="var(--color-muted-rose)" stroke="none" />
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '2.1rem',
                          color: 'var(--color-cream)',
                          fontWeight: 700,
                          letterSpacing: '0.02em'
                        }}
                      >
                        {card.trait}
                      </h3>
                      <Heart size={16} fill="var(--color-muted-rose)" stroke="none" />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-handwritten)',
                        fontSize: '1.25rem',
                        color: 'var(--color-dusty-blush)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      tap to flip ✧
                    </span>
                  </div>

                  {/* Back Side: Cream-colored with Warm Brown Text & Description */}
                  <div className="flip-card-back">
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        color: 'var(--color-muted-rose)',
                        opacity: 0.7
                      }}
                    >
                      <RotateCw size={16} />
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--color-muted-rose)',
                        fontWeight: 700,
                        marginBottom: '0.75rem'
                      }}
                    >
                      {card.trait}
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        color: 'var(--color-deep-chocolate)',
                        lineHeight: 1.5,
                        fontWeight: 600,
                        fontStyle: 'italic',
                        padding: '0 0.5rem'
                      }}
                    >
                      “{card.backDescription}”
                    </p>

                    <div
                      style={{
                        marginTop: '1rem',
                        fontFamily: 'var(--font-handwritten)',
                        fontSize: '1.2rem',
                        color: 'var(--color-cocoa)'
                      }}
                    >
                      with all my love ♡
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
