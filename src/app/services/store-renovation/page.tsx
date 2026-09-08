import React from 'react';
import StoreRenovationHero from '@/components/services/store-renovation/StoreRenovationHero';
import StoreRenovationReferences from '@/components/services/store-renovation/StoreRenovationReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '店舖裝修工程 | X8 PRODUCTION',
  description: '舖位配對支援｜室內設計｜裝修工程｜商業空間規劃｜施工交付。X8 Production 為零售及商業空間提供店舖裝修工程服務。',
};

export default function StoreRenovationPage() {
  return (
    <>
      <StoreRenovationHero />
      <StoreRenovationReferences />
      <ContactCTA
        heading="需要更完整的店舖裝修方案？"
        copy="X8 可按品牌、空間與工程需求，提供更清晰的規劃與施工支援。"
      />
    </>
  );
}
