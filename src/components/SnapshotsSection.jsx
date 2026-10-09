import React from 'react';
import Polaroid from './Polaroid';
import FilmStrip from './FilmStrip';
import { Camera, Sparkles } from 'lucide-react';

export default function SnapshotsSection({ snapshots = [], onSelectMemory }) {
  const filmStripItems = [
    { id: 'f2-1', text: 'forever captured ♡', icon: 'camera' },
    { id: 'f2-2', text: 'every little second ♡', icon: 'heart' },
    { id: 'f2-3', text: 'unfiltered memories ♡', icon: 'sparkles' },
    { id: 'f2-4', text: 'our little story ♡', icon: 'film' }
  ];

  return (
    <section
      id="snapshots"
      style={{
        backgroundColor: 'var(--color-warm-ivory)',
        paddingTop: '6rem',
        paddingBottom: '0',
        position: 'relative'
      }}
      className="paper-texture"
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.75rem', textAlign: 'center' }}>
        {/* Section Header */}
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
          CHAPTER ARCHIVE
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            color: 'var(--color-deep-chocolate)',
            fontWeight: 700,
            lineHeight: 1.15
          }}
        >
          Snapshots I Refuse To Forget
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            color: 'var(--color-cocoa)',
            maxWidth: '620px',
            margin: '0.5rem auto 3.5rem auto'
          }}
        >
          Click any snapshot to unpack the memory locked inside ♡
        </p>

        {/* Irregular Scrapbook Collage Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '2.5rem 2rem',
            paddingBottom: '4rem'
          }}
        >
          {snapshots.map((item, index) => (
            <div
              key={item.id || index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0.5rem'
              }}
            >
              <Polaroid
                imageUrl={item.imageUrl}
                caption={item.caption || item.title}
                rotation={item.rotation || 0}
                tapeColor={item.tapeColor || 'blush'}
                showTape={true}
                maxWidth="280px"
                onClick={() => onSelectMemory(item, index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Film Strip Divider Underneath */}
      <FilmStrip items={filmStripItems} />
    </section>
  );
}
