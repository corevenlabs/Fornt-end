import React, { useContext, useState } from 'react';
import { ContactContext } from "../../context/ContactContext";
import './ContactForm.css';

export default function ContactForm() {
  const { sendEmail } = useContext(ContactContext);
  
  // Estados para la lógica de feedback
  const [isExiting, setIsExiting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Bloqueo inmediato del botón y feedback visual
    setIsSending(true);

    try {
      // 2. Ejecutamos el envío
      await sendEmail(formData);
      
      // 3. Al ser exitoso, disparamos la animación de salida rápido
      setIsExiting(true);

      // 4. Esperamos a que se desvanezca (300ms es más ágil que 500ms)
      setTimeout(() => {
        setFormData({ nombre: "", email: "", mensaje: "" });
        setIsExiting(false);
        setIsSending(false); // Rehabilitamos para el siguiente envío
      }, 300);

    } catch (error) {
      console.error("Error al enviar", error);
      setIsSending(false);
      // Aquí podrías avisar al usuario que algo falló
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* ... Info de contacto se mantiene igual ... */}
        <div className="contact-info">
            <span className="contact-badge">Contacto</span>
            <h2 className="contact-title">Inicia la <span>Conversación</span></h2>
            <p className="contact-description">
                Cuéntame sobre tu proyecto.
            </p>
        </div>

        <form 
          className={`contact-form ${isExiting ? 'form-exit' : ''}`} 
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input 
                type="text" 
                placeholder="Ej. Alex" 
                required 
                name='nombre' 
                value={formData.nombre} 
                onChange={handleChange} 
                disabled={isSending} // Evita cambios durante envío
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="alex@empresa.com" 
                required 
                name='email' 
                value={formData.email} 
                onChange={handleChange}
                disabled={isSending}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Proyecto / Idea</label>
            <textarea 
              placeholder="Cuéntame brevemente..." 
              rows="4" 
              required 
              name='mensaje' 
              value={formData.mensaje} 
              onChange={handleChange}
              disabled={isSending}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isSending ? 'btn-loading' : ''}`}
            disabled={isSending} 
          >
            {isSending ? 'Enviando...' : 'Enviar Mensaje'} <span>—</span>
          </button>
        </form>
      </div>
    </section>
  );
}