import React from 'react';
import RoadshowHero from '@/components/services/roadshow/RoadshowHero';
import RoadshowServices from '@/components/services/roadshow/RoadshowServices';
import RoadshowReferences from '@/components/services/roadshow/RoadshowReferences';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'ROADSHOW 一站式推廣 | X8 PRODUCTION',
  description: '商場展覽位置租用｜活動製作｜Promoter 團隊｜倉存管理｜物流支援｜宣傳車。X8 Production 為金融及獲客品牌提供 Roadshow 一站式推廣支援。',
};

export default function RoadshowPage() {
  return (
    <>
      <RoadshowHero />
      <RoadshowServices />
      <RoadshowReferences />
      <ContactCTA
        heading="需要更有效的 Roadshow 執行方案？"
        copy="與 X8 團隊聯繫，規劃更清晰的獲客活動流程與現場配置。"
      />
    </>
  );
}
