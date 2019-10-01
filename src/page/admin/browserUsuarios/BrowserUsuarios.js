import React, { Component } from 'react';
import ObserverUsuarios from '../ObserverUsuarios';

class BrowserUsuarios extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      listaUsuarios: [],
      listaFiltrada: [],
      fnSort: null,
      dataFiltro: null,
      usuarioSelected: null,
      idUsuarioSelected: null
    };

    this.isObserverRegistrado = false;

    ObserverUsuarios.registrarHandlerOnSetClienteSelected();
  }

  render() {
    return (
      <div className="cell-data-usuarios wrapperTab">
        <table className="table table-striped table-info">
          <thead>
            <th>#</th>
            <th></th>
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Admin</th>
            <th></th>
          </thead>
        </table>
      </div>
    );
  }
}

export default BrowserUsuarios;
