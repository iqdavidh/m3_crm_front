import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabHistCom from '../seccionHistorial/tabhistCom/TabHistCom';
import TabHistTarea from '../seccionHistorial/tabhistTarea/TabHistTarea';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';

import './SeccionMain.css';

class SeccionMain extends Component {
  render() {
    const tituloTabPersonal = (
      <PestanaTab icon="fa fa-comment" title="Datos Personales" />
    );

    const tituloTabDom = <PestanaTab icon="fa fa-calendar" title="s" />;

    return (
      <div className="cell-data-main SeccionMain">
        <Tabs defaultActiveKey="personal" vertical="true">
          <Tab eventKey="personal" title={tituloTabPersonal}>
            pers
          </Tab>

          <Tab eventKey="tareas" title={tituloTabDom}>
            tareas
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SeccionMain;
