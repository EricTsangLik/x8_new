import React from 'react';
import ServiceSimplePage from '@/components/services/simple/ServiceSimplePage';
import { newServicePages } from '@/data/new-services';

const service = newServicePages.find((item) => item.slug === 'new-year-mall')!;

export const metadata = {
  title: `${service.title} | X8 PRODUCTION`,
  description: `${service.tagline}。${service.lead}。`,
};

export default function NewYearMallPage() {
  return <ServiceSimplePage service={service} />;
}
