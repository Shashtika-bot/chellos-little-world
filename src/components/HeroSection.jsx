import React from 'react';
import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import Polaroid from './Polaroid';
import MusicPlayer from './MusicPlayer';
import FilmStrip from './FilmStrip';

export default function HeroSection({ heroData, onOpenSurprise, onSelectMemory }) {
  const handleScrollDown = () => {
    const nextSec = document.getElementById('nineteen');
    if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--color-warm-ivory)',
        paddingTop: '4.5rem',
        paddingBottom: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="paper-texture"
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.75rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Headings & Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.6rem',
              color: 'var(--color-muted-rose)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>a heartfelt milestone</span>
            <Sparkles size={18} />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 6.5vw, 4.6rem)',
              lineHeight: 1.08,
              fontWeight: 700,
              color: 'var(--color-deep-chocolate)',
              letterSpacing: '-0.02em'
            }}
          >
            {heroData.heading || 'Happy 19th Birthday, Chello 🤎'}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
              lineHeight: 1.5,
              color: 'var(--color-warm-brown-text)',
              fontStyle: 'italic',
              maxWidth: '520px'
            }}
          >
            “{heroData.supportingMessage || 'To my Pattu, my Wifey, my Babygirl — and one of the hardest people in the world to forget.'}”
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleScrollDown}
              className="btn-primary"
            >
              <ArrowDown size={18} />
              {heroData.exploreBtnText || 'Explore Our Little World ↓'}
            </button>

            <button
              onClick={onOpenSurprise}
              className="btn-secondary"
            >
              <Heart size={18} fill="var(--color-muted-rose)" stroke="none" />
              {heroData.surpriseBtnText || 'A Little Surprise ♡'}
            </button>
          </div>
        </div>

        {/* Right Column: Overlapping Tilted Polaroids */}
        <div
          style={{
            position: 'relative',
            minHeight: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {heroData.polaroids?.map((polaroid, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={polaroid.id || index}
                style={{
                  position: isFirst ? 'relative' : 'absolute',
                  top: isFirst ? '0' : '50px',
                  right: isFirst ? 'auto' : '15px',
                  zIndex: isFirst ? 2 : 3,
                  width: '280px'
                }}
              >
                <Polaroid
                  imageUrl={polaroid.imageUrl}
                  caption={polaroid.caption}
                  rotation={polaroid.rotation}
                  tapeColor={polaroid.tapeColor}
                  showTape={true}
                  onClick={() => onSelectMemory && onSelectMemory(polaroid)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Music Player & "Keep scrolling" area */}
      <div
        style={{
          maxWidth: '800px',
          margin: '4rem auto 3rem auto',
          padding: '0 1.5rem',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.85rem',
            color: 'var(--color-cocoa)',
            marginBottom: '1rem'
          }}
        >
          {heroData.scrollCaption || 'Keep scrolling, pretty girl.'}
        </p>

        <MusicPlayer musicData={heroData.music} />
      </div>

      {/* 4-Panel Dark Film Strip Separator */}
      <div style={{ marginTop: '2.5rem' }}>
        <FilmStrip items={heroData.filmStrip} />
      </div>
    </section>
  );
}
