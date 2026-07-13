import React from "react";
import "./TrustedBrands.css";

const brands = [
  { src: "/image/lenox.jpg", name: "Lenox" },
  { src: "/image/insigth.jpg", name: "Insight" },
  { src: "/image/apex.png", name: "Apex" },
  { src: "/image/vertex.png", name: "Vertex" },
  { src: "/image/camping.jpg", name: "Camping" },
];

export default function TrustedBrands() {
  return (
    <section className="trusted">
      <div className="trusted-container">

        <div className="trusted-header">
          <span className="trusted-badge">
            Confianza & Colaboración
          </span>

          <h2 className="trusted-title">
            Empresas que han confiado <br />
            en <span>nuestro trabajo</span>
          </h2>

          <p className="trusted-description">
            Colaboramos con marcas modernas que buscan experiencias
            digitales limpias, rápidas y memorables.
          </p>
        </div>

        <div className="trusted-slider">
          <div className="trusted-track">
            {[...brands, ...brands].map((brand, i) => (
              <div className="trusted-logo" key={i}>
                <img src={brand.src} alt={`Logo de ${brand.name}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}