import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';
import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModoEdit: false
    };

    this.idClienteOld = null;
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

    //let texto = JSON.stringify(this.props.cliente);
    //console.log(texto);

    const c = this.props.cliente;

    let isEdit = this.state.isModoEdit;

    if (this.idClienteOld !== c.id_cliente) {
      isEdit = false;
      this.idClienteOld = c.id_cliente;
    }

    return (
      <div className="panfull">
        <PanCmdEdit
          id_cliente={c.id_cliente}
          setModoEdicion={() => this.setModoEdicion()}
          setModoRead={() => this.setModoRead()}
          onClickSave={() => this.onClickSave()}
          onAfterSave={() => this.onAfterSave()}
        />
        <table className="table table-sm table-striped teditdata">
          <tbody>
            <TrDataEditTXT
              isEdit={isEdit}
              valor={c.nombre}
              valorEdit={c.nombre}
              label="Nombre"
            />

            <TrDataEditTXT
              isEdit={isEdit}
              valor={c.apaterno}
              valorEdit={c.apaterno}
              label="A. Paterno"
            />

            <TrDataEditTXT
              isEdit={isEdit}
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
