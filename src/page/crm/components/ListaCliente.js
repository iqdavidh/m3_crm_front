import React, { Component } from 'react';
import ItemClienteLista from './ItemClienteLista';

class ListaCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaClientes: [],
      listaFiltrada: [],
      texto: '',
      filtroEstatus: null
    };
  }
  render() {
    const lista = this.props.listaClientes.map((c, index) => {
      console.log(index);
      return (
        <ItemClienteLista Cliente={c} numItem={index} key={c.id_contacto} />
      );
    });

    return (
      <div className="listaClientes">
        <div>Barra</div>
        <div>{lista}</div>
      </div>
    );
  }
}

export default ListaCliente;
