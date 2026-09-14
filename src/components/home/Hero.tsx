import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          專業活動製作，
          <br />
          創造非凡體驗
        </h1>
        <p className="hero-services">
          商場 POP-UP｜BACKDROP｜展覽搭建｜噴畫及印刷｜店鋪裝修工程
        </p>
        <Link
          href="https://wa.me/85252279172"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          <MessageCircle size={18} />
          WhatsApp 查詢
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="hero-visual">
        <Image
          src="/首頁/hero.jpeg"
          alt="X8 PRODUCTION 活動製作現場：展覽攤位、商場 POP-UP 與店鋪裝修"
          width={2400}
          height={720}
          priority
          sizes="(max-width: 900px) 100vw, 65vw"
          className="hero-photo"
        />
      </div>
    </section>
  );
};

export default Hero;
