import React from 'react';
import ServicePhotoGrid from '@/components/services/shared/ServicePhotoGrid';
import './EventDecorationReferences.css';

const photos = [
  { src: '/活動佈置裝飾/富途牛牛-荃新天地-20251018.jpg', alt: '富途牛牛 荃新天地' },
  { src: '/活動佈置裝飾/富途牛牛-荃新天地-20251018(1).jpg', alt: '富途牛牛 荃新天地 現場' },
  { src: '/活動佈置裝飾/富途牛牛-屯門屯市廣場-20250526.jpeg', alt: '富途牛牛 屯門市廣場' },
  { src: '/活動佈置裝飾/中國人壽中心-20260205.jpg', alt: '中國人壽中心' },
  { src: '/活動佈置裝飾/中國人壽中心-20260205(1).jpg', alt: '中國人壽中心 現場' },
  { src: '/活動佈置裝飾/老虎證券-第一城-20260509.jpg', alt: '老虎證券 第一城' },
  { src: '/活動佈置裝飾/富途牛牛- 龍堡酒店-220260808.jpg', alt: '富途牛牛 龍堡酒店' },
  { src: '/活動佈置裝飾/ 富途牛牛-JP morgan-K11.jpeg', alt: '富途牛牛 JP Morgan K11' },
  { src: '/活動佈置裝飾/玻璃纖維裝飾_.jpg', alt: '玻璃纖維裝飾' },
];

const EventDecorationReferences = () => {
  return (
    <section className="event-decoration-references">
      <div className="container">
        <div className="event-decoration-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <ServicePhotoGrid photos={photos} />
      </div>
    </section>
  );
};

export default EventDecorationReferences;
