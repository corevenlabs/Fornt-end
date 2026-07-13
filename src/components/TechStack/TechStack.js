import React from "react";
import "./TechStack.css";

const technologies = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Css", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Cloud", level: "Architect" },
];

export default function TechStack() {
  return (
    <section className="tech">
      <div className="tech-header">
        <h2 className="tech-title">
          Stack <span>Tecnológico</span>
        </h2>
        <p className="tech-subtitle">
          Herramientas de alto rendimiento para soluciones escalables.
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {/* Renderizamos dos veces para el efecto infinito */}
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="tech-card">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-level">{tech.level}</span>
            </div>
          ))}
        </div>

        {/* Capas de degradado para el efecto de "aparición" desde la oscuridad */}
        <div className="marquee-fade left"></div>
        <div className="marquee-fade right"></div>
      </div>
    </section>
  );
}
