import React from 'react';
import { Video, Heart, Sparkles, Sun, Star, Film } from 'lucide-react';

const iconMap = {
  video: Video,
  heart: Heart,
  sparkles: Sparkles,
  sun: Sun,
  star: Star,
  film: Film
};

export default function FilmStrip({ items = [] }) {
  // Generates repeating sprocket perforations
  const sprockets = Array.from({ length: 32 });

  return (
    <div className="film-strip-divider">
      {/* Top Perforations */}
      <div className="film-sprockets" aria-hidden="true">
        {sprockets.map((_, i) => (
          <div key={`top-${i}`} className="sprocket-hole" />
        ))}
      </div>

      {/* Film frames / cells */}
      <div className="film-strip-track">
        {items.map((item, index) => {
          const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Sparkles;
          return (
            <div key={item.id || index} className="film-cell">
              <IconComponent size={20} color="var(--color-muted-rose)" strokeWidth={1.8} />
              <span>{item.text || item}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Perforations */}
      <div className="film-sprockets" style={{ marginTop: '0.5rem', marginBottom: 0 }} aria-hidden="true">
        {sprockets.map((_, i) => (
          <div key={`bottom-${i}`} className="sprocket-hole" />
        ))}
      </div>
    </div>
  );
}
