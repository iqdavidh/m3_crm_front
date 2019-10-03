import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import PanCuenta from './panCuenta/PanCuenta';

class Cuenta extends Component {
  render() {
    return (
      <div className="container-main-cuenta">
        <TopBar />
        <PanCuenta />
      </div>
    );
  }
}

export default Cuenta;
