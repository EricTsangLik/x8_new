import React from 'react';
import './ServiceHero.css';

type ServiceHeroProps = {
  title: string;
  tagline: string;
  lead: string;
  description: string;
};

const ServiceHero = ({ title, tagline, lead, description }: ServiceHeroProps) => {
  return (
    <section className="service-simple-hero">
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
