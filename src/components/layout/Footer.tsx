import React from 'react';
import Link from 'next/link';
import { serviceLinks } from '@/data/services';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            X8 PRODUCTION
          </Link>
          <p>專業活動製作，創造非凡體驗。</p>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4>服務</h4>
            <ul>
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>公司</h4>
            <ul>
              <li><Link href="/">首頁</Link></li>
              <li><Link href="/about">關於我們</Link></li>
              <li><Link href="/contact">聯絡我們</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} X8 PRODUCTION. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
