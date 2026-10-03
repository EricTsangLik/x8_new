import React from 'react';
import './ServiceHero.css';

type ServiceHeroProps = {
  title: string;
  tagline: string;
  lead: string;
  description: string;
  image?: string;
};

const ServiceHero = ({ title, tagline, lead, description, image }: ServiceHeroProps) => {
  return (
    <section
      className="service-simple-hero"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(42, 34, 22, 0.72) 90%), url('${image}')`,
            }
          : undefined
      }
    >
      <div className="container service-simple-hero-container">
        <div className="service-simple-hero-content">
          <h1>{title}</h1>
          <p>{tagline}</p>
          <div className="service-simple-hero-lead">{lead}</div>
          <div className="service-simple-hero-desc">{description}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
