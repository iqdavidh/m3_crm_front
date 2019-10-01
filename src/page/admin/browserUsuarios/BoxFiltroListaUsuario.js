import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class BoxFiltroListaUsuario extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      texto: '',
      isAdmin: 'SinFiltro'
    };
  }

  callOnFiltroChange(texto, isAdmin) {
    let eventoFiltroChange = {
      texto,
      isAdmin,
      isFiltro: !(texto === '' && isAdmin === 'SinFiltro')
    };

    this.props.onFiltroChange(eventoFiltroChange);
  }

  onTextoChange = event => {
    let valor = event.target.value;
    this.setState({ texto: valor });
    this.callOnFiltroChange(valor, this.state.isAdmin);
  };

  onIsAdminChange = event => {
    let valor = event.target.value;

    if (valor === 'true') {
      valor = true;
    } else if (valor === 'false') {
      valor = false;
    }

    this.setState({ isAdmin: valor });
    this.callOnFiltroChange(this.state.texto, valor);
  };

  render() {
    return (
      <div className="flexDiv">
        <div className="p-1">
          <i className="fa fa-filter" />
        </div>
        <input
          className="form-control form-control-sm FiltroListaUsuario"
          title="Buscar Texto"
          value={this.state.texto}
          onChange={this.onTextoChange}
        />

        <Form.Control
          title="Filtrar por tipo de Rol"
          size="sm"
          onChange={this.onIsAdminChange}
          as="select"
        >
          <option value={'SinFiltro'}>* Sin Filtro *</option>
          <option value={true}>Administrador</option>
          <option value={false}>Vendedor</option>
        </Form.Control>
      </div>
    );
  }
}

export default BoxFiltroListaUsuario;
