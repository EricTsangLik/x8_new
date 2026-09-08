import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: '01',
    title: '商場 POP-UP',
    desc: 'BRAND BUILDING｜K-POP 韓星POP-UP STORE ｜嘉年華｜展銷',
    image: '/商場pop up/popup-hero.jpeg',
    href: '/services/mall-popup',
  },
  {
    id: '02',
    title: '店舖裝修工程',
    desc: '舖位配對支援｜室內設計｜裝修工程｜商業空間規劃｜施工交付',
    image: '/店鋪裝修工程/renovation-hero.jpeg',
    href: '/services/store-renovation',
  },
  {
    id: '03',
    title: 'ROADSHOW 一站式推廣',
    desc: '商場展覽位置租用｜活動製作｜Promoter 團隊｜倉存管理｜物流支援｜宣傳車',
    image: '/ROADSHOW/roadshow-9.jpg',
    href: '/services/roadshow',
  },
  {
    id: '04',
    title: '專業印刷服務',
    desc: '高品質印刷｜多樣化產品｜快速交付｜客製化方案｜專業印刷技術',
    image: '',
    href: '/services/printing',
  },
  {
    id: '05',
    title: 'BackDrop 設計與製作',
    desc: '創意設計｜高品質材料｜多樣尺寸｜專業安裝｜品牌形象提升',
    image: '',
    href: '/services/backdrop',
  },
  {
    id: '06',
    title: '展覽攤位製作',
    desc: '創意規劃｜專業設計｜高品質材料｜快速施工｜品牌展現',
    image: '',
    href: '/services/exhibition-booth',
  },
  {
    id: '07',
    title: '活動佈置裝飾',
    desc: '創意設計｜專業佈置｜多樣風格｜高品質材料｜現場布置一條龍服務',
    image: '',
    href: '/services/event-decoration',
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container services-container">
        <div className="services-intro">
          <h2>我們的服務</h2>
          <p>從概念到落地，我們提供一站式活動製作與空間規劃方案。<br/>助您打造深度品牌體驗。</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link href={service.href} key={service.id} className="service-card">
              {service.image ? (
                <img src={service.image} alt={service.title} className="service-bg-image" />
              ) : (
                <div className="service-bg-fallback" aria-hidden="true" />
              )}
              <div className="service-content">
                <span className="service-id">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ArrowRight className="service-arrow" size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
