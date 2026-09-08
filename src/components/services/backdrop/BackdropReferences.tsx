import React from 'react';
import './BackdropReferences.css';

const cases = [
  { title: '商業展覽', desc: '展覽現場品牌背景幕' },
  { title: '活動舞台', desc: '舞台及活動主視覺背景' },
  { title: '產品發布', desc: '發布會及媒體拍攝背景' },
  { title: '品牌推廣', desc: '商場及推廣活動背景幕' },
];

const BackdropReferences = () => {
  return (
    <section className="backdrop-references">
      <div className="container">
        <div className="backdrop-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="backdrop-references-grid">
          {cases.map((item) => (
            <article key={item.title} className="backdrop-reference-card">
              <div className="backdrop-reference-placeholder" aria-hidden="true">
                <span>{item.title}</span>
              </div>
              <div className="backdrop-reference-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackdropReferences;
