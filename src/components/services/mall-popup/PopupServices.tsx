import React from 'react';
import { PenTool, Ruler, Hammer, Settings } from 'lucide-react';
import './PopupServices.css';

const PopupServices = () => {
  const steps = [
    {
      id: '01',
      icon: <PenTool size={32} />,
      title: '概念與 3D 設計',
      desc: '根據品牌形象與活動主題，提供具創意的 POP-UP 攤位設計及 3D 效果圖。'
    },
    {
      id: '02',
      icon: <Ruler size={32} />,
      title: '場地測量與規劃',
      desc: '實地考察商場環境，精準測量並規劃動線，確保符合商場安全及消防指引。'
    },
    {
      id: '03',
      icon: <Hammer size={32} />,
      title: '道具製作與印刷',
      desc: '自設廠房製作各類展覽道具、木工結構及高清噴畫，保證質量與進度。'
    },
    {
      id: '04',
      icon: <Settings size={32} />,
      title: '現場搭建與拆卸',
      desc: '專業工程團隊於深夜時段進行快速搭建及活動後的還原工程，不影響商場運作。'
    }
  ];

  return (
    <section className="popup-process">
      <div className="container">
        <div className="popup-process-header">
          <span className="subtitle">Workflow</span>
          <h2 className="section-title">專業服務流程</h2>
          <p className="section-desc">從概念到落地，為您提供一站式的商場展覽製作服務</p>
        </div>
        
        <div className="popup-process-wrapper">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.id}</div>
              <div className="process-content">
                <div className="process-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="process-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopupServices;
