import React from 'react';
import './ServiceReferences.css';

type ServiceReference = {
  title: string;
  desc: string;
};

type ServiceReferencesProps = {
  cases: ServiceReference[];
};

const ServiceReferences = ({ cases }: ServiceReferencesProps) => {
  return (
    <section className="service-simple-references">
      <div className="container">
        <div className="service-simple-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="service-simple-references-grid">
          {cases.map((item) => (
            <article key={item.title} className="service-simple-reference-card">
              <div className="service-simple-reference-placeholder" aria-hidden="true">
                <span>{item.title}</span>
              </div>
              <div className="service-simple-reference-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceReferences;
