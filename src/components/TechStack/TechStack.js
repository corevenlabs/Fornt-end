import React from "react";
import "./TechStack.css";

const team = [
  {
    name: "Orlando Monroy",
    role: "Senior Full-Stack Developer · TI",
    description:
      "Lidera la visión técnica de Corevenlabs. Años de experiencia convirtiendo retos complejos en productos sólidos, escalables y bien construidos.",
    image: "/image/team/orlandito.jpeg",
    position: "center 38%",
  },
  {
    name: "Jose Betancourt",
    role: "Full-Stack Developer",
    description:
      "Desarrollador versátil y resolutivo, enfocado en crear experiencias digitales cuidadas y soluciones que hacen avanzar cada proyecto.",
    image: "/image/team/jose.jpeg",
    position: "center 28%",
  },
];

export default function TechStack() {
  return (
    <section className="team" aria-labelledby="team-title">
      <div className="team-orb" aria-hidden="true" />

      <div className="team-container">
        <header className="team-header">
          <div className="team-heading">
            <span className="team-eyebrow">Las personas detrás del código</span>
            <h2 id="team-title" className="team-title">
              Dos perspectivas.<br />
              <span>Un mismo propósito.</span>
            </h2>
          </div>

          <p className="team-intro">
            Estrategia, tecnología y detalle humano. Somos un equipo compacto que se
            involucra de verdad en cada idea y la lleva de concepto a realidad.
          </p>
        </header>

        <div className="team-grid">
          {team.map((member, index) => (
            <article className="member-card" key={member.name} tabIndex="0">
              <img
                className="member-photo"
                src={member.image}
                alt={`Retrato de ${member.name}`}
                style={{ objectPosition: member.position }}
                loading="lazy"
                width="900"
                height="1100"
              />
              <div className="member-shade" aria-hidden="true" />

              <span className="member-index" aria-hidden="true">
                0{index + 1}
              </span>

              <div className="member-content">
                <p className="member-role">{member.role}</p>
                <h3 className="member-name">{member.name}</h3>
                <div className="member-details">
                  <span className="member-line" aria-hidden="true" />
                  <p>{member.description}</p>
                </div>
              </div>

              <span className="member-cue" aria-hidden="true">
                <span>Conocer perfil</span>
                <span className="member-cue-arrow">↗</span>
              </span>
            </article>
          ))}
        </div>

        <div className="team-footer" aria-hidden="true">
          <span>Corevenlabs / Equipo</span>
          <span className="team-footer-line" />
          <span>Santiago · Chile</span>
        </div>
      </div>
    </section>
  );
}
