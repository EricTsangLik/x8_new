import React from 'react';
import './PrintingReferences.css';

const cases = [
  { title: '名片', desc: '企業與個人名片印刷' },
  { title: '宣傳單張', desc: '活動及推廣單張印刷' },
  { title: '海報', desc: '高清海報及展示印刷' },
  { title: '大型展覽展示品', desc: '展覽及現場大型噴畫展示' },
];

const PrintingReferences = () => {
  return (
    <section className="printing-references">
      <div className="container">
        <div className="printing-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="printing-references-grid">
          {cases.map((item) => (
            <article key={item.title} className="printing-reference-card">
              <div className="printing-reference-placeholder" aria-hidden="true">
                <span>{item.title}</span>
              </div>
              <div className="printing-reference-body">
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

export default PrintingReferences;
