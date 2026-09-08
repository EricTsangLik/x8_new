import React from 'react';
import './PrintingHero.css';

const PrintingHero = () => {
  return (
    <section className="printing-hero">
      <div className="container printing-hero-container">
        <div className="printing-hero-content">
          <h1>專業印刷服務</h1>
          <p>高品質印刷｜多樣化產品｜快速交付｜客製化方案｜專業印刷技術</p>
          <div className="printing-hero-lead">
            提供企業與個人客戶一站式專業印刷解決方案
          </div>
          <div className="printing-hero-desc">
            我們 X8 Production 專注於各類印刷需求，從名片、宣傳單張、海報到大型展覽展示品，提供高品質、多樣化的印刷產品，並且確保快速交付與客製化設計，滿足您的各種需求。
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingHero;
