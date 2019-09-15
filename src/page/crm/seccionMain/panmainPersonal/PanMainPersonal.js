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

    const p = this.props.cliente;

    return (
      <div className="panfull">
        <PanCmdEdit
          onClickEdit={this.onClickEdit}
          onClickSave={this.onClickSave}
          onAfterSave={this.onAfterSave}
        />
        <table className="table table-sm table-striped teditdata">
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{p.nombre}</td>
            </tr>
            <tr>
              <th>A Paterno</th>
              <td>{p.apaterno}</td>
            </tr>
            <tr>
              <th>A Materno</th>
              <td>{p.amaterno}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
