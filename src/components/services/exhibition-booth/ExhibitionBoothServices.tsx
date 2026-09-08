import React from 'react';
import { PenTool, Hammer, Clock } from 'lucide-react';
import './ExhibitionBoothServices.css';

const steps = [
  {
    id: '01',
    icon: <PenTool size={32} />,
    title: '創意設計',
    desc: '專業設計團隊為您量身打造獨特的攤位設計，突出品牌特色',
  },
  {
    id: '02',
    icon: <Hammer size={32} />,
    title: '專業搭建',
    desc: '經驗豐富的搭建團隊，確保攤位安全穩固，細節完美呈現',
  },
  {
    id: '03',
    icon: <Clock size={32} />,
    title: '快速交付',
    desc: '高效的製作流程，48小時內完成攤位搭建，準時交付',
  },
];

const ExhibitionBoothServices = () => {
  return (
    <section className="exhibition-booth-process">
      <div className="container">
        <div className="exhibition-booth-process-header">
          <span className="subtitle">Workflow</span>
          <h2 className="section-title">專業攤位製作服務</h2>
          <p className="section-desc">
            從創意設計到專業搭建，我們提供全方位的展覽攤位製作服務。擁有豐富的展覽經驗和專業的製作團隊，確保您的品牌在展覽中獲得最大曝光效果。
          </p>
        </div>

        <div className="exhibition-booth-process-wrapper">
          {steps.map((step) => (
            <div key={step.id} className="exhibition-booth-step">
              <div className="exhibition-booth-number">{step.id}</div>
              <div className="exhibition-booth-content">
                <div className="exhibition-booth-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="exhibition-booth-title">{step.title}</h3>
                <p className="exhibition-booth-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionBoothServices;
