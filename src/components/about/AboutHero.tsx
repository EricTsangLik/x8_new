import React from 'react';
import Image from 'next/image';
import { Award, Users, ThumbsUp } from 'lucide-react';
import './AboutHero.css';

const AboutHero = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: '專業認證',
      desc: 'ISO質量認證與政府認可'
    },
    {
      icon: <Users size={32} />,
      title: '專業團隊',
      desc: '經驗豐富的設計與製作團隊'
    },
    {
      icon: <ThumbsUp size={32} />,
      title: '優質服務',
      desc: '一站式服務，從設計到執行'
    }
  ];

  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-wrapper">
          <div className="about-hero-content">
            <span className="subtitle">關於我們</span>
            <h1>X8 Production Limited</h1>
            
            <div className="about-hero-text">
              <p>
                在 X8 Production Limited，我們專注於提供全面的展覽解決方案，以滿足您的獨特需求。從創新的展覽攤位設計到無縫的活動執行與商場佈置，我們的專業團隊致力於為您創造難忘的展覽體驗。
              </p>
              <p>
                憑藉多年行業經驗，我們深知留下深刻印象的重要性。我們的創意方法確保每個項目都能反映您的品牌形象和訊息，吸引觀眾，提升您的能見度。
              </p>
              <p>
                讓我們幫助您提升下一次活動的效果。選擇 X8 Production Limited，享受無憂且具有影響力的展覽體驗，讓您的品牌脫穎而出。
              </p>
            </div>

            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="about-feature-item">
                  <div className="about-feature-icon">
                    {feature.icon}
                  </div>
                  <div className="about-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-hero-image">
            <div className="about-image-wrapper">
              <Image 
                src="/logo.jpeg" 
                alt="X8 Production Limited Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
