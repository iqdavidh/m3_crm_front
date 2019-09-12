import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import AutService from '../../servicios/autService/AutService';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';

const session = AutService.getCurrentSession();

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cliente: null
    };
  }

  onSetCliente = cliente => {
    this.setState({ cliente });
  };

  render() {
    return (
      <div className={'container-main'}>
        <div className="cell cell-topbar">
          <TopBar session={session}>
            <TopBarCrm />
          </TopBar>
        </div>

        <div className="cell cell-browser">
          <BrowserCliente session={session} />
        </div>

        <div className="cell-data-main">main</div>
        <div className="cell-data-add">add</div>
        <div className="cell-data-historial">historial</div>
      </div>
    );
  }
}

export default Crm;
