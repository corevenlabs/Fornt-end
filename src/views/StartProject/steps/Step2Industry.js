import React from 'react';
import OptionButton from '../components/OptionButton';

const INDUSTRIES = [
  'Fintech',
  'Comercio Electrónico',
  'Salud',
  'Educación',
  'Logística',
  'Inmobiliario',
  'Manufactura',
  'Turismo y Hotelería',
  'Entretenimiento',
  'Servicios Profesionales',
  'Otro'
];

export default function Step2Industry({ formData, onChange }) {
  return (
    <div className="step-panel">
      <span className="step-panel-number">2</span>
      <h2>Industria</h2>
      <p className="step-panel-description">¿En qué sector opera tu empresa?</p>

      <div className="option-grid">
        {INDUSTRIES.map((industry) => (
          <OptionButton
            key={industry}
            label={industry}
            selected={formData.industria === industry}
            onClick={() => onChange({ industria: industry })}
          />
        ))}
      </div>
    </div>
  );
}
