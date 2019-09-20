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

    this.state = {
      cliente: null
    };

    ObserverSelectCliente.subscribe('Crm', this.onSelectCliente);
  }

  onSetCliente = cliente => {
    this.setState({ cliente });
  };

  onSelectCliente = async clienteSelected => {
    this.setState({ cliente: clienteSelected });
    ObserverDataPersonal.onDataSourceChange();
  };

  onUpdateModel = clienteUpdated => {
    //actualizar elcliente actual
    console.log('crm.onUpdateModel');
    this.setState({
      cliente: clienteUpdated
    });
    console.log(clienteUpdated);
  };

  onInserCliente = dataInsert => {
    //no se usa en crm
  };

  onDeleteCliente = id_cliente => {
    //no se usa en crm
  };

  render() {
    const eventosCrud = {
      onInserCliente: this.onInserCliente,
      onUpdateModel: this.onUpdateModel,
      onDeleteCliente: this.onDeleteCliente
    };

    return (
      <div className={'container-main'}>
        <TopBar>
          <TopBarCrm />
        </TopBar>
        <BrowserCliente />
        <SeccionMain cliente={this.state.cliente} {...eventosCrud} />
        <SeccionAdd cliente={this.state.cliente} />
        <SeccionHistorial cliente={this.state.cliente} />
      </div>
    );
  }
}

export default Crm;
