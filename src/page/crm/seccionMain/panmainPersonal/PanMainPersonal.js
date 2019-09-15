import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModoEdit: false
    };
  }

  onClickEdit() {
    console.log('onclick edit');
  }

  onClickSave() {
    console.log('onclick save');
  }

  onAfterSave() {
    console.log('onclick after save');
  }

  render() {
    if (!this.props.cliente) {
      return null;
    }

    let texto = JSON.stringify(this.props.cliente);

    console.log(texto);

    return (
      <div className="panfull">
        <PanCmdEdit
          onClickEdit={this.onClickEdit}
          onClickSave={this.onClickSave}
          onAfterSave={this.onAfterSave}
        />
        Datos personales
      </div>
    );
  }
}

export default PanMainPersonal;
