import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../asset/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header${scrolled ? ' scrolled' : ''}`}> 
      <div className="header-logo" onClick={() => scrollToSection('banner')}>
        <img src={logo} alt="logo" className="logo-img" />
        <span>Tiệm Trà Nhà Bưởi</span>
      </div>
      <nav className="header-nav">
        <span onClick={() => scrollToSection('banner')}>Trang chủ</span>
        <span onClick={() => scrollToSection('about')}>Giới thiệu</span>
        <span onClick={() => scrollToSection('gallery')}>Menu</span>
        <span onClick={() => scrollToSection('contact')}>Liên hệ</span>
      </nav>
    </header>
  );
}

export default Header; 