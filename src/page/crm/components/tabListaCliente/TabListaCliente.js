import React, { Component } from 'react';
import { ProgressBar, Tab } from 'react-bootstrap';

import ObserverWindowH from '../../../../lib/ObserverWindowH';
import ItemClienteLista from './ItemClienteLista';
import FiltroListaCliente from './FiltroListaCliente';
import LibToast from '../../../../lib/LibToast';
import DataService from '../../../../servicios/dataService/dataLocal/DataLocal';

class TabListaCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaClientes: [],
      listaFiltrada: [],
      numPagina: 0,
      numTotalPaginas: 0,
      isCompletado: false
    };

    this.isObserverRegistrado = false;
  }

  async componentDidMount() {
    if (!this.isObserverRegistrado) {
      let fn = h => {
        document.getElementById('wrapperListaCliente').style.height = `${h -
          165}px`;
      };

      ObserverWindowH.subscribe('wrapperListaCliente', fn);

      fn(window.innerHeight);
      this.isObserverRegistrado = true;
    }

    /* la primera ves se cargan **************************** los datos*/

    LibToast.info('Iniciando solicitud de Datos');

    await this.loadAllClientes(1);
  }

  onFiltroChange = filtro => {
    console.log('onfiltroCahnge dewsde listaCliente', filtro);

    let listaFiltrada = [];

    if (filtro.isFiltro) {
      let listaFiltros = [];

      if (filtro.texto !== '') {
        filtro.texto = filtro.texto.toString().toLowerCase();

        listaFiltros.push(cliente => {
          const nombreCompleto = (
            cliente.nombre +
            ' ' +
            cliente.apaterno +
            ' ' +
            cliente.amaterno
          ).toLowerCase();
          const isTextoPresente = nombreCompleto.includes(filtro.texto);
          return isTextoPresente;
        });
      }

      if (filtro.indexEstatus !== 'SinFiltro') {
        listaFiltros.push(cliente => {
          const prioridad = cliente.indicadores.funelIndex;

          //console.log( `${prioridad}  ==  ${filtro.indexEstatus}`);
          return prioridad.toString() === filtro.indexEstatus.toString();
        });
      }

      listaFiltrada = this.state.listaClientes.filter(cliente => {
        let isShow = true;

        listaFiltros.forEach(fnEvalFiltro => {
          if (isShow) {
            isShow = fnEvalFiltro(cliente);
            console.log('evañ', isShow);
          }
        });

        return isShow;
      });
    } else {
      listaFiltrada = this.state.listaClientes.filter(cliente => {
        return true;
      });
    }

    this.setState({ listaFiltrada });
  };

  render() {
    const state = this.state;

    const listaItemCliente = state.listaFiltrada.map((c, index) => {
      return (
        <ItemClienteLista Cliente={c} numItem={index} key={c.id_contacto} />
      );
    });

    let seccionTop = null;

    if (state.isCompletado) {
      seccionTop = <FiltroListaCliente onFiltroChange={this.onFiltroChange} />;
    } else {
      let now = 0;

      if (state.numTotalPaginas > 0) {
        now = Math.round((state.numPagina * 100) / state.numTotalPaginas);
      }

      seccionTop = <ProgressBar now={now} label={`Loading ${now}%`} />;
    }

    return (
      <div>
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
        <div id="wrapperListaCliente">{listaItemCliente}</div>
      </div>
    );
  }

  async loadAllClientes(pagina) {
    let respuesta = await DataService.indexCliente(pagina);

    if (respuesta.success) {
      const data = respuesta.data;

      const lista = [...this.state.listaClientes, ...data.clientes];
      const isCompletado = data.numTotalPaginas === pagina;

      this.props.onUpdateNumContactos(lista.length);

      this.setState({
        listaClientes: lista,
        listaFiltrada: lista,
        numPagina: pagina,
        numTotalPaginas: data.numTotalPaginas,
        isCompletado
      });

      if (isCompletado) {
        LibToast.success('Datos Recibidos');
      } else {
        let fn = () => this.loadAllClientes(pagina + 1);
        setTimeout(fn, 300);
      }
    } else {
      LibToast.alert(respuesta.msg);
    }
  }
}

export default TabListaCliente;
