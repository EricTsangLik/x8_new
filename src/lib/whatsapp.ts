export const WHATSAPP_NUMBER = '85252279172';

const SERVICE_BY_PATH: Record<string, string> = {
  '/services/mall-popup': '商場 POP-UP',
  '/services/store-renovation': '店舖裝修工程',
  '/services/roadshow': 'ROADSHOW 一站式推廣',
  '/services/printing': '專業印刷服務',
  '/services/backdrop': 'BackDrop 設計與製作',
  '/services/exhibition-booth': '展覽攤位製作',
  '/services/event-decoration': '活動佈置裝飾',
  '/services/license-application': '設計及牌照申請服務',
  '/services/equipment-rental': '設備租賃服務',
  '/services/lightbox': '廣告燈箱',
  '/services/mall-sale': '商場特賣場製作',
  '/services/mall-decoration': '商場裝飾佈置',
  '/services/christmas-mall': '聖誕商場佈置',
  '/services/new-year-mall': '新年商場佈置',
};

export function serviceNameFromPath(pathname?: string | null) {
  if (!pathname) return undefined;
  return SERVICE_BY_PATH[pathname];
}

export function enquiryMessage(serviceName?: string) {
  if (serviceName) {
    return `你好，我對「${serviceName}」有興趣，想了解詳情、檔期及報價，請協助跟進。`;
  }
  return '你好，我想查詢 X8 PRODUCTION 的活動製作服務，請協助跟進。';
}

export function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function whatsappEnquiryHref(serviceName?: string) {
  return whatsappHref(enquiryMessage(serviceName));
}
