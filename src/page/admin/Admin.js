import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarAdm from './topBarAdm/TopBarAdm';
import BrowserCliente from '../crm/browserCliente/BrowserCliente';

class Admin extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={'container-main-admin'}>
        <TopBar>
          <TopBarAdm />
        </TopBar>
        <BrowserCliente />
      </div>
    );
  }
}

export default Admin;
