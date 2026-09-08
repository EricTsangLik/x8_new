import React from 'react';
import BackdropHero from '@/components/services/backdrop/BackdropHero';
import BackdropReferences from '@/components/services/backdrop/BackdropReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'BackDrop 設計與製作 | X8 PRODUCTION',
  description: '創意設計｜高品質材料｜多樣尺寸｜專業安裝｜品牌形象提升。X8 Production 為活動、展覽及品牌推廣提供專業背景幕解決方案。',
};

export default function BackdropPage() {
  return (
    <>
      <BackdropHero />
      <BackdropReferences />
      <ContactCTA
        heading="需要專業的背景幕方案？"
        copy="X8 Production 根據您的活動主題與空間需求，提供創意設計、優質材料與專業安裝服務，讓您的活動背景成為焦點，提升整體品牌價值。"
      />
    </>
  );
}
