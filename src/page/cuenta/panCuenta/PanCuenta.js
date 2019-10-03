import React, { Component } from 'react';
import ObserverDataCuenta from './ObserverDataCuenta';
import AuthService from '../../../servicios/authService/AuthService';
import BuilderDataCuenta from './BuilderDataCuenta';
import FactoryListaDataEdit from '../../../components/edicion/FactoryListaDataEdit';
import PanCmdEdit from '../../../components/panCmdEdit/PanCmdEdit';
import DataService from '../../../servicios/dataService/DataService';
import LibToast from '../../../lib/LibToast';
import ObserverTopBarEvent from '../../../components/topbar/ObserverTopBarEvent';

class PanCuenta extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerData = ObserverDataCuenta;

    this.state = {
      usuario: AuthService.getUser()
    };

    const fnSetCliente = cliente => {
      this.setState({ cliente });
    };

    this.listaConfigControl = BuilderDataCuenta();

    this.observerData.registrarCbSaveData(async () => {
      const dataUpdate = this.observerData.getDataEdit();

      this.observerData.onMostrarWait(true);

      const respuestaSave = await DataService.updateUsuario(dataUpdate);

      this.observerData.onMostrarWait(false);

      if (!respuestaSave.success) {
        LibToast.alert(respuestaSave.msg);
        return;
      }

      let usuario = AuthService.getUser();

      Object.keys(dataUpdate).forEach(key => {
        usuario[key] = dataUpdate[key];
        //actualizar la session
      });

      this.observerData.onUpdateModel(usuario);

      LibToast.success('Cuenta Actualizada');
      this.observerData.onDataSourceChange();

      //actualizar los campos de la sesion
      if (dataUpdate.nick) {
        ObserverTopBarEvent.onNickChange(dataUpdate.nick);
      }
    });
  }

  render() {
    const usuario = this.state.usuario;

    if (!usuario) {
      return null;
    }

    /* Crear lista de Componentes */

    let lista = FactoryListaDataEdit(
      usuario,
      this.listaConfigControl,
      this.observerData
    );

    return (
      <div className="panfull">
        <h4>Cuenta de Usuario</h4>
        <PanCmdEdit observerData={this.observerData} />
        <table className="table table-sm table-striped teditdata">
          <tbody>{lista}</tbody>
        </table>
      </div>
    );
  }
}

export default PanCuenta;
