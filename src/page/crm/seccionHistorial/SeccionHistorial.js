import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';
import PanHistCom from './panhistCom/PanHistCom';
import PanHistTarea from './panhistTarea/PanHistTarea';

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
        icon="fa fa-calendar"
        title="Tareas Programadas"
        label="Tareas"
        numTareas={this.state.numTareas}
      />
    );

    return (
      <div className="cell-data-historial wrapperTab">
        <Tabs defaultActiveKey="com">
          <Tab eventKey="com" title={tituloTabCom}>
            <PanHistCom />
          </Tab>

          <Tab eventKey="tareas" title={tituloTabTareas}>
            <PanHistTarea />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionHistorial;
