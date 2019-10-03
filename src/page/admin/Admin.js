import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarAdm from './topBarAdm/TopBarAdm';

import BrowserUsuarios from './browserUsuarios/BrowserUsuarios';
import ObserverTopBarAdm from './topBarAdm/ObserverTopBarAdm';
import ObserverNewCliente from '../crm/modal/formAddCliente/ObserverNewCliente';
import ObserverUpdateUsuario from './modal/formUsuario/ObserverUpdateUsuario';

class Admin extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerTopBar = new ObserverTopBarAdm();

    this.observerTopBar.registrarfnShowFormAddUsuario(() => {
      ObserverUpdateUsuario.id_usuario = null;
      ObserverUpdateUsuario.onAddUsuario();
    });
  }

  render() {
    return (
      <div className={'container-main-admin'}>
        <TopBar>
          <TopBarAdm observerTopBar={this.observerTopBar} />
        </TopBar>
        <BrowserUsuarios />
      </div>
    );
  }
}

export default Admin;
