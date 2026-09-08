import React from 'react';
import { MapPin, Hammer, Users, Package, Truck, Megaphone } from 'lucide-react';
import './RoadshowServices.css';

const items = [
  {
    icon: <MapPin size={32} />,
    title: '場地預訂',
    desc: '協助安排合適推廣位置，配合活動人流與曝光需求。',
  },
  {
    icon: <Hammer size={32} />,
    title: '活動製作',
    desc: '提供推廣檯、展示物料、場地配置與現場製作支援。',
  },
  {
    icon: <Users size={32} />,
    title: 'Promoter 推廣團隊',
    desc: '配合活動形式安排推廣人手，提升接觸率與執行效率。',
  },
  {
    icon: <Package size={32} />,
    title: '倉存管理',
    desc: '為活動物資提供更有系統的儲存與調配安排。',
  },
  {
    icon: <Truck size={32} />,
    title: '物流支援',
    desc: '協調物資運送、到場及回收流程，減少現場執行壓力。',
  },
  {
    icon: <Megaphone size={32} />,
    title: '宣傳車',
    desc: '',
  },
];

const RoadshowServices = () => {
  return (
    <section className="roadshow-process">
      <div className="container">
        <div className="roadshow-process-header">
          <h2 className="section-title">服務項目</h2>
        </div>

        <div className="roadshow-process-wrapper">
          {items.map((item) => (
            <div key={item.title} className="process-step">
              <div className="process-content">
                <div className="process-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="process-title">{item.title}</h3>
                {item.desc ? <p className="process-desc">{item.desc}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadshowServices;
