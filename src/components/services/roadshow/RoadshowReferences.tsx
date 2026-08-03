import React from 'react';
import Image from 'next/image';
import './RoadshowReferences.css';

const RoadshowReferences = () => {
  const references = [
    { src: '/ROADSHOW/roadshow-1.jpg', alt: '方德 淘大商場' },
    { src: '/ROADSHOW/roadshow-2.jpg', alt: '牛牛 無限極' },
    { src: '/ROADSHOW/roadshow-3.jpg', alt: '牛牛 如心' },
    { src: '/ROADSHOW/roadshow-4.jpg', alt: '老虎 沙田廣場' },
    { src: '/ROADSHOW/roadshow-5.jpg', alt: '老虎 粉嶺中心' },
    { src: '/ROADSHOW/roadshow-6.jpg', alt: '牛牛 海港城' },
    { src: '/ROADSHOW/roadshow-7.jpg', alt: '富途牛牛 灣景滙' },
    { src: '/ROADSHOW/roadshow-8.jpg', alt: '啟德體育園富途牛牛' },
    { src: '/ROADSHOW/roadshow-9.jpg', alt: '牛牛 奧海城' },
    { src: '/ROADSHOW/roadshow-10.jpg', alt: '牛牛 第一城' },
    { src: '/ROADSHOW/roadshow-11.jpg', alt: '老虎 新港城' },
    { src: '/ROADSHOW/roadshow-12.jpg', alt: '荃新天地 富途牛牛' }
  ];

  return (
    <section className="roadshow-references">
      <div className="container">
        <h2 className="section-title">精選案例</h2>
        <div className="roadshow-references-grid">
          {references.map((ref, index) => (
            <div key={index} className="roadshow-reference-card">
              <div className="roadshow-reference-image">
                <Image 
                  src={ref.src} 
                  alt={ref.alt} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="roadshow-reference-overlay">
                <span>{ref.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadshowReferences;
