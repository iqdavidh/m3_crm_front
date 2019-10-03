import React, { Component } from 'react';
import ObserverUsuarios from '../ObserverUsuarios';
import DataService from '../../../servicios/dataService/dataLocal/DataLocal';
import LibToast from '../../../lib/LibToast';
import BoxFiltroListaUsuario from './BoxFiltroListaUsuario';
import FormUsuario from '../modal/formUsuario/FormUsuario';
import ObserverUpdateUsuario from '../modal/formUsuario/ObserverUpdateUsuario';

class BrowserUsuarios extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      listaUsuarios: [],
      listaFiltrada: [],
      fnSort: null,
      dataFiltro: null,
      usuarioSelected: null,
      idUsuarioSelected: null,
      isShowFormUsuario: false
    };

    this.isObserverRegistrado = false;

    ObserverUsuarios.registrarHandlerOnSetRegistroSelected(
      'BrowserUsuarios',
      this.onEditUsuario
    );

    ObserverUpdateUsuario.onAddUsuario = () => {
      this.setState({
        idUsuarioSelected: null,
        usuarioSelected: {
          id: null,
          nombre: '',
          nick: '',
          email: '',
          is_admin: false,
          is_activo: true
        },
        isShowFormUsuario: true
      });
    };

    ObserverUpdateUsuario.registraCbInsertModel(this.onInsertUsuario);
    ObserverUpdateUsuario.registraCbUpdateModel(this.onUpdateUsuario);

    //no importa el async
    this.loadAllUsuarios();
  }

  onInsertUsuario = (idUsuario, usuarioInsert) => {
    let listaUsuarios = [...this.state.listaUsuarios, usuarioInsert];
    let listaFiltrada = [...this.state.listaFiltrada, usuarioInsert];

    this.setState({
      listaUsuarios,
      listaFiltrada,
      idUsuarioSelected: usuarioInsert.id,
      isShowFormUsuario: false
    });
  };

  onUpdateUsuario = usuarioUpdated => {
    //actualizar el usaurio
    let lista = [...this.state.listaUsuarios];

    let usuarioOld = lista.find(item => {
      return item.id === usuarioUpdated.id;
    });

    Object.keys(usuarioUpdated).forEach(key => {
      usuarioOld[key] = usuarioUpdated[key];
    });

    this.setState({
      idUsuarioSelected: usuarioUpdated.id,
      isShowFormUsuario: false
    });
  };

  onEditUsuario = usuario => {
    //al seleccionar mostar el form

    ObserverUpdateUsuario.id_usuario = usuario.id;

    this.setState({
      idUsuarioSelected: usuario.id,
      usuarioSelected: usuario,
      isShowFormUsuario: true
    });

    //Cargar Formulario de edición
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
          const texto = `${cliente.nombre} ${cliente.email} ${cliente.nick}`.toLowerCase();

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

  closeFormUsuario = () => {
    this.setState({
      isShowFormUsuario: false
    });
  };

  render() {
    const listaTR = this.state.listaFiltrada.map((usuario, index) => {
      const iconIsAdmin = usuario.is_admin && <i className="fa  fa-check" />;
      const iconIsActivo = usuario.is_activo ? (
        <i className="fa  fa-thumbs-up colorNoResalta" />
      ) : (
        <i className="fa fa-thumbs-down " title="Usuario no activo" />
      );

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
          <td>{iconIsActivo}</td>

          <td></td>
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
              <th>Activo</th>
              <th className="thCmd" />
            </tr>
          </thead>
          <tbody>{listaTR}</tbody>
        </table>
        <FormUsuario
          isShow={this.state.isShowFormUsuario}
          usuario={this.state.usuarioSelected}
          onClose={this.closeFormUsuario}
        />
      </div>
    );
  }
}

export default BrowserUsuarios;
