const TipoSeguimiento = [
  { id: 1, tipo: 'remoto', subtipo: 'Llamada Sin Contacto', contactado: false },
  { id: 2, tipo: 'remoto', subtipo: 'Llamada Contactada', contactado: true },
  { id: 3, tipo: 'remoto', subtipo: 'El cliente llamó', contactado: true },
  { id: 4, tipo: 'remoto', subtipo: 'Correo Enviado', contactado: false },
  { id: 5, tipo: 'remoto', subtipo: 'Correo Rebotado', contactado: false },

  {
    id: 8,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas - Sin éxito',
    contactado: false
  },
  {
    id: 9,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas Contado Realizado',
    contactado: true
  },
  {
    id: 10,
    tipo: 'presencial',
    subtipo: 'El cliente asistió a la empresa',
    contactado: true
  },

  { id: 11, tipo: 'remoto', subtipo: 'Otro', contactado: false },
  { id: 12, tipo: 'presencial', subtipo: 'Otro', contactado: true }
];

export default TipoSeguimiento;
