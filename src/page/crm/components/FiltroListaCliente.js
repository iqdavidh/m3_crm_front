import React, { Component } from 'react';
import './FiltroListaCliente.css';

class FiltroListaCliente extends Component {
  state = {
    texto: '',
    indexEstatus: null
  };

  render() {
    let f = { x: 'nada' };

    return (
      <div className="flexDiv">
        <div className="p-1">
          <i className="fa fa-filter" />
        </div>
        <input
          className="form-control form-control-sm FiltroListaCliente"
          title="Buscar Texto"
        />
        <select
          className="form-control form-control-sm"
          title="Filtrar por estatus"
        />
      </div>
    );
  }
}

export default FiltroListaCliente;
