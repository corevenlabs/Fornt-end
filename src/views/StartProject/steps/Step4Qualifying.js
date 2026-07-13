import React from 'react';
import OptionButton from '../components/OptionButton';

const QUESTIONS = [
  {
    field: 'claridad',
    question: '¿Qué tan claro tienes lo que quieres construir?',
    options: [
      'Sé exactamente qué construir',
      'Tengo una idea, falta definir alcance',
      'Sé que tengo un problema, no sé cómo resolverlo'
    ]
  },
  {
    field: 'timeline',
    question: '¿Cuándo necesitas tener una primera versión?',
    options: ['Pronto, en semanas', 'En unos meses', 'Sin fecha clara aún']
  },
  {
    field: 'integraciones',
    question: '¿Necesitas conectarlo con sistemas que ya tienes?',
    options: [
      'Sí, varios sistemas internos',
      'Tal vez alguna integración puntual',
      'No, algo nuevo desde cero'
    ]
  }
];

export default function Step4Qualifying({ formData, onChange }) {
  return (
    <div className="step-panel">
      <span className="step-panel-number">4</span>
      <h2>Ayúdanos a entender tu proyecto</h2>
      <p className="step-panel-description">Tres preguntas rápidas para preparar la conversación contigo</p>

      <div className="qualifying-questions">
        {QUESTIONS.map(({ field, question, options }) => (
          <div className="qualifying-question" key={field}>
            <p className="qualifying-label">{question}</p>
            <div className="option-list">
              {options.map((option) => (
                <OptionButton
                  key={option}
                  label={option}
                  selected={formData[field] === option}
                  onClick={() => onChange({ [field]: option })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
