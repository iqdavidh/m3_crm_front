import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class FormAddCliente extends Component {
  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Modal show={this.props.isShow} onHide={event => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa fa-user"></i> Crear Cliente
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            <i className="fa fa-upload"></i> Crear
          </Button>

          <Button variant="secondary" onClick={event => this.handleClose()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FormAddCliente;
