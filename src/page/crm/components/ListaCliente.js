import React, { Component } from 'react';

class ListaCliente extends Component {
  render() {
    const listaEstatus = ['NA', 'Baja', 'Media', 'Alta'];

    const lista = this.props.listaClientes.map(c => {
      return (
        <div className="itemCliente" key={c.id_contacto} title={c.apaterno}>
          <i className="fa fa-user fa-2x" />

          <div className="labNombreCompleto">
            <span title="Nombre">{c.nombre}</span>
            <span title="Apellido Paterno">{c.apaterno}</span>
            <span title="Apellido Materno">{c.amaterno}</span>
          </div>

          <div className="labPrioridad">
            <span className="badge badge-danger">
              {listaEstatus[c.indicadores.funelIndex - 1]}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="listaClientes">
        <div>Barra</div>
        <div>{lista}</div>
      </div>
    );
  }
}

export default ListaCliente;
