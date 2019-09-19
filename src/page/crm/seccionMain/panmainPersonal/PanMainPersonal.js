import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

import ObserverDataPersonal from './ObserverDataPersonal';

import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';
import DataService from '../../../../servicios/dataService/DataService';
import LibToast from '../../../../lib/LibToast';

import BuilderControlDataPersonal from './BuilderControlDataPersonal';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.observerData.registrarCbSaveData(this.cbSaveData);

    this.listaConfigControl = [];

    this.crearListaConfigControl();
  }

  crearListaConfigControl() {
    this.listaConfigControl = BuilderControlDataPersonal();
  }

  cbSaveData = async () => {
    const dataUpdate = this.observerData.getDataEdit();
    const id_cliente = this.props.cliente.id_cliente;

    this.observerData.onMostrarWait(true);

    //const respuestaSave = await DataService.saveCliente(id_cliente, dataUpdate);

    // if (respuestaSave.success) {
    //   LibToast.success("Cliente Actualizado")
    // }
  };

  render() {
    if (!this.props.cliente) {
      return null;
    }

    /* Crear lista de Componentes */

    const c = this.props.cliente;

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
