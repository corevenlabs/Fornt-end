import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const NAV_LINKS = [
  { hash: '#inicio', label: 'Inicio' },
  { hash: '#servicios', label: 'Servicios' },
  { hash: '#diseño', label: 'Diseño' }
];

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="minimal-footer">
      <div className="footer-container">

        <div className="footer-main">
          {/* Columna 1: Brand/Status */}
          <div className="footer-col">
            <div className="footer-status">
              <span className="status-dot"></span>
              <span className="status-text">SYSTEM ONLINE / 2026</span>
            </div>
            <p className="footer-tagline">Arquitecturas digitales de alto impacto.</p>
          </div>

          {/* Columna 2: Navegación Interna */}
          <div className="footer-col">
            <h4 className="footer-label">Navegación</h4>
            <nav className="footer-nav">
              {NAV_LINKS.map(({ hash, label }) => (
                isHome ? (
                  <a key={hash} href={hash}>{label}</a>
                ) : (
                  <Link key={hash} to={`/${hash}`}>{label}</Link>
                )
              ))}
              <Link to="/comenzar">Comenzar Proyecto</Link>
            </nav>
          </div>

          {/* Columna 3: Social */}
          <div className="footer-col">
            <h4 className="footer-label">Social</h4>
            <nav className="footer-nav">
              <a href="https://instagram.com/corevenlabs" target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <p>© COREVEN — Professional Developer.</p>
          </div>
          <div className="bottom-right">
            <p>SANTIAGO, CL [ 33.4489° S, 70.6693° W ]</p>
          </div>
        </div>

      </div>
    </footer>
  );
}