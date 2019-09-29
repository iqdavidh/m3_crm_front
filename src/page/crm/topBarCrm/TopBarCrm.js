import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class TopBarCrm extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerTopBar = props.observerTopBar;
  }

  onShowformAddCliente() {
    //alert(0);
    this.observerTopBar.fnShowFormAddCliente();
  }

  render() {
    return (
      <Form inline className="ML20">
        <Button
          variant="outline-success"
          onClick={event => this.onShowformAddCliente()}
        >
          <i className="fa fa-plus"></i> Agregar Cliente
        </Button>
      </Form>
    );
  }
}

export default TopBarCrm;
