import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';
import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';
import ObserverDataPersonal from './ObserverDataPersonal';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.observerData.registrarCbSaveData(this.cbSaveData);
  }

  cbSaveData = () => {
    const data = this.observerData.getDataEdit();
    console.log(data);
  };

  render() {
    if (!this.props.cliente) {
      return null;
    }

    const c = this.props.cliente;

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
