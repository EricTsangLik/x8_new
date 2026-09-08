import React from 'react';
import './RoadshowHero.css';

const positioning = [
  '適合證券、信用卡、保險及金融產品地推活動。',
  '熟悉 KPI-Driven 獲客活動流程與現場需要。',
  '可支援 Promoter、人流、物資、場地及物流協調。',
];

const RoadshowHero = () => {
  return (
    <section className="roadshow-hero">
      <div className="container roadshow-hero-container">
        <div className="roadshow-hero-content">
          <h1>ROADSHOW 一站式推廣</h1>
          <p>商場展覽位置租用｜活動製作｜Promoter 團隊｜倉存管理｜物流支援｜宣傳車</p>
          <div className="roadshow-hero-desc">
            X8 Production 為金融、證券、信用卡、保險及其他需要跑數與獲客的品牌提供 Roadshow 一站式推廣支援，從場地安排、製作執行到推廣團隊與物流配套，協助客戶更有效落地 KPI 導向活動。
          </div>
          <ul className="roadshow-positioning">
            {positioning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RoadshowHero;
