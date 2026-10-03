import React from 'react';
import './ServicePhotoGrid.css';

export type ServicePhoto = {
  src: string;
  alt: string;
};

const ServicePhotoGrid = ({ photos }: { photos: ServicePhoto[] }) => {
  return (
    <div className="service-photo-grid">
      {photos.map((photo) => (
        <article key={photo.src} className="service-photo-card">
          <img
            className="service-photo-image"
            src={encodeURI(photo.src)}
            alt={photo.alt}
          />
          <div className="service-photo-overlay">
            <span>{photo.alt}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ServicePhotoGrid;
