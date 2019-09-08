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
      indexPagina: 1,
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

    console.log('modoGrid', this.state.modoGrid);
  }

  async componentDidMount() {
    /* la primera ves se cargan los datos*/
    let respuesta = await DataService.indexCliente(1);
    if (respuesta.success) {
    } else {
    }
    console.log(respuesta);
  }

  botonClick() {
    console.log('x');
    LibToast.success('yea');
  }

  render() {
    return (
      <div className={'container-main ' + this.state.modoGrid}>
        <div className="cell cell-topbar">
          <TopBar session={session}>
            <TopBarCrm />
          </TopBar>
        </div>

        <div className="cell cell-browser">
          <ListaCliente />
        </div>

        <div className="cell-data-main" onClick={e => this.botonClick()}>
          main
        </div>
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
