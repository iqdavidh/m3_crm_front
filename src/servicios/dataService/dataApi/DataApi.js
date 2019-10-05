import configApi from './configApi';
import libApiAsyncReqJson from './libApiAsyncReqJson';
import libAsyncReqJson from '../../../lib/libAsyncReqJson';

const urlBase = configApi.urlBase;

const DataApi = {
  indexCliente: async numPagina => {
    numPagina = parseInt(numPagina, 10);
    let url = `${urlBase}/api/cliente_index/${numPagina}`;
    return await libApiAsyncReqJson.requestGET(url);
  },
  dataClienteSelected: async idCiente => {
    let url = `${urlBase}/api/cliente/${idCiente}`;
    return await libApiAsyncReqJson.requestGET(url);
  },
  saveCliente: async (idCliente, dataCliente) => {
    let url = `${urlBase}/api/cliente_update/${idCliente}`;
    return await libApiAsyncReqJson.requestPOST(url, dataCliente);
  },

  insertCliente: async dataCliente => {
    let url = `${urlBase}/api/cliente_insert`;
    return await libApiAsyncReqJson.requestPOST(url, dataCliente);
  },
  deleteCliente: async idCliente => {
    // metthodo dummy no se requiere implementar desde local

    const d = {
      success: true,
      msg: ''
    };

    return Promise.resolve(d);
  },
  insertSeguimiento: async dataSeguimiento => {
    let url = `${urlBase}/api/seguimiento_insert`;
    return await libApiAsyncReqJson.requestPOST(url, dataSeguimiento);
  },
  indexUsuario: async () => {
    let url = `${urlBase}/api/usuario_index`;
    return await libApiAsyncReqJson.requestGET(url);
  },
  insertUsuario: async dataUsuario => {
    let url = `${urlBase}/api/usuario_insert`;
    return await libApiAsyncReqJson.requestPOST(url, dataUsuario);
  },
  updateUsuario: async (idUsuario, dataUsuario) => {
    let url = `${urlBase}/api/usuario_update/${idUsuario}`;
    return await libApiAsyncReqJson.requestPOST(url, dataUsuario);
  },

  login: async (email, password) => {
    let url = `${urlBase}/login`;
    let dataLogin = {
      email,
      password
    };
    return await libAsyncReqJson.requestPOST(url, dataLogin);
  },

  registrarse: async (nombre, nick, email, password) => {
    let url = `${urlBase}/registrarse`;
    let dataRegistrarse = {
      nombre,
      nick,
      email,
      password
    };
    return await libAsyncReqJson.requestPOST(url, dataRegistrarse);
  }
};

export default DataApi;
