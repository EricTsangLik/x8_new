import React from 'react';
import Image from 'next/image';
import './StoreRenovationReferences.css';

const references = [
  {
    src: '/店鋪裝修工程/renovation-1.jpeg',
    alt: '店舖裝修工程案例',
  },
  {
    src: '/店鋪裝修工程/renovation-2.jpeg',
    alt: '商業空間規劃案例',
  },
  {
    src: '/店鋪裝修工程/renovation-3.jpeg',
    alt: '店舖施工交付案例',
  },
];

const StoreRenovationReferences = () => {
  return (
    <section className="store-renovation-references">
      <div className="container">
        <div className="store-renovation-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="store-renovation-references-grid">
          {references.map((ref) => (
            <div key={ref.src} className="store-renovation-reference-card">
              <div className="store-renovation-reference-image">
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="store-renovation-reference-overlay">
                <span>{ref.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreRenovationReferences;
