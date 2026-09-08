import React from 'react';
import './BackdropHero.css';

const BackdropHero = () => {
  return (
    <section className="backdrop-hero">
      <div className="container backdrop-hero-container">
        <div className="backdrop-hero-content">
          <h1>BackDrop 設計與製作</h1>
          <p>創意設計｜高品質材料｜多樣尺寸｜專業安裝｜品牌形象提升</p>
          <div className="backdrop-hero-lead">
            為活動、展覽及品牌推廣提供專業背景幕解決方案
          </div>
          <div className="backdrop-hero-desc">
            X8 Production 專注於設計與製作各種 BackDrop，無論是商業展覽、活動舞台、產品發布或品牌推廣，我們提供多樣化的定制選擇，確保每一個背景都能完美展現品牌形象。
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackdropHero;
