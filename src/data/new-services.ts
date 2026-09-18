export type NewServicePage = {
  slug: string;
  title: string;
  tagline: string;
  lead: string;
  description: string;
  ctaHeading: string;
  ctaCopy: string;
  cases: { title: string; desc: string }[];
};

export const newServicePages: NewServicePage[] = [
  {
    slug: 'license-application',
    title: '設計及牌照申請服務',
    tagline: '活動設計｜場地規劃｜牌照申請｜合規諮詢｜一站式支援',
    lead: '為商場活動與推廣項目提供設計及牌照申請支援',
    description:
      'X8 Production 協助客戶處理活動設計、場地規劃及相關牌照申請流程，從方案構思到合規文件準備，讓活動能按商場及相關規例順利推進。',
    ctaHeading: '需要活動設計或牌照申請支援？',
    ctaCopy:
      'X8 Production 根據您的場地與活動類型，提供設計規劃與牌照申請諮詢，協助項目更順暢地落地執行。',
    cases: [
      { title: '活動設計', desc: '活動概念、視覺及場地設計方案' },
      { title: '場地規劃', desc: '動線、佈局與商場場地規劃' },
      { title: '牌照申請', desc: '活動相關牌照及文件申請支援' },
      { title: '合規諮詢', desc: '商場及場地規例合規諮詢' },
    ],
  },
  {
    slug: 'equipment-rental',
    title: '設備租賃服務',
    tagline: '燈光音響｜展具租賃｜家具道具｜即時支援｜彈性租期',
    lead: '為展覽、路演及商場活動提供專業設備租賃',
    description:
      'X8 Production 提供燈光音響、展具、家具及活動道具租賃，配合現場安裝與回收安排，讓客戶以更具彈性的方式完成活動執行。',
    ctaHeading: '需要活動設備租賃？',
    ctaCopy:
      'X8 Production 根據活動規模與場地需求，提供合適的設備租賃與現場支援方案。',
    cases: [
      { title: '燈光音響', desc: '活動燈光、音響及現場設備租賃' },
      { title: '展具租賃', desc: '展覽展架、展示櫃及攤位配件' },
      { title: '家具道具', desc: '活動家具、裝飾道具及陳列用品' },
      { title: '現場支援', desc: '運送、安裝、回收及即時技術支援' },
    ],
  },
  {
    slug: 'lightbox',
    title: '廣告燈箱',
    tagline: '創意設計｜高清畫面｜多樣尺寸｜專業安裝｜品牌曝光',
    lead: '為商場、店舖及活動現場提供廣告燈箱設計與製作',
    description:
      'X8 Production 專注廣告燈箱設計、製作與安裝，無論是商場指示、店舖招牌或活動展示，都能以高清畫面與穩定結構提升品牌曝光。',
    ctaHeading: '需要專業廣告燈箱方案？',
    ctaCopy:
      'X8 Production 根據您的空間尺寸、品牌形象與預算，提供燈箱設計、製作與安裝一站式服務。',
    cases: [
      { title: '商場燈箱', desc: '商場走廊及中庭廣告燈箱' },
      { title: '店舖燈箱', desc: '店舖招牌及門口品牌燈箱' },
      { title: '活動燈箱', desc: '展覽及推廣活動展示燈箱' },
      { title: '戶外燈箱', desc: '戶外品牌及指示燈箱製作' },
    ],
  },
  {
    slug: 'mall-sale',
    title: '商場特賣場製作',
    tagline: '場地規劃｜攤位製作｜視覺陳列｜快速搭建｜銷售氛圍',
    lead: '為商場特賣及促銷活動提供一站式製作',
    description:
      'X8 Production 為商場特賣場提供場地規劃、攤位製作與視覺陳列，快速搭建具銷售氛圍的促銷場景，協助品牌在有限檔期內提升曝光與成交。',
    ctaHeading: '準備籌備下一場商場特賣？',
    ctaCopy:
      'X8 Production 根據檔期、貨品類型與商場規範，提供特賣場設計、製作與現場搭建服務。',
    cases: [
      { title: '特賣攤位', desc: '特賣場攤位設計與製作' },
      { title: '陳列設計', desc: '貨品陳列及視覺銷售佈局' },
      { title: '促銷場景', desc: '促銷主題場景與氣氛營造' },
      { title: '現場搭建', desc: '快速搭建、營運支援及拆卸' },
    ],
  },
  {
    slug: 'mall-decoration',
    title: '商場裝飾佈置',
    tagline: '商場美陳｜主題佈置｜空間裝飾｜品牌裝置｜現場施工',
    lead: '為商場公共空間提供專業裝飾與美陳佈置',
    description:
      'X8 Production 為商場中庭、走廊及公共空間提供主題美陳、裝飾裝置與現場施工，協助商場及品牌打造具吸引力的購物環境。',
    ctaHeading: '想提升商場空間氛圍？',
    ctaCopy:
      'X8 Production 根據商場主題與檔期，提供美陳設計、裝置製作與現場佈置服務。',
    cases: [
      { title: '商場美陳', desc: '商場公共空間美陳設計與佈置' },
      { title: '主題裝置', desc: '大型主題裝飾及打卡裝置' },
      { title: '中庭佈置', desc: '商場中庭場景規劃與施工' },
      { title: '品牌裝飾', desc: '品牌聯乘及商場合作裝飾' },
    ],
  },
  {
    slug: 'christmas-mall',
    title: '聖誕商場佈置',
    tagline: '聖誕主題｜商場美陳｜裝置藝術｜節日氛圍｜現場佈置',
    lead: '為商場打造專屬聖誕節日場景與美陳',
    description:
      'X8 Production 提供聖誕商場佈置，包括聖誕樹、中庭裝置、櫥窗裝飾及節日美陳，從設計、製作到現場安裝，營造完整聖誕購物氛圍。',
    ctaHeading: '準備好今年的聖誕商場佈置？',
    ctaCopy:
      'X8 Production 根據商場主題與檔期，提供聖誕美陳設計、裝置製作與現場佈置一站式服務。',
    cases: [
      { title: '聖誕樹裝置', desc: '商場聖誕樹設計與安裝' },
      { title: '中庭佈置', desc: '聖誕中庭場景及打卡點' },
      { title: '櫥窗裝飾', desc: '店舖及商場櫥窗節日裝飾' },
      { title: '節日美陳', desc: '走廊、入口及公共空間美陳' },
    ],
  },
  {
    slug: 'new-year-mall',
    title: '新年商場佈置',
    tagline: '新年主題｜商場美陳｜賀歲裝置｜節日氛圍｜現場佈置',
    lead: '為商場打造賀歲新年場景與節日美陳',
    description:
      'X8 Production 提供新年商場佈置，包括賀歲裝置、中庭場景、櫥窗裝飾及節日美陳，協助商場在農曆新年檔期營造喜慶氣氛。',
    ctaHeading: '需要賀歲新年商場佈置？',
    ctaCopy:
      'X8 Production 根據商場主題與新年檔期，提供賀歲美陳設計、裝置製作與現場佈置服務。',
    cases: [
      { title: '賀歲裝置', desc: '新年大型賀歲裝置設計與製作' },
      { title: '中庭佈置', desc: '新年中庭場景及打卡點' },
      { title: '櫥窗裝飾', desc: '店舖及商場櫥窗賀歲裝飾' },
      { title: '節日美陳', desc: '入口、走廊及公共空間美陳' },
    ],
  },
];
