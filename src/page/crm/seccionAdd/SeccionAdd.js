import React, { Component } from 'react';
import TipoSeguimiento from '../../../servicios/dataService/TipoSeguimiento';

class SeccionAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.listaTipos = TipoSeguimiento;

    this.state = {
      contactado: true
    };
  }

  setSeguimiento = b => {
    this.setState({
      contactado: b
    });
  };

  render() {
    return (
      <div className="cell-data-add">
        <h4>
          <i className="fa fa-bullhorn" /> Registrar Seguimiento
        </h4>
        <div className="barBtnSeg">
          <button
            className="btn btn-black btn-sm"
            onClick={event => this.setSeguimiento(false)}
          >
            No Contactado
          </button>
          <button
            className="btn btn-success btn-sm"
            onClick={event => this.setSeguimiento(true)}
          >
            Sí Contactado
          </button>
        </div>
        <table className="table-dark table-striped">
          <thead></thead>
        </table>
      </div>
    );
  }
}

export default SeccionAdd;
