import React from 'react';
import './PopupHero.css';

const PopupHero = () => {
  return (
    <section className="popup-hero">
      <div className="container popup-hero-container">
        <div className="popup-hero-content">
          <h1>商場 POP-UP</h1>
          <p>創意設計 · 空間規劃 · 快速搭建</p>
          <div className="popup-hero-desc">
            我們深明商場推廣活動的節奏與需求。憑藉豐富的實戰經驗，我們為各大品牌提供從概念構思、3D 設計、道具製作到現場搭建的一站式 POP-UP 解決方案，助您在有限空間內最大化品牌曝光率。
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopupHero;