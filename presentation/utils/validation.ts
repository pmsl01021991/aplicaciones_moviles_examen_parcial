export const validarCorreo = (correo: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};

export const validarTelefono = (telefono: string): boolean => {
  return /^9\d{8}$/.test(telefono);
};

export const validarTexto = (texto: string): boolean => {
  return texto.trim().length > 0;
};