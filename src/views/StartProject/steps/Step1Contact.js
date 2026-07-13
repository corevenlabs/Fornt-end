import React from 'react';

export default function Step1Contact({ formData, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="step-panel">
      <span className="step-panel-number">1</span>
      <h2>Información de contacto</h2>
      <p className="step-panel-description">Cuéntanos cómo podemos contactarte</p>

      <div className="step-fields">
        <div className="form-group">
          <label>Nombre completo *</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej: María González"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico *</label>
          <input
            type="email"
            name="email"
            placeholder="tu@empresa.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            placeholder="+56 9 1234 5678"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Empresa (opcional)</label>
            <input
              type="text"
              name="empresa"
              placeholder="Ej: Innovatech Labs"
              value={formData.empresa}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Cargo (opcional)</label>
            <input
              type="text"
              name="cargo"
              placeholder="Ej: Directora de Tecnología"
              value={formData.cargo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
