import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class TopBarCrm extends Component {
  onShowformAddCliente() {}

  render() {
    return (
      <Form inline className="ML20">
        <Button variant="outline-success">
          <i className="fa fa-plus"></i> Agregar Cliente
        </Button>
      </Form>
    );
  }
}

export default TopBarCrm;
