import React from 'react';
import './FinalTouch.css';

export default function FinalTouch() {
  return (
    <section className="final-cta">
      <div className="cta-container">
        
        <div className="cta-content">
          <span className="cta-badge">Ready to build?</span>
          <h2 className="cta-title">Hagamos realidad tu <span>próximo sistema</span></h2>
          <p className="cta-description">
            Actualmente aceptando proyectos selectos para 2026. Si buscas exclusividad técnica y diseño de vanguardia, hablemos.
          </p>
        </div>

        <form className="cta-form">
          <div className="input-group">
            <input type="email" placeholder="Tu email institucional" required />
            <button type="submit">Iniciar Proyecto —</button>
          </div>
          <p className="form-note">Responderé en menos de 24 horas hábiles.</p>
        </form>

      </div>
      
      {/* Decoración de fondo sutil */}
      <div className="footer-line"></div>
    </section>
  );
}