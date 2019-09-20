import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';
import SeccionMain from './seccionMain/SeccionMain';
import SeccionAdd from './seccionAdd/SeccionAdd';
import ObserverSelectCliente from './browserCliente/tabListaCliente/ObserverSelectCliente';
import ObserverDataPersonal from './seccionMain/panmainPersonal/ObserverDataPersonal';

class Crm extends Component {
  constructor(props) {
    super(props);
  }

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
