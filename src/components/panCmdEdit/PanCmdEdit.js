import './PanCmdEdit.css';
import React, { Component } from 'react';

class PanCmdEdit extends Component {
  constructor(props) {
    super(props);

    /* suscribir los eventos de datai inalida*/
    props.observerData.subscribe('PanCmdEdit', this);
    props.observerData.registrarCbDataIsValid(isValidData => {
      this.setState({
        isValidData
      });
    });

    /*regsitrar el callback de mostrar wait*/
    props.observerData.registrarCbMostrarWait(isWait => {
      return this.setState({ isEnProceso: isWait });
    });

    this.state = {
      isEdicion: false,
      isEnProceso: false,
      isValidData: true
    };

    this.idClienteOld = props.id_cliente;
  }

  onSetCancel() {
    if (this.state.isEnProceso) {
      return;
    }

    this.setState({
      isEdicion: false,
      isEnProceso: false,
      isValidData: true
    });
  }

  onSetEdit() {
    this.setState({
      isEdicion: true,
      isEnProceso: false,
      isValidData: true
    });
  }

  onDataSourceChange() {
    this.setState({
      isEdicion: false,
      isEnProceso: false,
      isValidData: true
    });
  }

  startSave() {
    if (this.state.isEnProceso) {
      return;
    }

    this.setState({
      isEnProceso: true
    });

    this.props.observerData.onRequesSaveData();
  }

  endSave() {
    this.setState({
      isEnProceso: false
    });
  }

  render(args) {
    let isEdicion = this.state.isEdicion;
    let isEnProceso = this.state.isEnProceso;

    if (this.idClienteOld !== this.props.id_cliente) {
      isEdicion = false;
      this.idClienteOld = this.props.id_cliente;
    }

    const iconLoading = this.state.isEnProceso && (
      <div>
        <i className="fa fa-cog fa-spin " />
        <span className="pl-1">Guardando</span>
      </div>
    );

    const cmdUpload = isEdicion && this.state.isValidData && !isEnProceso && (
      <button
        className="btn btn-sm btn-primary"
        title="Guardar"
        onClick={() => this.props.observerData.onRequesSaveData()}
      >
        <i className="fa fa-upload" />
      </button>
    );

    const cmdCancel = isEdicion && !isEnProceso && (
      <button
        className="btn btn-sm btn-secondary"
        title="Cancelar"
        onClick={() => this.props.observerData.onSetCancel()}
      >
        <i className="fa fa-times" />
      </button>
    );

    const cmdEdit = !isEdicion && (
      <button
        className="btn btn-sm btn-primary"
        title="Editar"
        onClick={() => this.props.observerData.onSetEdit()}
      >
        <i className="fa fa-edit" />
      </button>
    );

    return (
      <div className="panToolEdit">
        <div className="espaciocenter">{iconLoading}</div>
        {cmdUpload}
        {cmdCancel}
        {cmdEdit}
      </div>
    );
  }
}

export default PanCmdEdit;
