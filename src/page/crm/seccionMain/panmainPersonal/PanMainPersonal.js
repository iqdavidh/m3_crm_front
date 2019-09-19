import React, { Component } from 'react';
import PanCmdEdit from '../../../../components/panCmdEdit/PanCmdEdit';

import ObserverDataPersonal from './ObserverDataPersonal';
import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';
import TrDataEditTXT from '../../../../components/edicion/TrDataEditTXT';

class PanMainPersonal extends Component {
  constructor(props) {
    super(props);

    this.observerData = ObserverDataPersonal;

    this.observerData.registrarCbSaveData(this.cbSaveData);

    this.listaConfigControl = [];

    this.crearListaConfigControl();
  }

  crearListaConfigControl() {
    /*configurar control nombre *************************************************** */
    const builderNombre = new BuilderConfigControlItem('nombre', 'Nombre');
    builderNombre.setIsRequired();
    this.listaConfigControl.push(builderNombre.getConfigControlItem());

    const builderAPaterno = new BuilderConfigControlItem(
      'apaterno',
      'A. Paterno'
    );
    builderAPaterno.setIsRequired();
    this.listaConfigControl.push(builderAPaterno.getConfigControlItem());

    const builderAMaterno = new BuilderConfigControlItem(
      'amaterno',
      'A. Materno'
    );
    builderAMaterno.setIsRequired();
    this.listaConfigControl.push(builderAMaterno.getConfigControlItem());
    /* **************************************************************************** */
  }

  cbSaveData = () => {
    const data = this.observerData.getDataEdit();
    console.log(data);
  };

  render() {
    if (!this.props.cliente) {
      return null;
    }

    /* Crear lista de Componentes */

    const c = this.props.cliente;

    const fnGetTXT = control => {
      return (
        <TrDataEditTXT
          campo={control.campo}
          label={control.label}
          dataSource={c}
          validacion={control.validacion}
          observerData={this.observerData}
          key={control.campo}
        />
      );
    };

    let lista = this.listaConfigControl.map(control => {
      if (control.tipo === 'TXT') {
        return fnGetTXT(control);
      }
      console.log('Tipo no detectado');
      return null;
    });
    return (
      <div className="panfull">
        <PanCmdEdit
          id_cliente={c.id_cliente}
          observerData={this.observerData}
        />

        <table className="table table-sm table-striped teditdata">
          <tbody>{lista}</tbody>
        </table>
      </div>
    );
  }
}

export default PanMainPersonal;
