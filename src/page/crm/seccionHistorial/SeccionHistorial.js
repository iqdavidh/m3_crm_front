import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabListaCliente from '../browserCliente/tabListaCliente/TabListaCliente';

class SeccionHistorial extends Component {
  render() {
    //{this.state.numContactos}

    const tituloSeg = (
      <div title="Comentarios de Seguimiento" className="pestanaTab">
        <i className="fa fa-comment" />{' '}
        <span className="badge badge-dark badgeTituloTab">0</span>
      </div>
    );

    const tituloTareas = (
      <div title="Clientes asignados" className="pestanaTab">
        <i className="fa fa-user" />{' '}
        <span className="badge badge-dark badgeTituloTab">0</span>
      </div>
    );

    return (
      <div className="SEccionHistorial">
        <Tabs defaultActiveKey="msg">
          <Tab eventKey="cliente" title={tituloSeg}>
            <TabListaCliente onUpdateNumContactos={this.onUpdateNumContactos} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionHistorial;
