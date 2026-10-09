import React from 'react';

export default function StickyNote({
  children,
  rotation = 0,
  paperColor = 'yellow', // 'yellow', 'cream', 'blush', 'ivory'
  tapeColor = 'blush',
  showTape = true,
  className = '',
  style = {}
}) {
  const bgColors = {
    yellow: 'var(--color-sticky-yellow)',
    cream: 'var(--color-cream)',
    blush: 'var(--color-dusty-blush)',
    ivory: 'var(--color-warm-ivory)'
  };

  return (
    <div
      className={`sticky-note ${className}`}
      style={{
        backgroundColor: bgColors[paperColor] || bgColors.yellow,
        transform: `rotate(${rotation}deg)`,
        ...style
      }}
    >
      {showTape && <div className={`washi-tape tape-${tapeColor}`} />}
      {children}
    </div>
  );
}
