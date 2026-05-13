import React, { useState, useEffect } from 'react';
import './DesignShowcase.css';

const showcaseImages = [
  "/image/web.jpg",
  "/image/web1.jpg",
  "/image/web3.jpg"
];

export default function DesignShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="showcase">
      <div className="showcase-container">
        
        <div className="showcase-text">
          <span className="showcase-badge">Estética & Precisión</span>
          <h2 className="showcase-title">
            Diseños <span>Elegantes</span> <br /> para Marcas Visionarias
          </h2>
          <p className="showcase-description">
            No solo creamos interfaces; esculpimos experiencias digitales donde el minimalismo se encuentra con la funcionalidad de alto rendimiento.
          </p>
          <ul className="showcase-features">
            <li>Filosofía Minimalista</li>
            <li>Optimización de Carga</li>
            <li>Arquitectura Mobile-First</li>
          </ul>
        </div>

        <div className="showcase-visual">
          {/* Contenedor limpio sin bordes ni fondos */}
          <div className="image-viewport">
            {showcaseImages.map((img, i) => (
              <div 
                key={i} 
                className={`showcase-img ${i === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          
          <div className="showcase-dots">
            {showcaseImages.map((_, i) => (
              <div key={i} className={`dot ${i === index ? 'active' : ''}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}