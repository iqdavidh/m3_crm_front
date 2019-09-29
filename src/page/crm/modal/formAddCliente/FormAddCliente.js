import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ObserverNewCliente from './ObserverNewCliente';
import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';
import FactoryListaDataEdit from '../../../../components/edicion/FactoryListaDataEdit';
import DataService from '../../../../servicios/dataService/DataService';
import LibToast from '../../../../lib/LibToast';

class FormAddCliente extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerData = ObserverNewCliente;

    let lista = [];

    const builderNombre = new BuilderConfigControlItem('nombre', 'Nombre');
    builderNombre.setIsRequired();
    lista.push(builderNombre.getConfigControlItem());

    /*------------------------------------------------------------*/
    const builderAPaterno = new BuilderConfigControlItem(
      'apaterno',
      'A. Paterno'
    );
    builderAPaterno.setIsRequired();
    lista.push(builderAPaterno.getConfigControlItem());

    /*------------------------------------------------------------*/
    const builderAMaterno = new BuilderConfigControlItem(
      'amaterno',
      'A. Materno'
    );
    builderAMaterno.setIsRequired();
    lista.push(builderAMaterno.getConfigControlItem());

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('email1', 'Email');
      lista.push(b.getConfigControlItem());
    }
    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('tel', 'Teléfono');
      lista.push(b.getConfigControlItem());
    }

    //iniciliazar todos los controles con estado edit
    lista.forEach(configControl => {
      configControl.isModoInicialEdit = true;
    });

    this.listaConfigControl = lista;

    this.state = {
      clienteNew: {
        nombre: '',
        apaterno: '',
        amaterno: '',
        email1: '',
        tel: ''
      },
      isEnProceso: false,
      isValidData: false
    };

    this.observerData.registrarCbMostrarWait(isWait => {
      return this.setState({ isEnProceso: isWait });
    });

    this.observerData.registrarCbDataIsValid(isValidData => {
      this.setState({
        isValidData
      });
    });

    this.observerData.registrarCbSaveData(this.cbSaveNewCliente);
  }

  cbSaveNewCliente = async () => {
    const dataInsert = this.observerData.getDataEdit();
    const respuestaSave = await DataService.insertCliente(dataInsert);
    this.observerData.onMostrarWait(false);

    if (!respuestaSave.success) {
      LibToast.alert(respuestaSave.msg);
      return;
    }

    const idCliente = respuestaSave.data.id_cliente;

    //crear nuevo modelo
    const cliente = { ...dataInsert };

    cliente.id_cliente = idCliente;
    cliente.indicadores = {
      funelIndex: 1
    };
    cliente.updated_at = new Date();

    LibToast.success('Cliente Actualizado');

    this.observerData.onInsertModel(idCliente, cliente);
  };

  onClickSave() {
    this.setState({
      isEnProceso: true
    });

    this.observerData.onRequesSaveData();
  }

  endSave() {
    this.setState({
      isEnProceso: false
    });
  }

  render() {
    let lista = FactoryListaDataEdit(
      this.state.clienteNew,
      this.listaConfigControl,
      this.observerData
    );

    let isEnProceso = this.state.isEnProceso;

    const iconLoading = isEnProceso && (
      <div className="text-center">
        <i className="fa fa-cog fa-spin " />
        <span className="pl-1">Guardando</span>
      </div>
    );

    const cmdUpload = this.state.isValidData && !isEnProceso && (
      <button
        className="btn btn-primary"
        title="Guardar"
        onClick={() => this.onClickSave()}
      >
        <i className="fa fa-upload" /> Guardar
      </button>
    );

    const cmdCancel = !isEnProceso && (
      <Button variant="secondary" onClick={event => this.props.onClose()}>
        Cancelar
      </Button>
    );

    return (
      <Modal show={this.props.isShow} onHide={event => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa fa-user"></i> Crear Cliente
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <table className="table table-sm table-striped teditdata">
            <tbody>{lista}</tbody>
          </table>
        </Modal.Body>

        <Modal.Footer>
          {iconLoading}
          {cmdUpload}
          {cmdCancel}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormAddCliente;
