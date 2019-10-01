import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarAdm from './topBarAdm/TopBarAdm';
import SeccionUsuarios from './seccionUsuarios/SeccionUsuarios';

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
        <SeccionUsuarios />
      </div>
    );
  }
}

export default Admin;
