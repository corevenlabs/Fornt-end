import React from "react";
import { Link } from "react-router-dom";
import "./FinalTouch.css";

export default function FinalTouch() {
  return (
    <section className="final-cta">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-badge">Ready to build?</span>
          <h2 className="cta-title">
            Hagamos realidad tu <span>próximo sistema</span>
          </h2>
          <p className="cta-description">
            Actualmente aceptando proyectos selectos para 2026. Si buscas
            exclusividad técnica y diseño de vanguardia, hablemos.
          </p>
        </div>

        <Link to="/comenzar" className="btn-primary">
          Iniciar Proyecto
        </Link>
        <p className="form-note">Responderemos en menos de 24 horas hábiles.</p>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="footer-line"></div>
    </section>
  );
}
