import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PestanaTab from '../../../components/pestanaTab/PestanaTab';

import './SeccionMain.css';
import PanMainPersonal from './panmainPersonal/PanMainPersonal';

class SeccionMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cliente: props.cliente
    };
  }

  onSaveCliente = data => {};

  render() {
    const tituloTabPer = (
      <PestanaTab icon="fa fa-user" title="Datos Personales" />
    );
    const tituloTabDom = <PestanaTab icon="fa fa-home" title="s" />;

    return (
      <div className="cell-data-main SeccionMain wrapperTab">
        <Tabs defaultActiveKey="personal" vertical="true">
          <Tab eventKey="personal" title={tituloTabPer}>
            <PanMainPersonal
              cliente={this.state.cliente}
              onSaveCliente={this.onSaveCliente}
            />
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
