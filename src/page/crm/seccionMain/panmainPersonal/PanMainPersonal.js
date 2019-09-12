import React, { Component } from 'react';

class PanMainPersonal extends Component {
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
