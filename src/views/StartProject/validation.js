const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isStepValid(step, formData) {
  switch (step) {
    case 0:
      return Boolean(
        formData.nombre.trim() &&
        EMAIL_PATTERN.test(formData.email.trim()) &&
        formData.telefono.trim()
      );
    case 1:
      return Boolean(formData.industria);
    case 2:
      return Boolean(formData.tipoProyecto);
    case 3:
      return Boolean(formData.claridad && formData.timeline && formData.integraciones);
    case 4:
      return true;
    default:
      return false;
  }
}
