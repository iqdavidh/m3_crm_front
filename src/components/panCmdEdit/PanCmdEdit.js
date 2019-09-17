import './PanCmdEdit.css';
import React, { Component } from 'react';

class PanCmdEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdicion: false,
      isEnProceso: false
    };

    this.idClienteOld = props.id_cliente;
  }

  setModoView() {
    this.setState({
      isEdicion: false,
      isEnProceso: false
    });
  }

  setModoEdicion() {
    this.setState({
      isEdicion: true
    });

    this.props.setModoEdicion();
  }

  setModoRead() {
    this.setState({
      isEdicion: false
    });

    this.props.setModoRead();
  }

  startSave() {
    this.setState({
      isEnProceso: true
    });

    this.props.startSave();
  }

  endSave() {
    this.setState({
      isEnProceso: false
    });

    this.props.endSave();
  }

  render(args) {
    let isEdicion = this.state.isModoEdit;
    if (this.idClienteOld !== this.props.id_cliente) {
      isEdicion = false;
      this.idClienteOld = this.props.id_cliente;
    }

    const iconLoading = this.state.isEnProceso && (
      <div>
        <i className="fa fa-cog fa-spin" />
        Guardando
      </div>
    );

    const cmdUpload = isEdicion && (
      <button className="btn btn-sm btn-primary" title="Guardar">
        <i className="fa fa-upload" />
      </button>
    );

    const cmdCancel = isEdicion && (
      <button
        className="btn btn-sm btn-secondary"
        title="Cancelar"
        onClick={() => this.setModoRead()}
      >
        <i className="fa fa-times" />
      </button>
    );

    const cmdEdit = !isEdicion && (
      <button
        className="btn btn-sm btn-primary"
        title="Editar"
        onClick={() => this.setModoEdicion()}
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
