"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, Phone } from 'lucide-react';
import { serviceNameFromPath, whatsappEnquiryHref } from '@/lib/whatsapp';
import './ContactCTA.css';

type ContactCTAProps = {
  heading?: string;
  copy?: string;
  serviceName?: string;
};

const ContactCTA = ({
  heading = '準備好打造下一個震撼體驗？',
  copy = '與 X8 PRODUCTION 團隊聯繫，為您的品牌創造無限可能。',
  serviceName,
}: ContactCTAProps) => {
  const pathname = usePathname();
  const service = serviceName || serviceNameFromPath(pathname);
  const whatsappUrl = whatsappEnquiryHref(service);

  return (
    <section className="contact-cta">
      <div className="container cta-container">
        <div className="cta-text">
          <h2>{heading}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            WhatsApp 查詢
          </a>
          <a href="tel:+85252279172" className="btn-primary">
            <Phone size={18} />
            +852 5227 9172
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
