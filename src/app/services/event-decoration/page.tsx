import React from 'react';
import EventDecorationHero from '@/components/services/event-decoration/EventDecorationHero';
import EventDecorationReferences from '@/components/services/event-decoration/EventDecorationReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '活動佈置裝飾 | X8 PRODUCTION',
  description: '創意設計｜專業佈置｜多樣風格｜高品質材料｜現場布置一條龍服務。X8 Production 提供各類活動的專業佈置與裝飾方案。',
};

export default function EventDecorationPage() {
  return (
    <>
      <EventDecorationHero />
      <EventDecorationReferences />
      <ContactCTA
        heading="想讓您的活動更具吸引力？"
        copy="X8 Production 根據您的主題與場地需求，提供專業的佈置設計與現場佈置服務，打造難忘的活動體驗。"
      />
    </>
  );
}
