import React from 'react';
import { PenTool, Ruler, Hammer, Settings } from 'lucide-react';
import './StoreRenovationServices.css';

const StoreRenovationServices = () => {
  const steps = [
    {
      id: '01',
      icon: <PenTool size={32} />,
      title: '室內設計與概念',
      desc: '深入了解品牌需求，提供創新的室內設計方案與 3D 效果圖，打造獨特商業空間。'
    },
    {
      id: '02',
      icon: <Ruler size={32} />,
      title: '空間規劃與測量',
      desc: '精確測量現場尺寸，優化空間佈局與動線設計，確保符合各項建築及消防條例。'
    },
    {
      id: '03',
      icon: <Hammer size={32} />,
      title: '工程施工與管理',
      desc: '經驗豐富的工程團隊嚴格把控施工質量與進度，提供泥水、木工、油漆等全方位服務。'
    },
    {
      id: '04',
      icon: <Settings size={32} />,
      title: '機電與設備安裝',
      desc: '專業機電工程師負責電力、空調及照明系統的安裝與調試，確保店鋪安全高效運作。'
    }
  ];

  return (
    <section className="store-renovation-process">
      <div className="container">
        <div className="store-renovation-process-header">
          <span className="subtitle">Workflow</span>
          <h2 className="section-title">專業服務流程</h2>
          <p className="section-desc">從設計概念到完工交付，為您提供一站式的店鋪裝修服務</p>
        </div>
        
        <div className="store-renovation-process-wrapper">
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

export default StoreRenovationServices;
