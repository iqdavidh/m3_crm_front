import React, { Component } from 'react';
import ObserverDataPersonal from '../../seccionMain/panmainPersonal/ObserverDataPersonal';

class PanHistCom extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cliente: null
    };

    const fnSetCliente = cliente => {
      this.setState({ cliente: cliente });
    };

    ObserverDataPersonal.registrarHandlerOnSetClienteSelected(
      'PanHistCom',
      fnSetCliente
    );
  }

  render() {
    const cliente = this.state.cliente;

    if (cliente === null) {
      return null;
    }

    let listaTR = cliente.gestion.listaSeguimiento.map((item, index) => {
      let code = JSON.stringify(item);

      let tipo = item.tipo;
      let isContactado = item.contactado;
      let com = item.comentario;
      let f = item.fecha;
      let usuario = item.usuario;

      return (
        <tr>
          <td>{index + 1}</td>
          <td>{item.f}</td>
          <td>{item.tipo}</td>
          <td>{item.comentario}</td>
          <td>{item.usuario}</td>
        </tr>
      );
    });
    return (
      <div className="panfull overFlowDiv">
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Comentario</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>{listaTR}</tbody>
        </table>
      </div>
    );
  }
}

export default PanHistCom;
