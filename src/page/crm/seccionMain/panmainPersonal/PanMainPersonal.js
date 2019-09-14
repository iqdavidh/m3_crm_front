import React, { Component } from 'react';
import ObserverSelectCliente from '../../browserCliente/tabListaCliente/ObserverSelectCliente';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let texto = JSON.stringify(this.props.cliente);

    return (
      <div className="panfull">
        Datos personales
        {texto}
      </div>
    );
  }
}

export default PanMainPersonal;
