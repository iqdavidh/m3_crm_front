import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

import ObserverDataPersonal from './ObserverDataPersonal';

import BuilderControlDataPersonal from './BuilderControlDataPersonal';
import FactoryListaDataEdit from '../../../../components/edicion/FactoryListaDataEdit';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.state = {
      cliente: null
    };

    const fnSetCliente = cliente => {
      this.setState({ cliente });
    };

    this.observerData.registrarHandlerOnSetClienteSelected(
      'PanMainPersonal',
      fnSetCliente
    );

    this.listaConfigControl = BuilderControlDataPersonal();
  }

  render() {
    const c = this.state.cliente;

    if (!c) {
      return null;
    }

    /* Crear lista de Componentes */

    let lista = FactoryListaDataEdit(
      c,
      this.listaConfigControl,
      this.observerData
    );

    return (
      <div className="panfull">
        <PanCmdEdit
          id_cliente={c.id_cliente}
          observerData={this.observerData}
        />

        <table className="table table-sm table-striped teditdata">
          <tbody>{lista}</tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
