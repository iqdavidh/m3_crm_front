import libAsyncReqJson from '../../../lib/libAsyncReqJson';
import configApi from './configApi';
import AuthService from '../../authService/AuthService';

const libApiAsyncReqJson = {
  requestGET: async url => {
    const headerApi = {};
    headerApi[configApi.nombreHeaderAuthorization] = AuthService.getToken();
    return libAsyncReqJson.requestGET(url, headerApi);
  },
  requestPOST: async (url, dataObject) => {
    const headerApi = {};
    headerApi[configApi.nombreHeaderAuthorization] = AuthService.getToken();
    return await libAsyncReqJson.requestPOST(url, dataObject, headerApi);
  }
};

export default libApiAsyncReqJson;
