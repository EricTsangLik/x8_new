import React from 'react';
import StoreRenovationHero from '@/components/services/store-renovation/StoreRenovationHero';
import StoreRenovationServices from '@/components/services/store-renovation/StoreRenovationServices';
import StoreRenovationReferences from '@/components/services/store-renovation/StoreRenovationReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '店鋪裝修工程 | X8 PRODUCTION',
  description: '專業店鋪裝修工程，提供室內設計、空間規劃與高質量施工服務。',
};

export default function StoreRenovationPage() {
  return (
    <>
      <StoreRenovationHero />
      <StoreRenovationServices />
      <StoreRenovationReferences />
      <ContactCTA />
    </>
  );
}
