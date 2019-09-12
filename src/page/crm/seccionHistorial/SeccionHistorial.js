import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';
import TabHistCom from './tabhistCom/TabHistCom';
import TabHistTarea from './tabhistTarea/TabHistTarea';

import './SeccionHistorial.css';

class SeccionHistorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numCom: 0,
      numTareas: 0
    };
  }

  render() {
    //{this.state.numContactos}

    const tituloTabCom = (
      <PestanaTab
        icon="fa fa-comment"
        title="Comentarios de Seguimiento"
        label="Comentarios"
        numCom={this.state.numCom}
      />
    );

    const tituloTabTareas = (
      <PestanaTab
        icon="fa fa-calentdar"
        title="Tareas Programadas"
        label="Tareas"
        numTareas={this.state.numTareas}
      />
    );

    return (
      <div className="cell-data-historial SeccionHistorial">
        <Tabs defaultActiveKey="com">
          <Tab eventKey="com" title={tituloTabCom}>
            <TabHistCom />
          </Tab>

          <Tab eventKey="tareas" title={tituloTabTareas}>
            <TabHistTarea />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionHistorial;
