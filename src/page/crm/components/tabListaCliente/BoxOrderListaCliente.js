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

  onOrderChange = orderData => {
    this.observerOnOrderChange.onFiltroChange(orderData);
    this.props.onOrderChange(orderData);
  };

  render() {
    return (
      <div className="seccionOrderLista pt-1" title="Ordenar resultados">
        <CampoOrder
          cname="wrapperOrderNombre"
          label="Nombre"
          observerOnOrderChange={this.observerOnOrderChange}
          onOrderChange={this.onOrderChange}
        />
        <CampoOrder
          cname="WeraperOrderKI"
          label="Prioridad"
          observerOnOrderChange={this.observerOnOrderChange}
          onOrderChange={this.onOrderChange}
        />
      </div>
    );
  }
}

export default BoxOrderListaCliente;
