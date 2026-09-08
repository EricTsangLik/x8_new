import React from 'react';
import PopupHero from '@/components/services/mall-popup/PopupHero';
import PopupServices from '@/components/services/mall-popup/PopupServices';
import PopupReferences from '@/components/services/mall-popup/PopupReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: '商場 POP-UP | X8 PRODUCTION',
  description: 'BRAND BUILDING｜K-POP 韓星POP-UP STORE ｜嘉年華｜展銷。從概念到落地，為您提供一站式商場展覽製作服務。',
};

export default function MallPopupPage() {
  return (
    <>
      <PopupHero />
      <PopupServices />
      <PopupReferences />
      <ContactCTA
        heading="搵緊商場做POP-UP？"
        copy="與 X8 團隊聯繫，取得更清晰的場地、製作與執行建議。"
      />
    </>
  );
}