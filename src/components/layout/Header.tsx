"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes or window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/logo.jpeg" 
              alt="X8 PRODUCTION" 
              width={120} 
              height={45} 
              className="logo-img"
              priority
            />
          </Link>
        </div>
        
        <div className="header-right">
          <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <Link href="/" className="active" onClick={() => setIsMenuOpen(false)}>首頁</Link>
            <Link href="/services/mall-popup" onClick={() => setIsMenuOpen(false)}>商場 POP-UP</Link>
            <Link href="/services/store-renovation" onClick={() => setIsMenuOpen(false)}>店舖裝修工程</Link>
            <Link href="/services/roadshow" onClick={() => setIsMenuOpen(false)}>ROADSHOW 一站式推廣</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>關於我們</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>聯絡我們</Link>
            
            <div className="mobile-actions">
              <Link href="https://wa.me/85252279172" target="_blank" onClick={() => setIsMenuOpen(false)} className="btn-primary">
                <MessageCircle size={18} />
                WhatsApp 查詢
              </Link>
            </div>
          </nav>

          <div className="header-actions desktop-actions">
            <Link href="https://wa.me/85252279172" target="_blank" className="btn-primary">
              <MessageCircle size={18} />
              WhatsApp 查詢
            </Link>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;