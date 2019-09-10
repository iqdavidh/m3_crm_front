import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import AutService from '../../servicios/autService/AutService';
import TopBarCrm from './components/TopBarCrm';
import BrowserCliente from './components/BrowserCliente';

const session = AutService.getCurrentSession();

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return (
      <div className={'container-main ' + this.state.modoGrid}>
        <div className="cell cell-topbar">
          <TopBar session={session}>
            <TopBarCrm />
          </TopBar>
        </div>

        <div className="cell cell-browser">
          <BrowserCliente session={session} />
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
