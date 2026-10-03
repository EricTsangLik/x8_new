import React from 'react';
import ServicePhotoGrid from '@/components/services/shared/ServicePhotoGrid';
import './ServiceReferences.css';

type ServiceReference = {
  title: string;
  desc: string;
  image?: string;
};

type ServiceReferencesProps = {
  cases: ServiceReference[];
};

const ServiceReferences = ({ cases }: ServiceReferencesProps) => {
  const photos = cases
    .filter((item) => item.image)
    .map((item) => ({ src: item.image as string, alt: item.title }));

  return (
    <section className="service-simple-references">
      <div className="container">
        <div className="service-simple-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        {photos.length > 0 ? (
          <ServicePhotoGrid photos={photos} />
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default ServiceReferences;
