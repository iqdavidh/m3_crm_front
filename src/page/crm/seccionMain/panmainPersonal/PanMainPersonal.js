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

  setModoEdicion() {
    this.setState({ isModoEdit: true });
  }

  setModoRead() {
    this.setState({ isModoEdit: false });
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
          setModoEdicion={() => this.setModoEdicion()}
          setModoRead={() => this.setModoRead()}
          onClickSave={() => this.onClickSave()}
          onAfterSave={() => this.onAfterSave()}
        />
        <table className="table table-sm table-striped teditdata">
          <tbody>
            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.nombre}
              valorEdit={c.nombre}
              label="Nombre"
            />

            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.apaterno}
              valorEdit={c.apaterno}
              label="A. Paterno"
            />

            <TrDataEditTXT
              isEdit={this.state.isModoEdit}
              valor={c.amaterno}
              valorEdit={c.amaterno}
              label="A. Materno"
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
