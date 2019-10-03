import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import PanCuenta from './panCuenta/PanCuenta';

class Cuenta extends Component {
  render() {
    return (
      <div className="container-main-cuenta">
        <TopBar />

        <div className="row justify-content-center">
          <div className="col-6 p-2">
            <PanCuenta />
          </div>
        </div>
      </div>
    );
  }
}

export default Cuenta;
