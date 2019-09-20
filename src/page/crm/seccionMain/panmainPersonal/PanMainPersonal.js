import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

import ObserverDataPersonal from './ObserverDataPersonal';

import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';

import BuilderControlDataPersonal from './BuilderControlDataPersonal';

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

    this.listaConfigControl = [];

    this.crearListaConfigControl();
  }

  crearListaConfigControl() {
    this.listaConfigControl = BuilderControlDataPersonal();
  }

  render() {
    const c = this.state.cliente;

    if (!c) {
      return null;
    }

    /* Crear lista de Componentes */

    const fnGetTXT = control => {
      return (
        <TrDataEditTXT
          campo={control.campo}
          label={control.label}
          dataSource={c}
          validacion={control.validacion}
          observerData={this.observerData}
          key={control.campo}
        />
      );
    };

    let lista = this.listaConfigControl.map(control => {
      if (control.tipo === 'TXT') {
        return fnGetTXT(control);
      }
      console.log('Tipo no detectado');
      return null;
    });
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
