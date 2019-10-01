import React, { Component } from 'react';
import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';
import DataService from '../../../../servicios/dataService/DataService';
import LibToast from '../../../../lib/LibToast';
import ObserverUpdateUsuario from './ObserverUpdateUsuario';
import { Button, Modal } from 'react-bootstrap';
import FactoryListaDataEdit from '../../../../components/edicion/FactoryListaDataEdit';

class FormUsuario extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerData = ObserverUpdateUsuario;

    let lista = [];

    {
      const b = new BuilderConfigControlItem('nombre', 'Nombre');
      b.setIsRequired();
      lista.push(b.getConfigControlItem());
    }

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('nick', 'Nick (Nombre Corto)');
      b.setIsRequired();
      lista.push(b.getConfigControlItem());
    }

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('email', 'Email');
      b.setIsCampoEmail();
      lista.push(b.getConfigControlItem());
    }
    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('is_admin', 'Es Administrador');
      b.setTipoCHK();
      lista.push(b.getConfigControlItem());
    }

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem(
        'is_activo',
        'Esta activo el usuario'
      );
      b.setTipoCHK();
      lista.push(b.getConfigControlItem());
    }

    //iniciliazar todos los controles con estado edit
    lista.forEach(configControl => {
      configControl.isModoInicialEdit = true;
    });

    this.listaConfigControl = lista;

    this.state = {
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

    this.observerData.registrarCbSaveData(this.cbSaveNewUsuario);
  }

  cbSaveNewUsuario = async () => {
    const dataInsert = this.observerData.getDataEdit();
    const respuestaSave = await DataService.insertUsuario(dataInsert);
    this.observerData.onMostrarWait(false);

    if (!respuestaSave.success) {
      LibToast.alert(respuestaSave.msg);
      return;
    }

    const idUsuario = respuestaSave.data.id;

    //crear nuevo modelo
    const usuario = { ...dataInsert };

    usuario.id = idUsuario;
    usuario.updated_at = new Date();

    LibToast.success('Usuario Registrado');

    this.observerData.onInsertModel(idUsuario, usuario);
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
      this.props.usuario,
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

    const operacion = 'Crear';

    return (
      <Modal show={this.props.isShow} onHide={event => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa fa-user" /> {operacion} Usuario
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

export default FormUsuario;
