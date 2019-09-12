import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import ObserverWindowH from '../../../../lib/ObserverWindowH';
import ItemClienteLista from './ItemClienteLista';
import BoxFiltroListaCliente from './BoxFiltroListaCliente';
import LibToast from '../../../../lib/LibToast';
import DataService from '../../../../servicios/dataService/dataLocal/DataLocal';
import BoxOrderListaCliente from './BoxOrderListaCliente';
import ObserverSelectCliente from './ObserverSelectCliente';

class TabListaCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaClientes: [],
      listaFiltrada: [],
      numPagina: 0,
      numTotalPaginas: 0,
      isCompletado: false,
      fnSort: null,
      dataFiltro: null,
      clienteSelected: null,
      idClienteSelected: null
    };

    ObserverSelectCliente.subscribe('TabListaCliente', this.onSelectCliente);

    this.isObserverRegistrado = false;
  }

  onSelectCliente = async idCliente => {
    //buscar el cliente
    const clienteSelected = this.state.listaClientes.find(c => {
      return c.id_cliente === idCliente;
    });

    if (this.state.clienteSelected) {
      this.setState({
        idClienteSelected: this.state.clienteSelected.id_cliente
      });
    }

    //verificar si ya cargamos datosd e cliente

    if (!clienteSelected.isDataLoaded) {
      const clienteLoaded = DataService.dataClienteSelected(idCliente);

      clienteLoaded.isDataLoaded = true;
      this.setState({ clienteSelected: clienteLoaded });
    }
  };

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

  onFiltroChange = dataFiltro => {
    let listaFiltrada = [];

    this.setState({ dataFiltro });

    if (dataFiltro.isFiltro) {
      let listaFiltros = [];

      if (dataFiltro.texto !== '') {
        dataFiltro.texto = dataFiltro.texto.toString().toLowerCase();

        listaFiltros.push(cliente => {
          const nombreCompleto = (
            cliente.nombre +
            ' ' +
            cliente.apaterno +
            ' ' +
            cliente.amaterno
          ).toLowerCase();
          const isTextoPresente = nombreCompleto.includes(dataFiltro.texto);
          return isTextoPresente;
        });
      }

      if (dataFiltro.indexEstatus !== 'SinFiltro') {
        listaFiltros.push(cliente => {
          const prioridad = cliente.indicadores.funelIndex;

          //console.log( `${prioridad}  ==  ${filtro.indexEstatus}`);
          return prioridad.toString() === dataFiltro.indexEstatus.toString();
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

  onOrderChange = dataSort => {
    let fnSort = null;

    const tipoOrder = dataSort.asc ? 1 : -1;

    if (dataSort.label === 'Nombre') {
      fnSort = (a, b) => {
        if (a.apaterno === b.apaterno) {
          if (a.nombre === b.nombre) {
            return 0;
          }

          if (a.nombre > b.nombre) {
            return tipoOrder;
          }

          return -tipoOrder;
        }

        if (a.apaterno > b.apaterno) {
          return tipoOrder;
        }

        return -tipoOrder;
      };
    } else {
      fnSort = (a, b) => {
        if (a.indicadores.funelIndex === b.indicadores.funelIndex) {
          return 0;
        }

        if (a.indicadores.funelIndex > b.indicadores.funelIndex) {
          return tipoOrder;
        }

        return -tipoOrder;
      };
    }
    this.setState({ fnSort });
  };

  render() {
    const state = this.state;

    let lista = state.listaFiltrada;

    if (this.state.fnSort) {
      lista.sort(this.state.fnSort);
    }

    const listaItemCliente = lista.map((c, index) => {
      return (
        <ItemClienteLista Cliente={c} numItem={index} key={c.id_cliente} />
      );
    });

    let seccionTop = null;

    if (state.isCompletado) {
      seccionTop = (
        <div>
          <BoxFiltroListaCliente onFiltroChange={this.onFiltroChange} />
          <BoxOrderListaCliente onOrderChange={this.onOrderChange} />
        </div>
      );
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