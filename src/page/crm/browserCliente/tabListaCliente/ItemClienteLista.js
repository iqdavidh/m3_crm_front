import './ItemClienteLista.css';
import React, { Component } from 'react';

class ItemClienteLista extends Component {
  render() {
    const c = this.props.Cliente;
    const numItem = this.props.numItem + 1;

    const prioridad = c.indicadores.funelIndex;

    const cssClasePrioridad = 'prioridad' + prioridad;
    const claseItem =
      'itemCliente ' +
      cssClasePrioridad +
      (this.props.isSelected ? ' selected' : '');

    const listaEstatus = ['ND', 'Baja', 'Media', 'Alta'];

    const tituloUpdated = c.updated_at
      ? 'Updated ' + c.updated_at.toDateString()
      : '';

    return (
      <div
        className={claseItem}
        key={c.id_cliente}
        title={c.apaterno}
        onClick={e => this.props.onClickCliente(c.id_cliente)}
      >
        <div className="labIndex" title={tituloUpdated}>
          {numItem}
        </div>
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
