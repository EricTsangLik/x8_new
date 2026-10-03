export type NewServicePage = {
  slug: string;
  title: string;
  tagline: string;
  lead: string;
  description: string;
  image: string;
  ctaHeading: string;
  ctaCopy: string;
  cases: { title: string; desc: string; image?: string }[];
};

export const newServicePages: NewServicePage[] = [
  {
    slug: 'license-application',
    title: '設計及牌照申請服務',
    image: '/設計及牌照申請服務/license-application-hero.jpg',
    tagline: '活動設計｜場地規劃｜牌照申請｜合規諮詢｜一站式支援',
    lead: '為商場活動與推廣項目提供設計及牌照申請支援',
    description:
      'X8 Production 協助客戶處理活動設計、場地規劃及相關牌照申請流程，從方案構思到合規文件準備，讓活動能按商場及相關規例順利推進。',
    ctaHeading: '需要活動設計或牌照申請支援？',
    ctaCopy:
      'X8 Production 根據您的場地與活動類型，提供設計規劃與牌照申請諮詢，協助項目更順暢地落地執行。',
    cases: [
      { title: '富途牛牛 旺角東站', desc: '活動設計、場地規劃及牌照申請支援', image: '/設計及牌照申請服務/富途牛牛-旺角東站-20260729.jpg' },
      { title: '老虎證券 旺角東站', desc: '車站場地規劃與合規申請', image: '/設計及牌照申請服務/老虎證券-旺角東站-20260918.jpg' },
      { title: '老虎證券 粉嶺站', desc: '車站活動設計及牌照申請', image: '/設計及牌照申請服務/老虎證券-粉嶺站-20260901.jpg' },
    ],
  },
  {
    slug: 'equipment-rental',
    title: '設備租賃服務',
    image: '/設備租賃服務/equipment-rental-hero.jpg',
    tagline: '燈光音響｜展具租賃｜家具道具｜即時支援｜彈性租期',
    lead: '為展覽、路演及商場活動提供專業設備租賃',
    description:
      'X8 Production 提供燈光音響、展具、家具及活動道具租賃，配合現場安裝與回收安排，讓客戶以更具彈性的方式完成活動執行。',
    ctaHeading: '需要活動設備租賃？',
    ctaCopy:
      'X8 Production 根據活動規模與場地需求，提供合適的設備租賃與現場支援方案。',
    cases: [
      { title: 'PA System', desc: '活動燈光、音響及現場設備租賃', image: '/設備租賃服務/PA system.jpg' },
      { title: 'PA System 現場', desc: '現場安裝與即時技術支援', image: '/設備租賃服務/PA system(1).jpg' },
    ],
  },
  {
    slug: 'lightbox',
    title: '廣告燈箱',
    image: '/廣告燈箱/lightbox-hero.jpg',
    tagline: '創意設計｜高清畫面｜多樣尺寸｜專業安裝｜品牌曝光',
    lead: '為商場、店舖及活動現場提供廣告燈箱設計與製作',
    description:
      'X8 Production 專注廣告燈箱設計、製作與安裝，無論是商場指示、店舖招牌或活動展示，都能以高清畫面與穩定結構提升品牌曝光。',
    ctaHeading: '需要專業廣告燈箱方案？',
    ctaCopy:
      'X8 Production 根據您的空間尺寸、品牌形象與預算，提供燈箱設計、製作與安裝一站式服務。',
    cases: [
      { title: 'HGC', desc: '活動及品牌展示燈箱', image: '/廣告燈箱/HGC.jpg' },
      { title: '富途牛牛 D Park', desc: '商場走廊及中庭廣告燈箱', image: '/廣告燈箱/富途牛牛-D Park-20260704.jpg' },
      { title: '富途牛牛', desc: '品牌廣告燈箱製作', image: '/廣告燈箱/富途牛牛.jpg' },
      { title: 'Hello Hong Kong', desc: '活動展示燈箱', image: '/廣告燈箱/Hello Hong Kong.jpg' },
    ],
  },
  {
    slug: 'mall-sale',
    title: '商場特賣場製作',
    image: '/商場特賣場製作/mall-sale-hero.jpg',
    tagline: '場地規劃｜攤位製作｜視覺陳列｜快速搭建｜銷售氛圍',
    lead: '為商場特賣及促銷活動提供一站式製作',
    description:
      'X8 Production 為商場特賣場提供場地規劃、攤位製作與視覺陳列，快速搭建具銷售氛圍的促銷場景，協助品牌在有限檔期內提升曝光與成交。',
    ctaHeading: '準備籌備下一場商場特賣？',
    ctaCopy:
      'X8 Production 根據檔期、貨品類型與商場規範，提供特賣場設計、製作與現場搭建服務。',
    cases: [
      { title: '中國人壽 HKU Autumn Career Fair', desc: '特賣及活動攤位設計與製作', image: '/商場特賣場製作/中國人壽-HKU Autumn Career Fair-20260916.jpg' },
    ],
  },
  {
    slug: 'mall-decoration',
    title: '商場裝飾佈置',
    image: '/商場裝飾佈置/mall-decoration-hero.jpg',
    tagline: '商場美陳｜主題佈置｜空間裝飾｜品牌裝置｜現場施工',
    lead: '為商場公共空間提供專業裝飾與美陳佈置',
    description:
      'X8 Production 為商場中庭、走廊及公共空間提供主題美陳、裝飾裝置與現場施工，協助商場及品牌打造具吸引力的購物環境。',
    ctaHeading: '想提升商場空間氛圍？',
    ctaCopy:
      'X8 Production 根據商場主題與檔期，提供美陳設計、裝置製作與現場佈置服務。',
    cases: [
      { title: '富途牛牛 灣景滙', desc: '商場公共空間美陳佈置', image: '/商場裝飾佈置/富途牛牛-灣景滙.jpg' },
      { title: '富途牛牛 啟德體育園', desc: '主題裝置及現場佈置', image: '/商場裝飾佈置/富途牛牛-啟德體育園.jpg' },
      { title: '老虎證券 新港城 MosTown', desc: '商場品牌裝飾', image: '/商場裝飾佈置/老虎證券-新港城 MosTown_.jpg' },
      { title: '老虎證券 新港城 MosTown 現場', desc: '商場美陳及打卡裝置', image: '/商場裝飾佈置/老虎證券-新港城 MosTown_(1).jpg' },
      { title: '老虎證券 新港城 MosTown 細節', desc: '商場裝飾現場施工', image: '/商場裝飾佈置/老虎證券-新港城 MosTown_(2).jpg' },
    ],
  },
  {
    slug: 'christmas-mall',
    title: '聖誕商場佈置',
    image: '/聖誕商場佈置/christmas-mall-hero.jpg',
    tagline: '聖誕主題｜商場美陳｜裝置藝術｜節日氛圍｜現場佈置',
    lead: '為商場打造專屬聖誕節日場景與美陳',
    description:
      'X8 Production 提供聖誕商場佈置，包括聖誕樹、中庭裝置、櫥窗裝飾及節日美陳，從設計、製作到現場安裝，營造完整聖誕購物氛圍。',
    ctaHeading: '準備好今年的聖誕商場佈置？',
    ctaCopy:
      'X8 Production 根據商場主題與檔期，提供聖誕美陳設計、裝置製作與現場佈置一站式服務。',
    cases: [
      { title: '富途牛牛 淘大商場', desc: '聖誕商場美陳及現場佈置', image: '/聖誕商場佈置/富途牛牛-淘大商場-2025.jpg' },
      { title: 'Sun Life', desc: '聖誕櫥窗及節日裝飾', image: '/聖誕商場佈置/Sunlife.jpg' },
    ],
  },
  {
    slug: 'new-year-mall',
    title: '新年商場佈置',
    image: '/新年商場佈置/new-year-mall-hero.jpg',
    tagline: '新年主題｜商場美陳｜賀歲裝置｜節日氛圍｜現場佈置',
    lead: '為商場打造賀歲新年場景與節日美陳',
    description:
      'X8 Production 提供新年商場佈置，包括賀歲裝置、中庭場景、櫥窗裝飾及節日美陳，協助商場在農曆新年檔期營造喜慶氣氛。',
    ctaHeading: '需要賀歲新年商場佈置？',
    ctaCopy:
      'X8 Production 根據商場主題與新年檔期，提供賀歲美陳設計、裝置製作與現場佈置服務。',
    cases: [
      { title: '富途牛牛 淘大商場', desc: '新年商場賀歲美陳及現場佈置', image: '/新年商場佈置/富途牛牛-淘大商場-2025.jpg' },
    ],
  },
];
