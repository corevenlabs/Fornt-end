import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SERVICES, getServiceBySlug } from '../../data/services';
import Seo from '../../components/Seo/Seo';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const index = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(index + 1) % SERVICES.length];

  return (
    <section className="service-detail">
      <Seo
        title={service.title}
        description={service.heroDescription}
        canonical={`https://www.corevenlabs.com/servicios/${service.slug}`}
      />

      <div className="service-detail-container">
        <Link to="/#servicios" className="back-link">← Volver a servicios</Link>

        <div className="service-hero">
          <h1>{service.title}</h1>
          <p>{service.heroDescription}</p>
          <div className="service-hero-actions">
            <Link to="/comenzar" className="btn-primary">Comenzar Proyecto</Link>
            <Link to="/#contacto" className="btn-secondary">Contáctanos</Link>
          </div>
        </div>

        <div className="service-section">
          <span className="service-eyebrow">¿Qué hacemos?</span>
          <h2>{service.title}</h2>
          <p>{service.whatWeDo}</p>
        </div>

        <div className="service-section">
          <h2>Nuestro enfoque</h2>
          <div className="approach-grid">
            {service.approach.map((item, i) => (
              <div className="approach-card" key={item.title}>
                <span className="approach-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-section">
          <h2>¿Por qué elegirnos?</h2>
          <ul className="why-list">
            {service.whyChooseUs.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="service-final-cta">
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>Cuéntanos sobre tu proyecto y te ayudamos a encontrar la mejor solución.</p>
          <div className="service-hero-actions">
            <Link to="/comenzar" className="btn-primary">Comenzar Proyecto</Link>
            <Link to="/#servicios" className="btn-secondary">Ver todos los servicios</Link>
          </div>
        </div>

        <div className="service-pagination">
          <Link to={`/servicios/${prevService.slug}`} className="service-pagination-link">
            <span>Anterior</span>
            {prevService.title}
          </Link>
          <Link to={`/servicios/${nextService.slug}`} className="service-pagination-link align-right">
            <span>Siguiente</span>
            {nextService.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
