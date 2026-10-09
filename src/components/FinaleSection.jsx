import React from 'react';
import { Heart, Mail, Sparkles, Cake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinaleSection({ finaleData, onOpenLetter }) {
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#EBD1C1', '#C9958D', '#B49B86', '#FFF9EF', '#DFB15B']
      });
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="finale"
      style={{
        background: 'linear-gradient(180deg, var(--color-warm-ivory) 0%, var(--color-dusty-blush) 100%)',
        padding: '7rem 1.75rem 9rem 1.75rem',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      {/* Delicate floating background hearts */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '12%',
          fontSize: '2rem',
          opacity: 0.25,
          animation: 'float 6s ease-in-out infinite'
        }}
      >
        🤎
      </div>
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '14%',
          fontSize: '2.5rem',
          opacity: 0.2,
          animation: 'float 8s ease-in-out infinite'
        }}
      >
        ♡
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '18%',
          fontSize: '2.2rem',
          opacity: 0.2,
          animation: 'float 7s ease-in-out infinite'
        }}
      >
        ✧
      </div>

      <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Celebration Badge */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--color-cocoa)',
            backgroundColor: 'rgba(255, 249, 239, 0.75)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.3rem',
            borderRadius: '9999px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(180, 155, 134, 0.3)'
          }}
        >
          <Sparkles size={16} color="var(--color-muted-rose)" />
          <span>CHAPTER NINETEEN BEGINS</span>
          <Sparkles size={16} color="var(--color-muted-rose)" />
        </div>

        {/* Oversized Birthday Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 6.5vw, 4.8rem)',
            color: 'var(--color-deep-chocolate)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem'
          }}
        >
          {finaleData.heading || 'Happy 19th Birthday, Chello 🤎'}
        </h2>

        {/* Heartfelt Letter Preview Card */}
        <div
          style={{
            backgroundColor: '#FFFDFB',
            borderRadius: '16px',
            padding: '3rem 2.5rem',
            boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(180, 155, 134, 0.2)',
            margin: '2rem auto 2.5rem auto',
            border: '10px solid #F6EEE2',
            textAlign: 'left',
            position: 'relative'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.4rem',
              color: 'var(--color-muted-rose)',
              marginBottom: '1rem'
            }}
          >
            A final birthday note...
          </div>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              lineHeight: 1.8,
              color: 'var(--color-deep-chocolate)',
              fontStyle: 'italic',
              marginBottom: '1.5rem'
            }}
          >
            “{finaleData.previewText ||
              "Thank you for being my person. Thank you for your warmth, your chaotic energy, your loyalty, and every single second of laughter we've shared so far. I am endlessly grateful for the friendship we share."}”
          </p>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              lineHeight: 1.7,
              color: 'var(--color-warm-brown-text)'
            }}
          >
            Here's to celebrating the wonderful, radiant soul you are, and every dream you are going to conquer in year nineteen.
          </p>

          {/* Action Button: Read My Letter ♡ */}
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <button
              onClick={onOpenLetter}
              className="btn-primary"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 2.2rem'
              }}
            >
              <Mail size={18} />
              Read My Letter ♡
            </button>

            <button
              onClick={triggerCelebration}
              className="btn-secondary"
              style={{
                fontSize: '0.95rem',
                padding: '0.9rem 1.8rem'
              }}
            >
              <Cake size={18} />
              Celebrate Chello! ✧
            </button>
          </div>
        </div>

        {/* Closing Signature */}
        <div style={{ marginTop: '3.5rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: 'var(--color-cocoa)',
              fontStyle: 'italic',
              marginBottom: '0.35rem'
            }}
          >
            always & forever,
          </div>
          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '2.8rem',
              color: 'var(--color-deep-chocolate)',
              fontWeight: 700
            }}
          >
            always your person ♡
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
      `}</style>
    </section>
  );
}
