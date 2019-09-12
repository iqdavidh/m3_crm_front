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
      return (c.id_cliente = id_cliente);
    });

    //buscar los seguimientos

    const d = {
      success: true,
      msg: '',
      data: cliente
    };

    return Promise.resolve(d);
  }
};

export default DataLocal;
