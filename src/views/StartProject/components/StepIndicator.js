import React from 'react';

const STEP_LABELS = ['Contacto', 'Industria', 'Proyecto', 'Detalles', 'Revisión'];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator">
      {STEP_LABELS.map((label, i) => (
        <div
          key={label}
          className={`step-item ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'done' : ''}`}
        >
          <span className="step-number">{i + 1}</span>
          <span className="step-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
