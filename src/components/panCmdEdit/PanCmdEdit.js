import './PanCmdEdit.css';
import React, { Component } from 'react';

class PanCmdEdit extends Component {
  render() {
    return (
      <div className="panToolEdit">
        <div style={{ flexGrow: 1 }}></div>
        <button className="btn btn-sm btn-primary" title="Guardar">
          <i className="fa fa-upload" />
        </button>

        <button className="btn btn-sm btn-secondary" title="Cancelar">
          <i className="fa fa-times" />
        </button>

        <button className="btn btn-sm btn-primary" title="Editar">
          <i className="fa fa-edit" />
        </button>
      </div>
    );
  }
}

export default PanCmdEdit;
