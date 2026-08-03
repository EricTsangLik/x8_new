import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'ROADSHOW 一站式推廣',
      desc: '一站式整合策劃 · ROADSHOW 設計 · 現場執行',
      image: '/ROADSHOW/roadshow-9.jpg',
      href: '/services/roadshow'
    },
    {
      id: '02',
      title: '商場 POP-UP',
      desc: '創意設計 · 空間規劃 · 快速搭建',
      image: '/商場pop up/popup-hero.jpeg',
      href: '/services/mall-popup'
    },
    {
      id: '03',
      title: '店舖裝修工程',
      desc: '室內設計 · 工程管理 · 施工裝修',
      image: '/店鋪裝修工程/renovation-hero.jpeg',
      href: '/services/store-renovation'
    }
  ];

  return (
    <section className="services">
      <div className="container services-container">
        <div className="services-intro">
          <h2>我們的服務</h2>
          <p>從概念到落地，我們提供一站式活動製作與空間規劃方案。<br/>助您打造深度品牌體驗。</p>
          <Link href="services/store-renovation">
            <button className="btn-primary">
              了解更多 <ArrowRight size={16} />
            </button>
          </Link>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <Link href={service.href} key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-bg-image" />
              <div className="service-content">
                <span className="service-id">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ArrowRight className="service-arrow" size={20}/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;