import React, { useEffect } from 'react';
import Lenis from 'lenis';
import './Home.css';

// Importación de tus componentes
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import DesignShowcase from '../../components/DesignShowcase/DesignShowcase';
import TechStack from '../../components/TechStack/TechStack';
import ContactForm from '../../components/ContactForm/ContactForm';


export default function Home() {
  
  useEffect(() => {
    // 1. Inicializamos Lenis
    const lenis = new Lenis({
      duration: 1.5, // Tiempo que tarda en llegar (más alto = más lento/elegante)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Lógica para interceptar clics del Navbar
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      // Verificamos si es un link interno (que empieza con #)
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        
        // Lenis realiza el scroll suave hacia el ID
        lenis.scrollTo(id, {
          offset: -80, // Para que no tape el título el Navbar fijo
          immediate: false,
          duration: 1.5,
        });
      }
    };

    // Escuchamos los clics en todo el documento (delegación de eventos)
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <main className="home-content">
        <div id="inicio"><Hero /></div>
        
        <section id="servicios" className="reveal-section">
          <Services />
        </section>

        <section id="diseño" className="reveal-section">
          <DesignShowcase />
        </section>

        <section id="stack" className="reveal-section">
          <TechStack />
        </section>

        <section id="contacto" className="reveal-section">
          <ContactForm />
        </section>

      </main>
    </div>
  );
}