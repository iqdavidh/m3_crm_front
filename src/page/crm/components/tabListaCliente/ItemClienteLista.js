import React, { Component } from 'react';

class ItemClienteLista extends Component {
  render() {
    const c = this.props.Cliente;
    const numItem = this.props.numItem + 1;

    const prioridad = c.indicadores.funelIndex;

    const claseItem = 'itemCliente prioridad' + prioridad;

    const listaEstatus = ['NA', 'Baja', 'Media', 'Alta'];

    return (
      <div className={claseItem} key={c.id_contacto} title={c.apaterno}>
        <div className="labIndex">{numItem}</div>
        <i className="fa fa-user fa-2x" />

        <div className="labNombreCompleto">
          <span title="Nombre">{c.nombre}</span>
          <span title="Apellido Paterno">{c.apaterno}</span>
          <span title="Apellido Materno">{c.amaterno}</span>
        </div>

        <div>
          <span className="badge badge-dark badgeEstatus" title="Prioridad">
            {listaEstatus[prioridad - 1]}
          </span>
        </div>
      </div>
    );
  }
}

export default ItemClienteLista;
