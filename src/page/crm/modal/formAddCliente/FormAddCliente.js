import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class FormAddCliente extends Component {
  render() {
    return (
      <Modal show={this.props.isShow} onHide={event => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa fa-user"></i> Crear Cliente
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

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
