import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Desarrollo Web',
    tag: 'Next.js / React',
    description: 'Interfaces de alto rendimiento que fusionan estética con una arquitectura técnica impecable.'
  },
  {
    title: 'Integración',
    tag: 'APIs / Cloud',
    description: 'Ecosistemas conectados donde cada dato fluye con precisión quirúrgica entre tus plataformas.'
  },
  {
    title: 'Automatización',
    tag: 'AI / Workflow',
    description: 'Sistemas inteligentes que eliminan la fricción operativa, permitiéndote escalar sin límites.'
  }
];

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
          {services.map((s, i) => (
            <div key={i} className="service-panel">
              <div className="panel-content">
                <div className="panel-top">
                  <span className="panel-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="panel-tag">{s.tag}</span>
                </div>
                
                <h3 className="panel-title">{s.title}</h3>
                <p className="panel-description">{s.description}</p>
                
                <div className="panel-footer">
                  <span className="view-more">Explorar sistema</span>
                  <div className="arrow-icon">→</div>
                </div>
              </div>
              {/* Capa de luz decorativa interna */}
              <div className="panel-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}