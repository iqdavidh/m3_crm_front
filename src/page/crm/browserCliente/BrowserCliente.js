import './BrowserCliente.css';

import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabListaCliente from './tabListaCliente/TabListaCliente';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';

class BrowserCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numContactos: 0
    };
  }

  onUpdateNumContactos = num => {
    this.setState({ numContactos: num });
  };

  render() {
    const tituloClientes = (
      <PestanaTab
        title="Clientes asignados"
        icon="fa fa-user"
        contador={this.state.numContactos}
      />
    );

    const tituloCalendar = (
      <PestanaTab icon="fa fa-calendar" title="Tareas asociadas" label="" />
    );
    return (
      <div className="listaClientes">
        <Tabs defaultActiveKey="cliente">
          <Tab eventKey="cliente" title={tituloClientes}>
            <TabListaCliente onUpdateNumContactos={this.onUpdateNumContactos} />
          </Tab>

          <Tab eventKey="calendar" title={tituloCalendar}>
            <div>calendar</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default BrowserCliente;
