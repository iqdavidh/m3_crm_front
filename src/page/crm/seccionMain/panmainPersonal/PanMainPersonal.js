import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';
import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';
import ObserverDataEdit from '../../../../lib/ObserverDataEdit';
import ObserverDataPersonal from './ObserverDataPersonal';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.observerData.registrarCbSaveData(this.cbSaveData);

    this.idClienteOld = null;

    this.state = {
      isModoEdit: false,
      valorEdit: {}
    };
  }

  cbSaveData = () => {
    const data = this.observerData.getDataEdit();
    console.log(data);
  };

  render() {
    if (!this.props.cliente) {
      return null;
    }

    //let texto = JSON.stringify(this.props.cliente);
    //console.log(texto);

    const c = this.props.cliente;
    let isReset = false;

    let isEdit = this.state.isModoEdit;

    if (this.idClienteOld !== c.id_cliente) {
      isEdit = false;
      this.idClienteOld = c.id_cliente;
    }

    return (
      <div className="panfull">
        <PanCmdEdit
          id_cliente={c.id_cliente}
          observerData={this.observerData}
        />
        <table className="table table-sm table-striped teditdata">
          <tbody>
            <TrDataEditTXT
              campo="nombre"
              label="Nombre"
              dataSource={c}
              validacion={{ isRequired: true }}
              observerData={this.observerData}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
