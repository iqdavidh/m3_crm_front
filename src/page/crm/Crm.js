import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import AutService from '../../servicios/autService/AutService';
import TopBarCrm from './components/TopBarCrm';
import ListaCliente from './components/ListaCliente';
import DataService from '../../servicios/dataService/DataService';
import LibToast from '../../lib/LibToast';

const session = AutService.getCurrentSession();

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaClientes: [],
      numPagina: 1,
      numTotalPaginas: 0,
      isCompletado: false,
      modoGrid: ''
    };
  }

  setModoGestion(modo) {
    if (this.state.modoGrid === modo) {
      this.setState({ modoGrid: '' });
    } else {
      this.setState({ modoGrid: modo });
    }
  }

  async componentDidMount() {
    /* la primera ves se cargan los datos*/

    LibToast.info('Iniciando solicitud de Datos');

    await this.loadAllClientes(1);
  }

  async loadAllClientes(pagina) {
    let respuesta = await DataService.indexCliente(pagina);

    if (respuesta.success) {
      const data = respuesta.data;

      const lista = [...this.state.listaClientes, ...data.clientes];
      const isCompletado = data.numTotalPaginas === pagina;

      this.setState({
        listaClientes: lista,
        numPagina: pagina,
        numTotalPaginas: data.numTotalPaginas,
        isCompletado
      });

      if (isCompletado) {
        LibToast.success('Datos Recibidos');
      } else {
        let fn = () => this.loadAllClientes(pagina + 1);
        setTimeout(fn, 300);
      }
    } else {
      LibToast.alert(respuesta.msg);
    }
  }

  onLoadCliente() {}

  render() {
    return (
      <div className={'container-main ' + this.state.modoGrid}>
        <div className="cell cell-topbar">
          <TopBar session={session}>
            <TopBarCrm />
          </TopBar>
        </div>

        <div className="cell cell-browser">
          <ListaCliente
            listaClientes={this.state.listaClientes}
            numPagina={this.state.numPagina}
            numTotalPaginas={this.state.numTotalPaginas}
            isCompleado={this.state.isCompletado}
          />
        </div>

        <div className="cell-data-main">main</div>
        <div
          className="cell-data-add"
          onClick={e => this.setModoGestion('addGestion')}
        >
          add
        </div>
        <div className="cell-data-historial">historial</div>
      </div>
    );
  }
}

export default Crm;
