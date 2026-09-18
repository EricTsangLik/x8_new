import React from 'react';
import ServiceHero from '@/components/services/simple/ServiceHero';
import ServiceReferences from '@/components/services/simple/ServiceReferences';
import ContactCTA from '@/components/home/ContactCTA';
import type { NewServicePage } from '@/data/new-services';

const ServiceSimplePage = ({ service }: { service: NewServicePage }) => {
  return (
    <>
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        lead={service.lead}
        description={service.description}
      />
      <ServiceReferences cases={service.cases} />
      <ContactCTA heading={service.ctaHeading} copy={service.ctaCopy} />
    </>
  );
};

export default ServiceSimplePage;
