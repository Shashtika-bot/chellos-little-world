import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export default function Polaroid({
  imageUrl,
  caption,
  rotation = 0,
  tapeColor = 'blush',
  showTape = true,
  onClick,
  className = '',
  aspectRatio = '1 / 1',
  maxWidth = '300px'
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`polaroid-card ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        maxWidth: maxWidth,
        width: '100%'
      }}
      onClick={onClick}
    >
      {showTape && <div className={`washi-tape tape-${tapeColor}`} />}

      <div className="polaroid-image-wrap" style={{ aspectRatio }}>
        {!imgError && imageUrl ? (
          <img
            src={imageUrl}
            alt={caption || 'Scrapbook memory'}
            className="polaroid-image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#EBD1C1',
              color: '#795B4D',
              padding: '1rem',
              textAlign: 'center'
            }}
          >
            <Camera size={36} strokeWidth={1.5} style={{ marginBottom: '8px', opacity: 0.8 }} />
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem' }}>
              {caption || 'Memory ♡'}
            </span>
          </div>
        )}
      </div>

      {caption && (
        <div className="polaroid-caption">
          {caption}
        </div>
      )}
    </div>
  );
}
