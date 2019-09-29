const TipoSeguimiento = [
  {
    tipo: 'remoto',
    label: 'Telefónico/Remoto',
    subtipos: [
      { id: 1, subtipo: 'Llamada Sin Contacto', contactado: false },
      { id: 2, subtipo: 'Llamada Contacatada', contactado: true },
      { id: 3, subtipo: 'El cliente llamo', contactado: true },
      { id: 4, subtipo: 'Correo Enviado', contactado: false },
      { id: 5, subtipo: 'Correo Rebotad', contactado: false }
    ]
  },
  {
    tipo: 'presencial',
    label: 'Visita',
    subtipos: [
      {
        id: 1,
        subtipo: 'Visita a Dom/Oficinas - Sin éxito',
        contactado: false
      },
      {
        id: 2,
        subtipo: 'Visita a Dom/Oficinas Contado Realizadp',
        contactado: true
      },
      { id: 3, subtipo: 'El cliente asistió a la empresa', contactado: true }
    ]
  }
];

export default TipoSeguimiento;
