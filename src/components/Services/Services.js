import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-header">
          <span className="services-badge">Expertise</span>
          <h2 className="services-title">
            Soluciones de <span>Próxima Generación</span>
          </h2>
          <p className="services-subtitle">
            Arquitecturas digitales diseñadas para el futuro de la web.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} to={`/servicios/${s.slug}`} className="service-panel">
              <div className="panel-content">
                <div className="panel-top">
                  <span className="panel-number">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="panel-title">{s.title}</h3>
                <p className="panel-description">{s.shortDescription}</p>

                <div className="panel-footer">
                  <span className="view-more">Explorar sistema</span>
                  <div className="arrow-icon">→</div>
                </div>
              </div>
              {/* Capa de luz decorativa interna */}
              <div className="panel-glow"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
