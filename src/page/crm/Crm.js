import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';
import SeccionMain from './seccionMain/SeccionMain';
import SeccionAdd from './seccionAdd/SeccionAdd';

class Crm extends Component {
  render() {
    return (
      <div className={'container-main'}>
        <TopBar>
          <TopBarCrm />
        </TopBar>
        <BrowserCliente />
        <SeccionMain />
        <SeccionAdd />
        <SeccionHistorial />
      </div>
    );
  }
}

export default Crm;
