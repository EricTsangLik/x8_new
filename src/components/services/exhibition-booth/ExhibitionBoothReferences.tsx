import React from 'react';
import ServicePhotoGrid from '@/components/services/shared/ServicePhotoGrid';
import './ExhibitionBoothReferences.css';

const photos = [
  { src: '/展覽攤位製作/富途牛牛-創科展-20260413.jpg', alt: '富途牛牛 創科展' },
  { src: '/展覽攤位製作/富途牛牛-亞洲國際博覽館.jpg', alt: '富途牛牛 亞洲國際博覽館' },
  { src: '/展覽攤位製作/富途牛牛-會展-20260228_.jpg', alt: '富途牛牛 會展' },
  { src: '/展覽攤位製作/富途牛牛-秋季家居展-2026.jpg', alt: '富途牛牛 秋季家居展' },
  { src: '/展覽攤位製作/富途牛牛-試食展-20260402.jpg', alt: '富途牛牛 試食展' },
  { src: '/展覽攤位製作/WEBULL.jpg', alt: 'Webull' },
  { src: '/展覽攤位製作/WEBULL-冬日展.jpg', alt: 'Webull 冬日展' },
  { src: '/展覽攤位製作/stanford-BB展.jpg', alt: 'Stanford BB展' },
  { src: '/展覽攤位製作/森呼吸-BB展.jpg', alt: '森呼吸 BB展' },
  { src: '/展覽攤位製作/中國人壽.jpg', alt: '中國人壽' },
  { src: '/展覽攤位製作/老虎證券-書展-20260715.jpg', alt: '老虎證券 書展' },
  { src: '/展覽攤位製作/老虎證券-課外活動展-20260515.jpg', alt: '老虎證券 課外活動展' },
  { src: '/展覽攤位製作/老虎證券-電腦展-2026.jpg', alt: '老虎證券 電腦展' },
  { src: '/展覽攤位製作/華盛證券.jpg', alt: '華盛證券' },
  { src: '/展覽攤位製作/華盛證券(1).jpg', alt: '華盛證券 現場' },
  { src: '/展覽攤位製作/馬會.jpeg', alt: '馬會' },
];

const ExhibitionBoothReferences = () => {
  return (
    <section className="exhibition-booth-references">
      <div className="container">
        <div className="exhibition-booth-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <ServicePhotoGrid photos={photos} />
      </div>
    </section>
  );
};

export default ExhibitionBoothReferences;
