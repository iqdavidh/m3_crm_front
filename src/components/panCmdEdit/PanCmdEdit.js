import './PanCmdEdit.css';
import React, { Component } from 'react';

class PanCmdEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdicion: false,
      isEnProceso: false
    };
  }

  setModoView() {
    this.setState({
      isEdicion: false,
      isEnProceso: false
    });
  }

  render() {
    const iconLoading = this.state.isEnProceso && (
      <div>
        <i className="fa fa-cog fa-spin" />
        Guardando
      </div>
    );

    const cmdUpload = this.state.isEdicion && (
      <button className="btn btn-sm btn-primary" title="Guardar">
        <i className="fa fa-upload" />
      </button>
    );

    const cmdCancel = !this.state.isEdicion && (
      <button className="btn btn-sm btn-secondary" title="Cancelar">
        <i className="fa fa-times" />
      </button>
    );

    const cmdEdit = !this.state.isEdicion && (
      <button className="btn btn-sm btn-primary" title="Editar">
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
