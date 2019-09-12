import './BrowserCliente.css';

import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabListaCliente from './tabListaCliente/TabListaCliente';

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
      <div title="Clientes asignados" className="pestanaTab">
        <i className="fa fa-user" />{' '}
        <span className="badge badge-dark badgeTituloTab">
          {this.state.numContactos}
        </span>
      </div>
    );

    return (
      <div className="listaClientes">
        <Tabs defaultActiveKey="cliente">
          <Tab eventKey="cliente" title={tituloClientes}>
            <TabListaCliente onUpdateNumContactos={this.onUpdateNumContactos} />
          </Tab>

          <Tab
            eventKey="calendar"
            title={
              <div>
                <i className="fa fa-calendar" />
              </div>
            }
          >
            <div>calendar</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default BrowserCliente;
