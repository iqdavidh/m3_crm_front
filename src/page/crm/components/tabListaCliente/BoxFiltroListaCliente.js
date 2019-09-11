import React, { Component } from 'react';
import './BoxFiltroListaCliente.css';
import { Form, FormControl } from 'react-bootstrap';

class BoxFiltroListaCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: '',
      indexEstatus: 'SinFiltro'
    };
  }

  callOnFiltroChange(texto, indexEstatus) {
    let eventoFiltroChange = {
      texto,
      indexEstatus,
      isFiltro: !(texto === '' && indexEstatus === 'SinFiltro')
    };

    this.props.onFiltroChange(eventoFiltroChange);
  }

  onTextoChange = event => {
    let valor = event.target.value;
    this.setState({ texto: valor });
    this.callOnFiltroChange(valor, this.state.indexEstatus);
  };

  onPrioridadChange = event => {
    let valor = event.target.value;

    valor = valor === 'SinFiltro' ? 'SinFiltro' : parseInt(valor);

    this.setState({ indexEstatus: valor });
    this.callOnFiltroChange(this.state.texto, valor);
  };

  render() {
    let f = { x: 'nada' };

    return (
      <div className="flexDiv">
        <div className="p-1">
          <i className="fa fa-filter" />
        </div>
        <input
          className="form-control form-control-sm FiltroListaCliente"
          title="Buscar Texto"
          value={this.state.texto}
          onChange={this.onTextoChange}
        />

        <Form.Control
          title="Filtrar por prioridad"
          size="sm"
          onChange={this.onPrioridadChange}
          as="select"
        >
          <option value={'SinFiltro'}>* Sin Filtro *</option>
          <option value={4}>Alta</option>
          <option value={3}>Media</option>
          <option value={2}>Baja</option>
          <option value={1}>No Aplica</option>
        </Form.Control>
      </div>
    );
  }
}

export default BoxFiltroListaCliente;
