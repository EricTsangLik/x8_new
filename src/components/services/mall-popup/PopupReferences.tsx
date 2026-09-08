import React from 'react';
import Image from 'next/image';
import './PopupReferences.css';

const cases = [
  {
    title: 'Illit Pop-Up',
    venue: 'Element',
    scope: 'K-POP 韓星 POP-UP STORE：概念設計、場地規劃、道具製作與現場搭建。',
    result: '於 Element 落地高辨識度品牌空間，支援打卡、展覽與零售體驗。',
    images: [] as string[],
  },
  {
    title: 'aespa WEEK - MAKE IT LEMONADE',
    venue: 'The Wai',
    scope: '商場中庭大型 POP-UP STORE：主題結構、高清噴畫、LED 展示、零售陳列及人流動線。',
    result: '於 The Wai 完成完整主題空間，呈現品牌視覺並支援展覽、零售與粉絲互動。',
    images: [
      '/商場pop up/popup-2.jpeg',
      '/商場pop up/popup-3.jpeg',
      '/商場pop up/popup-4.jpeg',
      '/商場pop up/popup-5.jpeg',
      '/商場pop up/popup-1.jpeg',
      '/商場pop up/popup-6.jpeg',
      '/商場pop up/popup-7.jpeg',
      '/商場pop up/popup-8.jpeg',
    ],
  },
];

const PopupReferences = () => {
  return (
    <section className="popup-references">
      <div className="container">
        <div className="popup-references-header">
          <h2 className="section-title">精選案例</h2>
        </div>
        <div className="popup-cases">
          {cases.map((item) => (
            <article key={item.title} className="popup-case-card">
              {item.images.length > 0 ? (
                <div className="popup-case-gallery">
                  <div className="popup-case-image popup-case-image-main">
                    <Image
                      src={item.images[0]}
                      alt={`${item.title} - ${item.venue}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="popup-case-thumbs">
                    {item.images.slice(1, 5).map((src) => (
                      <div key={src} className="popup-case-image">
                        <Image
                          src={src}
                          alt={`${item.title} 現場`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="popup-case-placeholder" aria-hidden="true">
                  <span>{item.title}</span>
                </div>
              )}
              <div className="popup-case-body">
                <h3 className="popup-case-title">{item.title}</h3>
                <p className="popup-case-venue">{item.venue}</p>
                <dl className="popup-case-meta">
                  <div>
                    <dt>Scope</dt>
                    <dd>{item.scope}</dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{item.result}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopupReferences;
