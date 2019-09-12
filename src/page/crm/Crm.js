import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';

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
          <TopBar>
            <TopBarCrm />
          </TopBar>
        </div>

        <div className="cell cell-browser">
          <BrowserCliente />
        </div>

        <div className="cell-data-main">main</div>
        <div className="cell-data-add">add</div>

        <div className="cell-data-historial">
          <SeccionHistorial />
        </div>
      </div>
    );
  }
}

export default Crm;
