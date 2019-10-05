import React, { Component } from 'react';
import TipoSeguimiento from '../../../servicios/dataService/TipoSeguimiento';
import LibToast from '../../../lib/LibToast';
import ObserverDataPersonal from '../seccionMain/panmainPersonal/ObserverDataPersonal';
import DataService from '../../../servicios/dataService/DataService';
import AuthService from '../../../servicios/authService/AuthService';
import LibFecha from '../../../lib/LibFecha';

class SeccionAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.listaTipos = TipoSeguimiento;

    this.state = {
      id_cliente: null,
      contactado: false,
      opcionSeguimiento: this.listaTipos[0],
      texto: ''
    };

    const fnSetCliente = cliente => {
      this.setState({
        id_cliente: cliente.id_cliente,
        texto: ''
      });

      console.log(cliente.id_cliente);
    };

    ObserverDataPersonal.registrarHandlerOnSetRegistroSelected(
      'SeccionAdd',
      fnSetCliente
    );

    this.fechaNow = LibFecha.getDMYFromDate(new Date());
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

  async onClickAdd() {
    let texto = this.state.texto;

    if (texto === '') {
      LibToast.alert('Se requiere ingresar un comentario de seguimiento');
      return;
    }

    //crear el modelo de seguimiento
    let model = {
      id_tipo: this.state.opcionSeguimiento.id,
      tipo: this.state.opcionSeguimiento.tipo,
      subtipo: this.state.opcionSeguimiento.subtipo,
      contactado: this.state.opcionSeguimiento.contactado,
      comentario: texto,
      id_cliente: this.state.id_cliente
    };

    let respuesta = await DataService.insertSeguimiento(model);

    if (respuesta.success) {
      LibToast.success('Seguimiento registrado');
    } else {
      LibToast.alert(respuesta.msg);
    }

    model.id = respuesta.data.id;
    model.usuario = AuthService.getUser().nombre;
    model.fecha = this.fechaNow;

    ObserverDataPersonal.addSeguimiento(model);

    /*clean el texto*/
    this.setState({
      texto: ''
    });
  }

  onTextoChange(newTexto) {
    console.log(newTexto);

    this.setState({
      texto: newTexto
    });
  }

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
        <div className="tituloSeccionAdd">
          <i className="fa fa-bullhorn" /> Registrar Seguimiento
        </div>
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
          <textarea
            className="form-control txtSeguimeinto"
            value={this.state.texto}
            onChange={event => this.onTextoChange(event.target.value)}
          />
        </div>
        <div className="text-right">
          <button
            className="btn btn-primary"
            onClick={event => this.onClickAdd()}
          >
            <i className="fa fa-upload" /> Registrar
          </button>
        </div>
      </div>
    );
  }
}

export default SeccionAdd;
