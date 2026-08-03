import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1>專業活動製作<br />創造非凡體驗</h1>
          <p>商場 POP-UP | BACKDROP | 展覽搭建 | 噴畫及印刷 | 店鋪裝修工程</p>
          <button className="btn-primary hero-btn">
            <MessageCircle size={18} />
            WhatsApp 查詢
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="hero-image-placeholder">
        {/* Background image will be set in CSS */}
      </div>
    </section>
  );
};

export default Hero;