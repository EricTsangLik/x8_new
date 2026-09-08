import React from 'react';
import { Layers, Store, ClipboardCheck, Package } from 'lucide-react';
import './WhyX8.css';

const reasons = [
  {
    icon: <Layers size={32} />,
    title: '一站式執行',
    desc: '由設計、製作到現場搭建與執行，減少溝通成本，提升交付效率。',
  },
  {
    icon: <Store size={32} />,
    title: '熟悉商場及品牌活動',
    desc: '具備商場 POP-UP、展覽攤位及活動場地執行經驗，更理解品牌展示與現場運作需要。',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: '重視現場落地',
    desc: '不只停留在設計提案，更重視施工、時間管理與最終現場效果。',
  },
  {
    icon: <Package size={32} />,
    title: '支援推廣與配套',
    desc: '可配合牌照申請、Promoter 團隊、物流及倉存管理，讓項目更完整。',
  },
];

const WhyX8 = () => {
  return (
    <section id="why-x8" className="why-x8">
      <div className="container">
        <div className="why-x8-header">
          <span className="subtitle">WHY X8</span>
          <h2>為何選擇 X8？</h2>
          <p className="why-x8-intro">
            我們不只提供設計與製作，更以現場落地與完整配套為核心，助品牌高效完成每一個項目。
          </p>
        </div>

        <div className="why-x8-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-x8-card">
              <div className="why-x8-icon">{reason.icon}</div>
              <div className="why-x8-content">
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyX8;
