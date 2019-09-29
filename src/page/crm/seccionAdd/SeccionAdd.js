import React, { Component } from 'react';
import TipoSeguimiento from '../../../servicios/dataService/TipoSeguimiento';

class SeccionAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.listaTipos = TipoSeguimiento;

    this.state = {
      contactado: true,
      opcionSeguimiento: null
    };
  }

  setSeguimiento = b => {
    this.setState({
      contactado: b
    });
  };

  onSetOpcionSeguimiento = opcion => {
    this.setState({
      opcionSeguimiento: opcion
    });
  };

  render() {
    const isContactado = this.state.contactado;

    let index = 0;
    let listaTR = this.listaTipos
      .filter(s => {
        return s.contactado === isContactado;
      })
      .map(s => {
        index++;

        return (
          <div
            className="itemOpcionSelTipo"
            key={s.id}
            onClick={event => this.onSetOpcionSeguimiento(s)}
          >
            {index}.- {s.subtipo}
          </div>
        );
      });
    let tableCSS = isContactado
      ? 'tabla_selseguimiento table-success table-striped'
      : 'tabla_selseguimiento table-dark table-striped';

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

        {listaTR}
      </div>
    );
  }
}

export default SeccionAdd;
