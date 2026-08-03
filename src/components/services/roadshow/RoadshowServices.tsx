import React from 'react';
import { Target, Users, Truck, Megaphone } from 'lucide-react';
import './RoadshowServices.css';

const RoadshowServices = () => {
  const steps = [
    {
      id: '01',
      icon: <Target size={32} />,
      title: '策略規劃與場地',
      desc: '根據品牌目標制定推廣策略，並協助聯絡及租用合適的商場或戶外場地。'
    },
    {
      id: '02',
      icon: <Truck size={32} />,
      title: '物資製作與物流',
      desc: '設計及製作宣傳物資、攤位道具，並提供完善的物流運輸與現場佈置服務。'
    },
    {
      id: '03',
      icon: <Users size={32} />,
      title: '專業推廣團隊',
      desc: '提供經驗豐富的品牌大使（Promoter）、司儀及工作人員，確保活動順利進行。'
    },
    {
      id: '04',
      icon: <Megaphone size={32} />,
      title: '現場執行與管理',
      desc: '全程監控活動進度，靈密應對突發情況，並在活動後提供成效分析報告。'
    }
  ];

  return (
    <section className="roadshow-process">
      <div className="container">
        <div className="roadshow-process-header">
          <span className="subtitle">Workflow</span>
          <h2 className="section-title">專業服務流程</h2>
          <p className="section-desc">從策劃到執行，為您打造最具影響力的 ROADSHOW 活動</p>
        </div>
        
        <div className="roadshow-process-wrapper">
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

export default RoadshowServices;
