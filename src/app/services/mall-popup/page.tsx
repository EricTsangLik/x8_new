import React from 'react';
import PopupHero from '@/components/services/mall-popup/PopupHero';
import PopupServices from '@/components/services/mall-popup/PopupServices';
import PopupReferences from '@/components/services/mall-popup/PopupReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '商場 POP-UP | X8 PRODUCTION',
  description: '專業商場 POP-UP 製作，提供創意設計、空間規劃與快速搭建服務。',
};

export default function MallPopupPage() {
  return (
    <>
      <PopupHero />
      <PopupServices />
      <PopupReferences />
      <ContactCTA />
    </>
  );
}