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
      this.onEditUsuario
    );

    //no importa el async
    this.loadAllUsuarios();
  }

  onEditUsuario = usuario => {
    //al seleccionar mostar el form
    this.setState({
      idUsuarioSelected: usuario.id,
      usuarioSelected: usuario
    });
  };

  onDeleteUsuario = usuario => {
    console.log('no implementado onDeleteUsuario');
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
    const listaTR = this.state.listaUsuarios.map((usuario, index) => {
      const iconIsAdmin = usuario.is_admin && <i className="fa fa-check" />;
      const cmdEdit = (
        <button
          className="btn btn-primary"
          title="Editar"
          onClick={event => this.onEditUsuario(usuario)}
        >
          <i className="fa fa-edit" />
        </button>
      );
      const cmdDelete = (
        <button
          className="btn btn-danger"
          title="Eliminar"
          onClick={event => this.onDeleteUsuario(usuario)}
        >
          <i className="fa fa-trash" />
        </button>
      );

      return (
        <tr>
          <td className="text-center">{index + 1}</td>
          <td>{cmdEdit}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.nick}</td>
          <td>{usuario.email}</td>
          <td>{iconIsAdmin}</td>
          <td>{cmdDelete}</td>
        </tr>
      );
    });

    return (
      <div className="cell-data-usuarios wrapperTab">
        <table className="table table-striped table-primary">
          <thead>
            <th className="thCmd">#</th>
            <th className="thCmd" />
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Admin</th>
            <th className="thCmd" />
          </thead>
          <tbody>{listaTR}</tbody>
        </table>
      </div>
    );
  }
}

export default BrowserUsuarios;
