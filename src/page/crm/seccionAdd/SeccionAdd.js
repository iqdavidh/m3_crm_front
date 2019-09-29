import React, { Component } from 'react';
import TipoSeguimiento from '../../../servicios/dataService/TipoSeguimiento';

class SeccionAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.listaTipos = TipoSeguimiento;
  }

  render() {
    return (
      <div className="cell-data-add">
        <h4>
          <i className="fa fa-bullhorn" /> Registrar Seguimiento
        </h4>
      </div>
    );
  }
}

export default SeccionAdd;
