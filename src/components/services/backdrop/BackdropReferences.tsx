import React from 'react';
import ServicePhotoGrid from '@/components/services/shared/ServicePhotoGrid';
import './BackdropReferences.css';

const photos = [
  { src: '/BackDrop 設計與製作/Flyer King中國人壽 CEO Summit-20260509.jpg', alt: 'Flyer King 中國人壽 CEO Summit' },
  { src: '/BackDrop 設計與製作/Lunatique 曾傲棐 concert.jpg', alt: 'Lunatique 曾傲棐 Concert' },
  { src: '/BackDrop 設計與製作/鄭容和concert.jpg', alt: '鄭容和 Concert' },
  { src: '/BackDrop 設計與製作/Ascentium 彦德香港.jpg', alt: 'Ascentium 彦德香港' },
  { src: '/BackDrop 設計與製作/Apex - Football Masterclass with Louis Saha.jpg', alt: 'Apex Football Masterclass with Louis Saha' },
  { src: '/BackDrop 設計與製作/Big Bang Academy.jpg', alt: 'Big Bang Academy' },
  { src: '/BackDrop 設計與製作/中國人壽-紅磡中心-17_9_.jpg', alt: '中國人壽 紅磡中心' },
  { src: '/BackDrop 設計與製作/保良局水運會 16-17_05_.jpg', alt: '保良局水運會' },
  { src: '/BackDrop 設計與製作/大律師公會.jpg', alt: '大律師公會' },
  { src: '/BackDrop 設計與製作/大律師公會(1).jpg', alt: '大律師公會 現場' },
  { src: '/BackDrop 設計與製作/大律師公會-亞洲協會香港中心.jpg', alt: '大律師公會 亞洲協會香港中心' },
  { src: '/BackDrop 設計與製作/大灣區青年創新創業基地推介會.jpg', alt: '大灣區青年創新創業基地推介會' },
  { src: '/BackDrop 設計與製作/富途牛牛-KOL event.jpg', alt: '富途牛牛 KOL Event' },
  { src: '/BackDrop 設計與製作/富途牛牛-第一城-20260305.jpg', alt: '富途牛牛 第一城' },
  { src: '/BackDrop 設計與製作/富途牛牛-龍堡酒-20260808.jpg', alt: '富途牛牛 龍堡酒店' },
  { src: '/BackDrop 設計與製作/浦發銀行平台發佈會.jpg', alt: '浦發銀行平台發佈會' },
  { src: '/BackDrop 設計與製作/蒲發銀行-20260828.jpg', alt: '浦發銀行 2026' },
  { src: '/BackDrop 設計與製作/港大EMBA晚宴_論壇.jpg', alt: '港大 EMBA 晚宴論壇' },
  { src: '/BackDrop 設計與製作/馬會Annual Dinner.jpg', alt: '馬會 Annual Dinner' },
  { src: '/BackDrop 設計與製作/馬會Annual Dinner(1).jpg', alt: '馬會 Annual Dinner 現場' },
  { src: '/BackDrop 設計與製作/怨靈禁地.JPG', alt: '怨靈禁地' },
];

const BackdropReferences = () => {
  return (
    <section className="backdrop-references">
      <div className="container">
        <div className="backdrop-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <ServicePhotoGrid photos={photos} />
      </div>
    </section>
  );
};

export default BackdropReferences;
