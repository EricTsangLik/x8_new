import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '聯絡我們 | X8 PRODUCTION',
  description: '隨時與 X8 PRODUCTION 團隊聯絡。我們提供全面的展覽解決方案、商場佈置與活動執行，期待為您的品牌創造無限可能。',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactCTA />
    </>
  );
}
