import React from 'react';
import OptionButton from '../components/OptionButton';

const PROJECT_TYPES = [
  'Sitio Web / Landing Page',
  'Aplicación Web',
  'Integración de APIs',
  'Automatización de Procesos',
  'Tienda Online / E-commerce',
  'Otro'
];

export default function Step3ProjectType({ formData, onChange }) {
  return (
    <div className="step-panel">
      <span className="step-panel-number">3</span>
      <h2>Tipo de proyecto</h2>
      <p className="step-panel-description">¿Qué tipo de solución necesitas?</p>

      <div className="option-grid">
        {PROJECT_TYPES.map((type) => (
          <OptionButton
            key={type}
            label={type}
            selected={formData.tipoProyecto === type}
            onClick={() => onChange({ tipoProyecto: type })}
          />
        ))}
      </div>
    </div>
  );
}
