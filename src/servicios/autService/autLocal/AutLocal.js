/*
 *
 * */
import AutData from '../AutData';

const tokenDummy = 'token dummy';

const AutLocal = {
  /**
   * Regresa instacioa de AutData con la informacion del usaurio
   * **/
  getCurrentData(isForzarNotUser = false) {
    /*En local inicializamos como usuario 1 , con perfil desde codigo*/

    if (isForzarNotUser) {
      return null;
    }

    let dummyUserData = {
      id_usuario: '1',
      nombre: 'dave',
      email: 'david@productividadti.com.mx',
      urlThumb: 'https://dummyimage.com/qvga',
      area: 'area1',
      isAdmin: false
    };

    return new AutData(tokenDummy, dummyUserData);
  },
  /*
   * Verificar que el token es valido, regresa un promise porque
   * la valdiacion se hace con el backend
   * */
  async validarAutToken(token, isForzarNotValid = false) {
    if (isForzarNotUser) {
      return false;
    }

    return token === tokenDummy;
  }
};

export default AutLocal;
