import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container cta-container">
        <div className="cta-text">
          <h2>準備好打造下一個震撼體驗？</h2>
          <p>與 X8 PRODUCTION 團隊聯繫，為您的品牌創造無限可能。</p>
        </div>
        <div className="cta-actions">
          <button className="btn-primary">
            <MessageCircle size={18} />
            WhatsApp 查詢
          </button>
          <button className="btn-primary">
            <Phone size={18} />
            +852 5227 9172
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;