import React, { Component } from 'react';
import CampoOrder from './CampoOrder';

class BoxOrderListaCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campoOrden: ''
    };
  }

  onChangeOpcion(prop) {}

  render() {
    return (
      <div className="seccionOrderLista pt-1" title="Ordenar resultados">
        <CampoOrder
          cname="wrapperOrderNombre"
          label="Nombre"
          onChangeOpcion={this.onChangeOpcion}
        />
        <CampoOrder
          cname="WeraperOrderKI"
          label="Prioridad"
          onChangeOpcion={this.onChangeOpcion}
        />
      </div>
    );
  }
}

export default BoxOrderListaCliente;
