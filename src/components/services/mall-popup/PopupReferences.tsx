import React from 'react';
import Image from 'next/image';
import './PopupReferences.css';

const PopupReferences = () => {
  const references = [
    { src: '/商場pop up/popup-1.jpeg', alt: '商場 POP-UP 案例 1' },
    { src: '/商場pop up/popup-2.jpeg', alt: '商場 POP-UP 案例 2' },
    { src: '/商場pop up/popup-3.jpeg', alt: '商場 POP-UP 案例 3' },
    { src: '/商場pop up/popup-4.jpeg', alt: '商場 POP-UP 案例 4' },
    { src: '/商場pop up/popup-5.jpeg', alt: '商場 POP-UP 案例 5' },
    { src: '/商場pop up/popup-6.jpeg', alt: '商場 POP-UP 案例 6' },
    { src: '/商場pop up/popup-7.jpeg', alt: '商場 POP-UP 案例 7' },
    { src: '/商場pop up/popup-8.jpeg', alt: '商場 POP-UP 案例 8' }
  ];

  return (
    <section className="popup-references">
      <div className="container">
        <h2 className="section-title">精選案例</h2>
        <div className="popup-references-grid">
          {references.map((ref, index) => (
            <div key={index} className="popup-reference-card">
              <div className="popup-reference-image">
                <Image 
                  src={ref.src} 
                  alt={ref.alt} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="popup-reference-overlay">
                <span>{ref.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopupReferences;