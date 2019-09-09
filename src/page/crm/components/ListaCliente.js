import './ListaCliente.css';

import React, { Component } from 'react';
import ItemClienteLista from './ItemClienteLista';
import { ProgressBar, Tab, Tabs } from 'react-bootstrap';
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
        165}px`;
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

    const tituloClientes = (
      <div title="Clientes asignados" className="pestanaTab">
        <i className="fa fa-user" />{' '}
        <span className="badge badge-dark badgeTituloTab">
          {this.props.listaClientes.length}
        </span>
      </div>
    );

    return (
      <div className="listaClientes">
        <Tabs defaultActiveKey="cliente">
          <Tab eventKey="cliente" title={tituloClientes}>
            <div className="seccionTopListaCliente p-2">{seccionTop}</div>
            <div className="seccionOrderLista" title="Ordenar resultados">
              <div className="wrapperOrderNombre">
                Nombre <i className="fa fa-sort-down" />{' '}
                <i className="fa fa-sort-up" />{' '}
              </div>
              <div className="WeraperOrderKI">
                Prioridad <i className="fa fa-sort-down" />{' '}
                <i className="fa fa-sort-up" />{' '}
              </div>
            </div>
            <div id="wrapperListaCliente">{lista}</div>
          </Tab>

          <Tab
            eventKey="comments"
            title={
              <div>
                <i className="fa fa-comments" />
              </div>
            }
          >
            <div>x</div>
          </Tab>
          <Tab
            eventKey="envelope"
            title={
              <div>
                <i className="fa fa-envelope" />
              </div>
            }
          >
            <div>en</div>
          </Tab>
          <Tab
            eventKey="calendar"
            title={
              <div>
                <i className="fa fa-calendar" />
              </div>
            }
          >
            <div>calendar</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default ListaCliente;
