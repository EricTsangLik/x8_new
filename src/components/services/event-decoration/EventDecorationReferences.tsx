import React from 'react';
import './EventDecorationReferences.css';

const cases = [
  { title: '品牌推廣', desc: '品牌活動現場佈置與裝飾' },
  { title: '慶典活動', desc: '慶典主題場景與氛圍佈置' },
  { title: '婚禮佈置', desc: '婚禮場地設計與現場佈置' },
  { title: '公司聚會', desc: '企業活動及聚會空間裝飾' },
];

const EventDecorationReferences = () => {
  return (
    <section className="event-decoration-references">
      <div className="container">
        <div className="event-decoration-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="event-decoration-references-grid">
          {cases.map((item) => (
            <article key={item.title} className="event-decoration-reference-card">
              <div className="event-decoration-reference-placeholder" aria-hidden="true">
                <span>{item.title}</span>
              </div>
              <div className="event-decoration-reference-body">
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

export default EventDecorationReferences;
