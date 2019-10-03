import React, { Component } from 'react';
import ObserverDataCuenta from './ObserverDataCuenta';

class PanCuenta extends Component {
  constructor(props, context) {
    super(props, context);

    this.observerData = ObserverDataCuenta;

    this.state = {};

    const fnSetCliente = cliente => {
      this.setState({ cliente });
    };
  }

  render() {
    return <div>Yea</div>;
  }
}

export default PanCuenta;
