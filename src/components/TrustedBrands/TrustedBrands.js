import React from "react";
import "./TrustedBrands.css";

const brands = [
  "/image/lenox.jpg",
  "/image/insigth.jpg",
  "/image/apex.png",
  "/image/vertex.png",
  "/image/camping.jpg",
  
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
            {[...brands, ...brands].map((logo, i) => (
              <div className="trusted-logo" key={i}>
                <img src={logo} alt="brand" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}