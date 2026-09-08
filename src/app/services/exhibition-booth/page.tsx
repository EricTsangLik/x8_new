import React from 'react';
import ExhibitionBoothHero from '@/components/services/exhibition-booth/ExhibitionBoothHero';
import ExhibitionBoothServices from '@/components/services/exhibition-booth/ExhibitionBoothServices';
import ExhibitionBoothReferences from '@/components/services/exhibition-booth/ExhibitionBoothReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '展覽攤位製作 | X8 PRODUCTION',
  description: '創意規劃｜專業設計｜高品質材料｜快速施工｜品牌展現。X8 Production 提供一站式展覽攤位設計與製作服務。',
};

export default function ExhibitionBoothPage() {
  return (
    <>
      <ExhibitionBoothHero />
      <ExhibitionBoothServices />
      <ExhibitionBoothReferences />
      <ContactCTA
        heading="想打造獨一無二的展覽攤位？"
        copy="X8 Production 根據您的品牌特色與展覽需求，提供創意設計與專業施工，讓您的展位成為整個展會的焦點，達到最佳推廣效果。"
      />
    </>
  );
}
