import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
     
        <div className="navbar-logo">
          <a href="#inicio">COREVENLABS</a>
        </div>

    
        <div className="navbar-menu">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#diseño" className="nav-link">Diseño</a>
          <a href="#stack" className="nav-link">Stack</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>

   
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={handleNavClick}>Inicio</a>
        <a href="#servicios" onClick={handleNavClick}>Servicios</a>
        <a href="#diseño" onClick={handleNavClick}>Diseño</a>
        <a href="#stack" onClick={handleNavClick}>Stack</a>
        <a href="#contacto" onClick={handleNavClick}>Contacto</a>
      </div>
    </nav>
  );
}