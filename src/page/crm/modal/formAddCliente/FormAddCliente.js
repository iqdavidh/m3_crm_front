import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ObserverNewCliente from './ObserverNewCliente';
import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';
import FactoryListaDataEdit from '../../../../components/edicion/FactoryListaDataEdit';

class FormAddCliente extends Component {
  constructor(props, context) {
    super(props, context);
    this.observerData = ObserverNewCliente;

    let lista = [];

    const builderNombre = new BuilderConfigControlItem('nombre', 'Nombre');
    builderNombre.setIsRequired();
    lista.push(builderNombre.getConfigControlItem());

    /*------------------------------------------------------------*/
    const builderAPaterno = new BuilderConfigControlItem(
      'apaterno',
      'A. Paterno'
    );
    builderAPaterno.setIsRequired();
    lista.push(builderAPaterno.getConfigControlItem());

    /*------------------------------------------------------------*/
    const builderAMaterno = new BuilderConfigControlItem(
      'amaterno',
      'A. Materno'
    );
    builderAMaterno.setIsRequired();
    lista.push(builderAMaterno.getConfigControlItem());

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('email1', 'Email');
      lista.push(b.getConfigControlItem());
    }
    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('tel', 'Teléfono');
      lista.push(b.getConfigControlItem());
    }

    //iniciliazar todos los controles con estado edit
    lista.forEach(configControl => {
      configControl.isModoInicialEdit = true;
    });

    this.listaConfigControl = lista;

    this.state = {
      clienteNew: {
        nombre: '',
        apaterno: '',
        amaterno: '',
        email1: '',
        tel: ''
      }
    };
  }

  render() {
    let lista = FactoryListaDataEdit(
      this.state.clienteNew,
      this.listaConfigControl,
      this.observerData
    );

    return (
      <Modal show={this.props.isShow} onHide={event => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa fa-user"></i> Crear Cliente
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <table className="table table-sm table-striped teditdata">
            <tbody>{lista}</tbody>
          </table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">
            <i className="fa fa-upload"></i> Crear
          </Button>

          <Button variant="secondary" onClick={event => this.props.onClose()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormAddCliente;
