import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const SECTION_LINKS = [
  { hash: '#inicio', label: 'Inicio' },
  { hash: '#servicios', label: 'Servicios' },
  { hash: '#diseño', label: 'Diseño' },
  { hash: '#equipo', label: 'Equipo' },
  { hash: '#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const renderSectionLink = (hash, label, className, onClick) => (
    isHome ? (
      <a key={hash} href={hash} className={className} onClick={onClick}>{label}</a>
    ) : (
      <Link key={hash} to={`/${hash}`} className={className} onClick={onClick}>{label}</Link>
    )
  );

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <div className="navbar-logo">
          <Link to="/">
            <img src="/image/coreven-logo.svg" alt="Corevenlabs" className="navbar-logo-icon" />
            COREVENLABS
          </Link>
        </div>


        <div className="navbar-menu">
          {SECTION_LINKS.map(({ hash, label }) => renderSectionLink(hash, label, 'nav-link'))}
          <Link to="/comenzar" className="btn-primary btn-sm">Comenzar Proyecto</Link>
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
        {SECTION_LINKS.map(({ hash, label }) => renderSectionLink(hash, label, undefined, handleNavClick))}
        <Link to="/comenzar" className="btn-primary btn-sm" onClick={handleNavClick}>Comenzar Proyecto</Link>
      </div>
    </nav>
  );
}
