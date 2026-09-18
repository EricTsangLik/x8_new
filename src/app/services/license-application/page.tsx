import React from 'react';
import ServiceSimplePage from '@/components/services/simple/ServiceSimplePage';
import { newServicePages } from '@/data/new-services';

const service = newServicePages.find((item) => item.slug === 'license-application')!;

export const metadata = {
  title: `${service.title} | X8 PRODUCTION`,
  description: `${service.tagline}。${service.lead}。`,
};

export default function LicenseApplicationPage() {
  return <ServiceSimplePage service={service} />;
}
