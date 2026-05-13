import React from 'react';
import './Footer.css';

export default function Footer() {
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
              <a href="#hero">Inicio</a>
              <a href="#services">Servicios</a>
              <a href="#showcase">Showcase</a>
            </nav>
          </div>

          {/* Columna 3: Social */}
          <div className="footer-col">
            <h4 className="footer-label">Social</h4>
            <nav className="footer-nav">
              <a href="#linkedin" target="_blank">LinkedIn</a>
              <a href="#github" target="_blank">GitHub</a>
              <a href="#instagram" target="_blank">Instagram</a>
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