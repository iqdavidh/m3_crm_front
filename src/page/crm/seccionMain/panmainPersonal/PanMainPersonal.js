import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModoEdit: false
    };
  }

  render() {
    if (!this.props.cliente) {
      return null;
    }

    let texto = JSON.stringify(this.props.cliente);

    console.log(texto);

    return (
      <div className="panfull">
        <PanCmdEdit />
        Datos personales
      </div>
    );
  }
}

export default PanMainPersonal;
