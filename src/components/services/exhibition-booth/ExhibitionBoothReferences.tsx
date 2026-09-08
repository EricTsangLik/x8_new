import React from 'react';
import './ExhibitionBoothReferences.css';

const cases = [
  { title: '概念規劃', desc: '展位動線與空間概念規劃' },
  { title: '平面設計', desc: '品牌視覺與展位平面設計' },
  { title: '材料選擇', desc: '高品質結構與展示物料' },
  { title: '施工安裝', desc: '現場搭建與準時交付' },
];

const ExhibitionBoothReferences = () => {
  return (
    <section className="exhibition-booth-references">
      <div className="container">
        <div className="exhibition-booth-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="exhibition-booth-references-grid">
          {cases.map((item) => (
            <article key={item.title} className="exhibition-booth-reference-card">
              <div className="exhibition-booth-reference-placeholder" aria-hidden="true">
                <span>{item.title}</span>
              </div>
              <div className="exhibition-booth-reference-body">
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

export default ExhibitionBoothReferences;
