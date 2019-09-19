import clientes_dataLocal from './clientes_datalocal';
import AutService from '../../autService/AutService';

const paginacion = 100;

const DataLocal = {
  indexCliente: async pagina => {
    const session = AutService.getCurrentSession();

    const idUsuario = session.usuario.id_usuario;

    let listaClientesDelUsuario = clientes_dataLocal.filter(c => {
      return (c.id_usuario = idUsuario);
    });
    let indexInicial = (pagina - 1) * paginacion;
    let indexFinal = indexInicial + paginacion - 1;

    indexFinal =
      indexFinal < listaClientesDelUsuario.length
        ? indexFinal
        : listaClientesDelUsuario.length - 1;

    const numTotalPaginas = Math.round(
      listaClientesDelUsuario.length / paginacion,
      0
    );

    let listaPagina = [];

    for (let i = indexInicial; i <= indexFinal; i++) {
      let c = listaClientesDelUsuario[i];

      listaPagina.push({
        id_cliente: c.id_cliente,
        nombre: c.nombre,
        apaterno: c.apaterno,
        amaterno: c.amaterno,
        usuario: c.usuario,
        indicadores: c.indicadores
      });
    }

    const d = {
      success: true,
      msg: '',
      data: {
        total: listaClientesDelUsuario.length,
        numTotalPaginas,
        clientes: listaPagina
      }
    };

    return Promise.resolve(d);
  },
  dataClienteSelected: async id_cliente => {
    //buscar el cliente
    const cliente = clientes_dataLocal.find(c => {
      return c.id_cliente.toString() === id_cliente.toString();
    });

    //buscar los seguimientos

    const d = {
      success: true,
      msg: '',
      data: cliente
    };

    return Promise.resolve(d);
  },

  saveCliente: async (id_cliente, dataCliente) => {
    //buscar el cliente

    if (id_cliente === null || id_cliente === undefined) {
      throw Error('Falta el Id cliente');
    }

    const cliente = clientes_dataLocal.find(c => {
      return c.id_cliente.toString() === id_cliente.toString();
    });

    Object.keys(dataCliente).forEach(p => {
      cliente[p] = dataCliente[p];
    });
    //buscar los seguimientos

    const d = {
      success: true,
      msg: ''
    };

    return Promise.resolve(d);
  },

  insertCliente: async dataCliente => {
    let cliente = {
      id_cliente: clientes_dataLocal.length + 1
    };

    Object.keys(dataCliente).forEach(p => {
      cliente[p] = dataCliente[p];
    });

    //buscar los seguimientos

    const d = {
      success: true,
      msg: '',
      data: {
        id_cliente: cliente.id_cliente
      }
    };

    return Promise.resolve(d);
  },

  deleteCliente: async idCliente => {
    // metthodo dummy no se requiere implementar desde local

    const d = {
      success: true,
      msg: ''
    };

    return Promise.resolve(d);
  }
};

export default DataLocal;
