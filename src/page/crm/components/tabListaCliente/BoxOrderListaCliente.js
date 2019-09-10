import React, { Component } from 'react';
import CampoOrder from './CampoOrder';
import ObserverOnOrderChange from './ObserverOnOrderChange';

class BoxOrderListaCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campoOrden: ''
    };

    this.observerOnOrderChange = new ObserverOnOrderChange();
  }

  onChangeOpcion(orderData) {
    this.observerOnOrderChange.onFiltroChange(orderData);
  }

  render() {
    return (
      <div className="seccionOrderLista pt-1" title="Ordenar resultados">
        <CampoOrder
          cname="wrapperOrderNombre"
          label="Nombre"
          observerOnOrderChange={this.observerOnOrderChange}
          onChangeOpcion={this.onChangeOpcion}
        />
        <CampoOrder
          cname="WeraperOrderKI"
          label="Prioridad"
          observerOnOrderChange={this.observerOnOrderChange}
          onChangeOpcion={this.onChangeOpcion}
        />
      </div>
    );
  }
}

export default BoxOrderListaCliente;
