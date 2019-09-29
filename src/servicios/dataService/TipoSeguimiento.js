const TipoSeguimiento = [
  { id: 1, tipo: 'remoto', subtipo: 'Llamada Sin Contacto', contactado: false },
  { id: 2, tipo: 'remoto', subtipo: 'Llamada Contacatada', contactado: true },
  { id: 3, tipo: 'remoto', subtipo: 'El cliente llamo', contactado: true },
  { id: 4, tipo: 'remoto', subtipo: 'Correo Enviado', contactado: false },
  { id: 5, tipo: 'remoto', subtipo: 'Correo Rebotad', contactado: false },
  {
    id: 6,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas - Sin éxito',
    contactado: false
  },
  {
    id: 7,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas Contado Realizadp',
    contactado: true
  },
  {
    id: 8,
    tipo: 'presencial',
    subtipo: 'El cliente asistió a la empresa',
    contactado: true
  }
];

export default TipoSeguimiento;
