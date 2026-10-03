import React from 'react';
import ServicePhotoGrid from '@/components/services/shared/ServicePhotoGrid';
import './PrintingReferences.css';

const photos = [
  { src: '/專業印刷服務/森呼吸.jpg', alt: '森呼吸' },
  { src: '/專業印刷服務/Sunlife.jpg', alt: 'Sun Life' },
  { src: '/專業印刷服務/Sunlife-202607.jpg', alt: 'Sun Life 2026' },
  { src: '/專業印刷服務/富途牛牛.jpg', alt: '富途牛牛' },
  { src: '/專業印刷服務/GBA.jpeg', alt: 'GBA' },
  { src: '/專業印刷服務/怨靈禁地.jpeg', alt: '怨靈禁地' },
];

const PrintingReferences = () => {
  return (
    <section className="printing-references">
      <div className="container">
        <div className="printing-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <ServicePhotoGrid photos={photos} />
      </div>
    </section>
  );
};

export default PrintingReferences;
