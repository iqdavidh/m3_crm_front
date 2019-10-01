import React, { Component } from 'react';
import ObserverDataPersonal from '../../seccionMain/panmainPersonal/ObserverDataPersonal';

class PanHistCom extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cliente: null,
      listaSeg: []
    };

    const fnSetCliente = cliente => {
      this.setState({
        cliente: cliente,
        listaSeg: cliente.gestion.listaSeguimiento
      });
    };

    ObserverDataPersonal.registrarHandlerOnSetClienteSelected(
      'PanHistCom',
      fnSetCliente
    );

    ObserverDataPersonal.registrarHandlernAddSeg(seg => {
      //al agregarse un seguimiento se actualiza la lista
      let listaSeg = [seg, ...this.state.listaSeg];

      this.setState({
        listaSeg
      });
    });
  }

  render() {
    const cliente = this.state.cliente;

    if (cliente === null) {
      return null;
    }

    let listaTR = this.state.listaSeg.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.fecha}</td>
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
