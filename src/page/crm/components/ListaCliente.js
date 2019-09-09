import React, { Component } from 'react';
import ItemClienteLista from './ItemClienteLista';
import { ProgressBar } from 'react-bootstrap';
import ObserverWindowH from '../../../lib/ObserverWindowH';
import FiltroListaCliente from './FiltroListaCliente';

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

  componentDidMount() {
    let fn = h => {
      document.getElementById('wrapperListaCliente').style.height = `${h -
        105}px`;
    };

    ObserverWindowH.subscribe('wrapperListaCliente', fn);

    fn(window.innerHeight);
  }

  onFiltroChange(dataFiltro) {
    console.log('onfiltroCahnge dewsde listaCliente', dataFiltro);
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
      seccionTop = <FiltroListaCliente onFiltroChange={this.onFiltroChange} />;
    } else {
      const now =
        props.numTotalPaginas > 0
          ? Math.round((props.numPagina * 100) / props.numTotalPaginas, 0)
          : 0;

      seccionTop = <ProgressBar now={now} label={`Loading ${now}%`} />;
    }

    return (
      <div className="listaClientes">
        <div className="seccionTopListaCliente p-2">{seccionTop}</div>
        <div id="wrapperListaCliente">{lista}</div>
      </div>
    );
  }
}

export default ListaCliente;
