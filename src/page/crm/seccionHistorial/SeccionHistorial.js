import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';

class SeccionHistorial extends Component {
  onUpdateNumContactos = num => {};

  onUpdateNumTareas = num => {};

  render() {
    //{this.state.numContactos}

    const tituloSeg = (
      <PestanaTab
        icon="fa fa-comment"
        title="Comentarios de Seguimiento"
        label=""
      />
    );

    const tituloTareas = (
      <PestanaTab icon="fa fa-comment" title="Tareas Programadas" label="" />
    );

    return (
      <div className="SeccionHistorial">
        <Tabs defaultActiveKey="msg">
          <Tab eventKey="cliente" title={tituloSeg}>
            <div>x</div>
          </Tab>

          <Tab eventKey="cliente" title={tituloTareas}>
            <div>y</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionHistorial;
