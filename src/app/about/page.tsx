import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '關於我們 | X8 PRODUCTION',
  description: 'X8 Production Limited 專注於提供全面的展覽解決方案，從創新的展覽攤位設計到無縫的活動執行與商場佈置。',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ContactCTA />
    </>
  );
}
