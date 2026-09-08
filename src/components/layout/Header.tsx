"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { serviceLinks } from '@/data/services';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Close menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
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

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
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
            <Link href="/" onClick={closeMenu}>首頁</Link>

            <div
              className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}
              ref={servicesRef}
            >
              <button
                type="button"
                className="nav-dropdown-toggle"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                服務
                <ChevronDown size={16} className="dropdown-chevron" />
              </button>
              <div className="nav-dropdown-menu">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" onClick={closeMenu}>關於我們</Link>
            <Link href="/contact" onClick={closeMenu}>聯絡我們</Link>
            
            <div className="mobile-actions">
              <Link href="https://wa.me/85252279172" target="_blank" onClick={closeMenu} className="btn-primary">
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
