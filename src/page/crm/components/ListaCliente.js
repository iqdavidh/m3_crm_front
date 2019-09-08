import React, { Component } from 'react';
import ItemClienteLista from './ItemClienteLista';
import { ProgressBar } from 'react-bootstrap';

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
    const props = this.props;
    const lista = props.listaClientes.map((c, index) => {
      return (
        <ItemClienteLista Cliente={c} numItem={index} key={c.id_contacto} />
      );
    });

    let seccionTop = null;

    if (props.isCompletado) {
      seccionTop = <div>Filtro</div>;
    } else {
      const now =
        props.numTotalPaginas > 0
          ? Math.round((props.numPagina * 100) / props.numTotalPaginas, 0)
          : 0;

      console.log(now);
      seccionTop = <ProgressBar now={now} label={`${now}%`} srOnly />;
    }

    return (
      <div className="listaClientes">
        <div className="seccionTopListaCliente">{seccionTop}</div>

        <div className="wrapperListaCliente">{lista}</div>
      </div>
    );
  }
}

export default ListaCliente;
