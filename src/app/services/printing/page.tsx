import React from 'react';
import PrintingHero from '@/components/services/printing/PrintingHero';
import PrintingReferences from '@/components/services/printing/PrintingReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '專業印刷服務 | X8 PRODUCTION',
  description: '高品質印刷｜多樣化產品｜快速交付｜客製化方案｜專業印刷技術。X8 Production 提供一站式專業印刷解決方案。',
};

export default function PrintingPage() {
  return (
    <>
      <PrintingHero />
      <PrintingReferences />
      <ContactCTA
        heading="需要更專業的印刷方案？"
        copy="X8 Production 根據您的設計需求、數量及預算，提供專業的印刷諮詢與一站式服務，讓您的每一份印刷品都能彰顯品牌價值。"
      />
    </>
  );
}
