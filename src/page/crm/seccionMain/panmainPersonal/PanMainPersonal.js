import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';
import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModoEdit: false
    };
  }

  onClickEdit() {
    this.setState({ isModoEdit: true });
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

    const c = this.props.cliente;

    return (
      <div className="panfull">
        <PanCmdEdit
          onClickEdit={this.onClickEdit}
          onClickSave={this.onClickSave}
          onAfterSave={this.onAfterSave}
        />
        <table className="table table-sm table-striped teditdata">
          <tbody>
            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.nombre}
              label="Nombre"
            />

            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.apaterno}
              label="A. Paterno"
            />

            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.amaterno}
              label="A. Materno"
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
