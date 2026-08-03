import React from 'react';
import RoadshowHero from '@/components/services/roadshow/RoadshowHero';
import RoadshowServices from '@/components/services/roadshow/RoadshowServices';
import RoadshowReferences from '@/components/services/roadshow/RoadshowReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'ROADSHOW 一站式推廣 | X8 PRODUCTION',
  description: '專業 ROADSHOW 策劃與執行，提供全方位推廣活動解決方案，提升品牌影響力。',
};

export default function RoadshowPage() {
  return (
    <>
      <RoadshowHero />
      <RoadshowServices />
      <RoadshowReferences />
      <ContactCTA />
    </>
  );
}
