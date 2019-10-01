import React, { Component } from 'react';
import ObserverUsuarios from '../ObserverUsuarios';
import DataService from '../../../servicios/dataService/dataLocal/DataLocal';
import LibToast from '../../../lib/LibToast';
import BoxFiltroListaUsuario from './BoxFiltroListaUsuario';

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

  onFiltroChange = dataFiltro => {
    let listaFiltrada = [];

    this.setState({ dataFiltro });

    if (dataFiltro.isFiltro) {
      let listaFiltros = [];

      if (dataFiltro.texto !== '') {
        dataFiltro.texto = dataFiltro.texto.toString().toLowerCase();

        listaFiltros.push(cliente => {
          const texto = (
            cliente.nombre +
            ' ' +
            cliente.email +
            ' ' +
            cliente.nick
          ).toLowerCase();

          return texto.includes(dataFiltro.texto);
        });
      }

      if (dataFiltro.isAdmin !== 'SinFiltro') {
        listaFiltros.push(usuario => {
          const isAdmin = usuario.is_admin;
          return isAdmin === dataFiltro.isAdmin;
        });
      }

      listaFiltrada = this.state.listaUsuarios.filter(usuario => {
        let isShow = true;

        listaFiltros.forEach(fnEvalFiltro => {
          if (isShow) {
            isShow = fnEvalFiltro(usuario);
            console.log('eval', isShow);
          }
        });

        return isShow;
      });
    } else {
      listaFiltrada = this.state.listaUsuarios.filter(cliente => {
        return true;
      });
    }

    this.setState({ listaFiltrada });
  };

  render() {
    const listaTR = this.state.listaFiltrada.map((usuario, index) => {
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
        <tr key={usuario.id}>
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

    const num = this.state.listaUsuarios.length;

    return (
      <div className="cell-data-usuarios wrapperTab">
        <div className="flexDiv">
          <div className="labContadorUsuarios">{num} Usuarios</div>
          <BoxFiltroListaUsuario onFiltroChange={this.onFiltroChange} />
        </div>

        <table className="table table-striped table-primary">
          <thead>
            <tr>
              <th className="thCmd">#</th>
              <th className="thCmd" />
              <th>Nombre</th>
              <th>Nick</th>
              <th>Email</th>
              <th>Admin</th>
              <th className="thCmd" />
            </tr>
          </thead>
          <tbody>{listaTR}</tbody>
        </table>
      </div>
    );
  }
}

export default BrowserUsuarios;
