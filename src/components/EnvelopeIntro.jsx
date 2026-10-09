import React, { useState } from 'react';
import { Heart, ArrowDown, MailOpen } from 'lucide-react';

export default function EnvelopeIntro({ introData, onOpenLetter, onSkipIntro }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      if (onOpenLetter) onOpenLetter();
      // Scroll into hero
      const hero = document.getElementById('hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  return (
    <section
      id="intro"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-dusty-blush)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.75rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      {/* Decorative background hearts */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '3rem',
          opacity: 0.15,
          userSelect: 'none'
        }}
      >
        🤎
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '7%',
          fontSize: '3.5rem',
          opacity: 0.15,
          userSelect: 'none'
        }}
      >
        ♡
      </div>

      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          zIndex: 2
        }}
      >
        {/* Left Column: Text & CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Small Label */}
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-cocoa)',
              backgroundColor: 'rgba(255, 249, 239, 0.65)',
              display: 'inline-flex',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              width: 'fit-content',
              border: '1px solid rgba(180, 155, 134, 0.3)'
            }}
          >
            {introData.badge || 'A LITTLE WORLD, JUST FOR BHAVASRI'}
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6vw, 4.4rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: 'var(--color-deep-chocolate)',
              letterSpacing: '-0.02em'
            }}
          >
            {introData.title || 'For my Babygirl 🤎'}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
              color: 'var(--color-warm-brown-text)',
              lineHeight: 1.3
            }}
          >
            {introData.subtitle || 'A tiny little world I made for you...'}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: 'var(--color-cocoa)',
              maxWidth: '460px',
              lineHeight: 1.6
            }}
          >
            {introData.letterPreview}
          </p>

          {/* Actions: Button & Skip Intro */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleOpen}
              className="btn-primary"
              style={{
                fontSize: '1.05rem',
                padding: '1.05rem 2.4rem',
                boxShadow: '0 8px 24px rgba(56, 34, 25, 0.3)'
              }}
            >
              <MailOpen size={20} />
              OPEN MY LETTER ♡
            </button>

            <button
              onClick={onSkipIntro}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--color-warm-brown-text)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-deep-chocolate)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-warm-brown-text)')}
            >
              Skip Intro ↓
            </button>
          </div>
        </div>

        {/* Right Column: Large Cream Envelope */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className={`envelope-wrapper ${isOpening ? 'envelope-opening' : ''}`}
            onClick={handleOpen}
            title="Click to open letter"
            style={{ cursor: 'pointer' }}
          >
            <div className="envelope-base">
              {/* Envelope Folds */}
              <div className="envelope-flaps">
                <div className="envelope-left-fold" />
                <div className="envelope-right-fold" />
                <div className="envelope-bottom-fold" />
              </div>

              {/* Number 19 Postage Stamp */}
              <div className="envelope-stamp">
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    color: 'var(--color-taupe)',
                    textTransform: 'uppercase'
                  }}
                >
                  POST
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-deep-chocolate)'
                  }}
                >
                  {introData.stampNumber || '19'}
                </div>
                <Heart size={10} fill="var(--color-muted-rose)" stroke="none" />
              </div>

              {/* Rose Heart Wax Seal */}
              <div className="envelope-seal">
                <Heart size={26} fill="#FFF9EF" stroke="none" />
              </div>

              {/* Subtle letter card peeking */}
              <div
                style={{
                  position: 'absolute',
                  top: isOpening ? '-60px' : '20px',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  backgroundColor: '#FFFDFB',
                  borderRadius: '6px',
                  boxShadow: '0 4px 15px rgba(56, 34, 25, 0.1)',
                  transition: 'top 0.5s ease',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                  opacity: isOpening ? 1 : 0.4
                }}
              >
                <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-cocoa)' }}>
                  For Chello ♡
                </span>
              </div>
            </div>
          </div>

          {/* Handwritten Caption below Envelope */}
          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.55rem',
              color: 'var(--color-warm-brown-text)',
              marginTop: '1.25rem',
              textAlign: 'center'
            }}
          >
            {introData.envelopeCaption || 'sealed with a little too much love ♡'}
          </div>
        </div>
      </div>
    </section>
  );
}
