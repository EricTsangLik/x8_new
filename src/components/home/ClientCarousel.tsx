import React from 'react';
import Image from 'next/image';
import './ClientCarousel.css';

const ClientCarousel = () => {
  const clients = [
    { name: 'Colliers', logo: '/client-logo/Colliers_logo.svg.webp' },
    { name: 'FOSUN Wealth', logo: '/client-logo/Fosun Wealth Logo.png' },
    { name: 'HKBA', logo: '/client-logo/HKBALogo.png' },
    { name: 'Tiger Brokers', logo: '/client-logo/Tiger Logo.png' },
    { name: 'Webull', logo: '/client-logo/Webull_Logo.png' },
    { name: 'China Life', logo: '/client-logo/China life Logo.png' },
    { name: 'HKU', logo: '/client-logo/university-of-hong-kong-logo-png_seeklogo-456366.png' },
    { name: 'Forthright', logo: '/client-logo/medium_forthright_logo_af267c1c7b.png' },
    { name: 'Huasheng Securities', logo: '/client-logo/華盛証券 logo.png' },
    { name: 'Long Bridge', logo: '/client-logo/Long Bridge Logo.png' },
    { name: 'Sun Life', logo: '/client-logo/Sunlife Logo.png' },
    { name: 'Garden', logo: '/client-logo/Garden Logo.png' },
    { name: 'EdUHK', logo: '/client-logo/Edu U Logo.png' },
    { name: 'Stanford Swim School', logo: '/client-logo/Stanford logo.png' },
    { name: 'Client 9', logo: '/client-logo/1c0799dff2946808b0f5d870492c56be.png' },
    { name: 'Client 10', logo: '/client-logo/261z3.webp' },
    { name: 'Client 11', logo: '/client-logo/Group 1567@2x.png' },
    { name: 'Client 12', logo: '/client-logo/LOGO_Logo.jpg' },
  ];

  return (
    <section className="client-carousel">
      <div className="container carousel-container">
        <div className="carousel-title">我們的客戶</div>
        <div className="carousel-track-wrapper">
          <div className="carousel-track">
            {/* Render the list twice for a seamless infinite loop */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo">
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={120} 
                  height={60} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-more">及更多品牌 &gt;</div>
      </div>
    </section>
  );
};

export default ClientCarousel;
