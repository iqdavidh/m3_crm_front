import React, { Component } from 'react';
import TipoSeguimiento from '../../../servicios/dataService/TipoSeguimiento';

class SeccionAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.listaTipos = TipoSeguimiento;

    this.state = {
      contactado: false,
      opcionSeguimiento: this.listaTipos[0]
    };
  }

  setSeguimiento = b => {
    this.setState({
      contactado: b,
      opcionSeguimiento: b ? this.listaTipos[1] : this.listaTipos[0]
    });
  };

  onSetOpcionSeguimiento = opcion => {
    this.setState({
      opcionSeguimiento: opcion
    });
  };

  render() {
    const isContactado = this.state.contactado;

    let tableCSS = isContactado ? 'contactado' : 'nocontactado';

    let index = 0;
    let listaTR = this.listaTipos
      .filter(s => {
        return s.contactado === isContactado;
      })
      .map(s => {
        index++;

        const isSelected = this.state.opcionSeguimiento === s;

        const claseItem =
          'itemOpcionSelTipo ' + tableCSS + (isSelected ? ' opselected' : '');

        const iconIsSelected = isSelected && (
          <i className="fa fa-chevron-circle-left " />
        );

        return (
          <div
            className={claseItem}
            key={s.id}
            onClick={event => this.onSetOpcionSeguimiento(s)}
          >
            <span>
              {index}.- {s.subtipo}
            </span>
            {iconIsSelected}
          </div>
        );
      });

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

        <div className="wrapperComSeg">
          <span>Comentario de Seguimiento</span>
          <textarea className="form-control txtSeguimeinto"></textarea>
        </div>
        <div className="text-right">
          <button className="btn btn-primary">
            <i className="fa fa-upload"></i> Registrar
          </button>
        </div>
      </div>
    );
  }
}

export default SeccionAdd;
