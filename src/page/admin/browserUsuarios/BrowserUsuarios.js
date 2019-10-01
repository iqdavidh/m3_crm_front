import React, { Component } from 'react';
import ObserverUsuarios from '../ObserverUsuarios';
import DataService from '../../../servicios/dataService/dataLocal/DataLocal';
import LibToast from '../../../lib/LibToast';

class BrowserUsuarios extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      listaUsuarios: [],
      listaFiltrada: [],
      fnSort: null,
      dataFiltro: null,
      usuarioSelected: null,
      idUsuarioSelected: null
    };

    this.isObserverRegistrado = false;

    ObserverUsuarios.registrarHandlerOnSetRegistroSelected(
      'BrowserUsuarios',
      this.onSelectUsuario
    );

    //no importa el async
    this.loadAllUsuarios();
  }

  onSelectUsuario = async usuario => {
    //al seleccionar mostar el form
    this.setState({
      idUsuarioSelected: usuario.id,
      usuarioSelected: usuario
    });
  };

  async loadAllUsuarios() {
    let respuesta = await DataService.indexUsuario();

    if (respuesta.success) {
      const data = respuesta.data;

      const listaFiltrada = [...data.lista];

      this.setState({
        listaUsuarios: data.lista,
        listaFiltrada: listaFiltrada
      });

      LibToast.success('Datos Recibidos');
    } else {
      LibToast.alert(respuesta.msg);
    }
  }

  render() {
    const listaTR = this.state.listaUsuarios.map((item, index) => {
      const iconIsAdmin = item.is_admin && <i className="fa fa-check" />;

      return (
        <tr>
          <td>{index + 1}</td>
          <td>edit</td>
          <td>{item.nombre}</td>
          <td>{item.nick}</td>
          <td>{item.email}</td>
          <td>{iconIsAdmin}</td>
          <td>delete</td>
        </tr>
      );
    });

    return (
      <div className="cell-data-usuarios wrapperTab">
        <table className="table table-striped table-primary">
          <thead>
            <th>#</th>
            <th></th>
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Admin</th>
            <th></th>
          </thead>
          <tbody>{listaTR}</tbody>
        </table>
      </div>
    );
  }
}

export default BrowserUsuarios;
