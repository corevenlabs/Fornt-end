import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/image/banner.data.jpg',
    badge: 'Desarrollo Web',
    description: 'Diseñamos experiencias digitales pensadas para vender y escalar.'
  },
  {
    image: '/image/banner.jpg',
    badge: 'Integraciones API',
    description: 'Automatizamos procesos y eliminamos tareas manuales.'
  },
  {
    image: '/image/bannerspago.jpg',
    badge: 'Pagos Online',
    description: 'Implementamos pasarelas de pago listas para escalar tu negocio.'
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="hero">

      {/* fondo dinámico */}
      <div className="hero-bg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`bg-layer ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* contenido */}
      <div className="hero-container">
        <div className="hero-content">

          <span key={index + '-b'} className="hero-badge fade">
            {current.badge}
          </span>

          <h1>
            Software a medida que <span>escala tu negocio</span>
          </h1>

          <p key={index + '-p'} className="fade">
            {current.description}
          </p>

          <div className="hero-actions">
            <Link to="/comenzar" className="btn-primary">Comenzar Proyecto</Link>
            <a href="#servicios" className="btn-secondary">Ver Servicios</a>
          </div>

        </div>
      </div>

    </section>
  );
}