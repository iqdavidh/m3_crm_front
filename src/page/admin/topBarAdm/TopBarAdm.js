import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class TopBarAdm extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerTopBar = props.observerTopBar;
  }

  onShowformAddUsuario() {
    //alert(0);
    this.observerTopBar.fnShowFormAddUsuario();
  }

  render() {
    return (
      <Form inline className="ML20">
        <Button
          variant="outline-warning"
          onClick={event => this.onShowformAddUsuario()}
        >
          <i className="fa fa-plus"></i> Agregar Usuario
        </Button>
      </Form>
    );
  }
}

export default TopBarAdm;
