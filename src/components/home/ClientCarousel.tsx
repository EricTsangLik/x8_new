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
      <div className="carousel-container">
        <div className="carousel-title">
          我們的客戶
          <svg
            className="carousel-title-line"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 5 C8 2.2, 20 7.8, 32 4.5 C44 1.5, 56 8, 68 4.8 C80 1.8, 90 7.2, 98 5"
              fill="none"
              stroke="#e8b923"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="carousel-track-wrapper">
          <div className="carousel-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-more">及更多夥伴 &gt;</div>
      </div>
    </section>
  );
};

export default ClientCarousel;
