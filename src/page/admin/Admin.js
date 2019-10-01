import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarAdm from './topBarAdm/TopBarAdm';

import BrowserUsuarios from './browserUsuarios/BrowserUsuarios';

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
        <BrowserUsuarios />
      </div>
    );
  }
}

export default Admin;
