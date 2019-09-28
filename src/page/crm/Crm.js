import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';
import SeccionMain from './seccionMain/SeccionMain';
import SeccionAdd from './seccionAdd/SeccionAdd';
import FormAddCliente from './modal/formAddCliente/FormAddCliente';
import ObserverTopBarCrm from './topBarCrm/ObserverTopBarCrm';

class Crm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShowFormAddCliente: false
    };

    this.observerTopBar = new ObserverTopBarCrm();

    this.observerTopBar.registrarfnShowFormAddCliente(() => {
      this.setState({
        isShowFormAddCliente: true
      });
    });

    this.closeFormCliente = () => {
      this.setState({
        isShowFormAddCliente: false
      });
    };

    this.onSaveData = () => {
      console.log('xxxxxxxx');
    };
  }

  render() {
    return (
      <div className={'container-main'}>
        <TopBar>
          <TopBarCrm observerTopBar={this.observerTopBar} />
        </TopBar>
        <BrowserCliente />
        <SeccionMain />
        <SeccionAdd />
        <SeccionHistorial />

        <FormAddCliente
          isShow={this.state.isShowFormAddCliente}
          onClose={this.closeFormCliente}
          onSaveData={this.onSaveData}
        />
      </div>
    );
  }
}

export default Crm;
