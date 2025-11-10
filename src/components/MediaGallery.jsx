import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function MediaGallery({ items }) {
  return (
    <div className="media-gallery">
      {items.map((item) => {
        if (item.type === 'image') {
          return (
            <section key={item.id} className="media-section">
              <img src={item.src} alt={item.alt} className="media-section__image" />
            </section>
          );
        }

        return (
          <section key={item.id} className="media-section">
            <div className="media-section__video">
              <YouTubeEmbed title={item.title} embedUrl={item.src} />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default MediaGallery;

