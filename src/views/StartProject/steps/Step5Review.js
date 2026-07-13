import React from 'react';

export default function Step5Review({ formData, onChange, onEditStep }) {
  const handleChange = (e) => {
    onChange({ mensaje: e.target.value });
  };

  return (
    <div className="step-panel">
      <span className="step-panel-number">5</span>
      <h2>Revisión y envío</h2>
      <p className="step-panel-description">Confirma que todo esté correcto antes de enviar</p>

      <div className="review-groups">
        <div className="review-group">
          <div className="review-group-header">
            <h3>Contacto</h3>
            <button type="button" className="edit-link" onClick={() => onEditStep(0)}>Editar</button>
          </div>
          <p>{formData.nombre} · {formData.email} · {formData.telefono}</p>
          {(formData.empresa || formData.cargo) && (
            <p>{[formData.cargo, formData.empresa].filter(Boolean).join(' en ')}</p>
          )}
        </div>

        <div className="review-group">
          <div className="review-group-header">
            <h3>Industria</h3>
            <button type="button" className="edit-link" onClick={() => onEditStep(1)}>Editar</button>
          </div>
          <p>{formData.industria}</p>
        </div>

        <div className="review-group">
          <div className="review-group-header">
            <h3>Tipo de proyecto</h3>
            <button type="button" className="edit-link" onClick={() => onEditStep(2)}>Editar</button>
          </div>
          <p>{formData.tipoProyecto}</p>
        </div>

        <div className="review-group">
          <div className="review-group-header">
            <h3>Detalles del proyecto</h3>
            <button type="button" className="edit-link" onClick={() => onEditStep(3)}>Editar</button>
          </div>
          <p>{formData.claridad}</p>
          <p>{formData.timeline}</p>
          <p>{formData.integraciones}</p>
        </div>
      </div>

      <div className="form-group">
        <label>¿Algo más que debamos saber? (opcional)</label>
        <textarea
          name="mensaje"
          rows="4"
          placeholder="Cuéntanos cualquier detalle adicional..."
          value={formData.mensaje}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
