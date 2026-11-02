"use client";

import React, { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import './ContactSection.css';

const WHATSAPP_NUMBER = '85252279172';

const SERVICE_LABELS: Record<string, string> = {
  'mall-popup': '商場 POP-UP',
  'store-renovation': '店舖裝修工程',
  roadshow: 'ROADSHOW 一站式推廣',
  printing: '專業印刷服務',
  backdrop: 'BackDrop 設計與製作',
  'exhibition-booth': '展覽攤位製作',
  'event-decoration': '活動佈置裝飾',
  'license-application': '設計及牌照申請服務',
  'equipment-rental': '設備租賃服務',
  lightbox: '廣告燈箱',
  'mall-sale': '商場特賣場製作',
  'mall-decoration': '商場裝飾佈置',
  'christmas-mall': '聖誕商場佈置',
  'new-year-mall': '新年商場佈置',
  other: '其他查詢',
};

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (String(data.company ?? '').trim()) {
      return;
    }

    const serviceLabel = SERVICE_LABELS[String(data.subject)] || '未指定服務';
    const text = [
      'X8 PRODUCTION 網站查詢',
      `姓名：${data.name}`,
      `電郵：${data.email}`,
      `電話：${data.phone}`,
      `查詢服務：${serviceLabel}`,
      '',
      '訊息內容：',
      data.message,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setStatus('success');
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>聯絡資訊</h2>
            <p className="contact-info-desc">
              如果您有任何疑問或需要報價，歡迎透過以下方式與我們聯絡，我們會盡快回覆您。
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <h3>電話 / WhatsApp</h3>
                  <p>+852 5227 9172</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <h3>電郵地址</h3>
                  <p>info.x8production@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h3>辦公室地址</h3>
                  <p>香港九龍觀塘區觀塘道418號創紀之城五期17樓1701室</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <div className="info-text">
                  <h3>辦公時間</h3>
                  <p>星期一至五: 09:30 - 18:30</p>
                  <p>星期六、日及公眾假期休息</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>線上查詢</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input type="text" id="name" name="name" placeholder="您的姓名" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">電郵地址 *</label>
                <input type="email" id="email" name="email" placeholder="您的電郵地址" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">聯絡電話 *</label>
                <input type="tel" id="phone" name="phone" placeholder="您的聯絡電話" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">查詢服務</label>
                <select id="subject" name="subject">
                  <option value="">請選擇相關服務...</option>
                  <option value="mall-popup">商場 POP-UP</option>
                  <option value="store-renovation">店舖裝修工程</option>
                  <option value="roadshow">ROADSHOW 一站式推廣</option>
                  <option value="printing">專業印刷服務</option>
                  <option value="backdrop">BackDrop 設計與製作</option>
                  <option value="exhibition-booth">展覽攤位製作</option>
                  <option value="event-decoration">活動佈置裝飾</option>
                  <option value="license-application">設計及牌照申請服務</option>
                  <option value="equipment-rental">設備租賃服務</option>
                  <option value="lightbox">廣告燈箱</option>
                  <option value="mall-sale">商場特賣場製作</option>
                  <option value="mall-decoration">商場裝飾佈置</option>
                  <option value="christmas-mall">聖誕商場佈置</option>
                  <option value="new-year-mall">新年商場佈置</option>
                  <option value="other">其他查詢</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">訊息內容 *</label>
                <textarea id="message" name="message" rows={5} placeholder="請輸入您的查詢內容..." required />
              </div>

              {status === 'success' && (
                <p className="form-status form-status-success">
                  已開啟 WhatsApp，請按發送把查詢交給我們。
                </p>
              )}

              <button type="submit" className="btn-gold submit-btn">
                <MessageCircle size={18} />
                WhatsApp 發送
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
