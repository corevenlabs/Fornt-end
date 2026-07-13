import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmationScreen({ nombre }) {
  return (
    <div className="confirmation-screen">
      <span className="step-badge">Solicitud enviada</span>
      <h2>
        Gracias{nombre ? `, ${nombre}` : ''}. <span>Ya recibimos tu proyecto.</span>
      </h2>
      <p>
        Nuestro equipo revisará la información y se pondrá en contacto contigo
        en menos de 24 horas hábiles.
      </p>
      <Link to="/" className="btn-secondary">Volver al inicio</Link>
    </div>
  );
}
