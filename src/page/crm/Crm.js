import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';
import SeccionMain from './seccionMain/SeccionMain';
import ObserverSelectCliente from './browserCliente/tabListaCliente/ObserverSelectCliente';
import SeccionAdd from './seccionAdd/SeccionAdd';
import ObserverDataPersonal from './seccionMain/panmainPersonal/ObserverDataPersonal';

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cliente: null
    };

    ObserverSelectCliente.subscribe('Crm', this.onSelectCliente);
  }

  onSetCliente = cliente => {
    this.setState({ cliente });
  };

  onSelectCliente = async cliente => {
    this.setState({ cliente });
    ObserverDataPersonal.onDataSourceChange();
  };

  render() {
    return (
      <div className={'container-main'}>
        <TopBar>
          <TopBarCrm />
        </TopBar>
        <BrowserCliente />
        <SeccionMain cliente={this.state.cliente} />
        <SeccionAdd cliente={this.state.cliente} />
        <SeccionHistorial cliente={this.state.cliente} />
      </div>
    );
  }
}

export default Crm;
