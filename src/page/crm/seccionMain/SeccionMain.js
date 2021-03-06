import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';

import './SeccionMain.css';
import PanMainPersonal from './panmainPersonal/PanMainPersonal';
import PanMainDom from './panMainDom/PanMainDom';
import DataService from '../../../servicios/dataService/DataService';
import LibToast from '../../../lib/LibToast';
import ObserverDataPersonal from './panmainPersonal/ObserverDataPersonal';

class SeccionMain extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.observerData.registrarCbSaveData(this.cbSaveDataPersonal);
  }

  updateMode(model, dataUpdate, pathPropiedad) {
    const valorUpdate = dataUpdate[pathPropiedad];

    if (!pathPropiedad.toString().includes('.')) {
      model[pathPropiedad] = valorUpdate;
      return;
    }

    //creamos la lista de propieades
    let listaPropiedad = pathPropiedad.split('.');

    const numItemPaths = listaPropiedad.length;

    if (numItemPaths === 2) {
      model[listaPropiedad[0]][listaPropiedad[1]] = valorUpdate;
    } else if (numItemPaths === 3) {
      model[listaPropiedad[0]][listaPropiedad[1]][
        listaPropiedad[2]
      ] = valorUpdate;
    } else {
      throw Error(
        'La profuncidad de la propiedad no esta implementada, solo hata nivel 2'
      );
    }
  }

  cbSaveDataPersonal = async () => {
    let id_cliente = this.observerData.registroSelected.id_cliente;

    const dataUpdate = this.observerData.getDataEdit();

    this.observerData.onMostrarWait(true);

    const respuestaSave = await DataService.saveCliente(id_cliente, dataUpdate);
    this.observerData.onMostrarWait(false);

    if (!respuestaSave.success) {
      LibToast.alert(respuestaSave.msg);
      return;
    }

    //crear nuevo modelo
    let cliente = { ...this.observerData.registroSelected };
    Object.keys(dataUpdate).forEach(key => {
      this.updateMode(cliente, dataUpdate, key);
    });

    cliente.updated_at = new Date();

    this.observerData.onUpdateModel(cliente);

    LibToast.success('Cliente Actualizado');
    this.observerData.onDataSourceChange();
  };

  render() {
    const tituloTabPer = (
      <PestanaTab icon="fa fa-user" title="Datos Personales" />
    );
    const tituloTabDom = <PestanaTab icon="fa fa-home" title="s" />;

    return (
      <div className="cell-data-main SeccionMain wrapperTab">
        <Tabs defaultActiveKey="personal" vertical="true">
          <Tab eventKey="personal" title={tituloTabPer}>
            <PanMainPersonal
              onSaveCliente={this.onSaveCliente}
              onUpdateModel={this.props.onUpdateModel}
            />
          </Tab>

          <Tab eventKey="tareas" title={tituloTabDom}>
            <PanMainDom
              onSaveCliente={this.onSaveCliente}
              onUpdateModel={this.props.onUpdateModel}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionMain;
