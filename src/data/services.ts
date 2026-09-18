import { newServicePages } from '@/data/new-services';

export const serviceLinks = [
  { name: '商場 POP-UP', href: '/services/mall-popup' },
  { name: '店鋪裝修', href: '/services/store-renovation' },
  { name: 'roadshow一站式推廣', href: '/services/roadshow' },
  { name: '專業印刷服務', href: '/services/printing' },
  { name: 'BackDrop 設計與製作', href: '/services/backdrop' },
  { name: '展覽攤位製作', href: '/services/exhibition-booth' },
  { name: '活動佈置裝飾', href: '/services/event-decoration' },
  ...newServicePages.map((service) => ({
    name: service.title,
    href: `/services/${service.slug}`,
  })),
] as const;
