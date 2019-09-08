import { assert } from 'chai';
import AutData from './AutData';

describe('AutData - Authentication Data tiene los datos de la sesion del usuario actual', () => {
  it('constructor - data ok', () => {
    let localStorageDummy = {
      id_usuario: 'id',
      nombre: 'n',
      email: 'e',
      urlThumb: 'url',
      area: 'a',
      perfil: {
        isAdmin: false,
        isResponsableArea: false,
        isAgente: true
      }
    };

    let dummyToken = 'notoken';

    let userData = new AutData(dummyToken, localStorageDummy);

    assert(userData !== null, 'El userData es null');

    /*validar que se copian las propiedades*/
    const listaProp = [
      'id_usuario',
      'nombre',
      'email',
      'urlThumb',
      'area',
      'perfil'
    ];
    assert(
      userData.token === dummyToken,
      `el token no es correcto, se recibio ${userData.token}`
    );

    listaProp.forEach(p => {
      assert(
        userData.usuario[p] === localStorageDummy[p],
        `LA propiedad no se encontro ${p} ==> ${userData[p]} vs ${localStorageDummy[p]}`
      );
    });
  });

  it('constructor - data error -sin campos-, lanza error ', () => {
    let localStorageDummy = {};

    let dummyToken = 'notoken';

    let isLanzaEception = false;

    try {
      let userData = new AutData(dummyToken, localStorageDummy);
    } catch (e) {
      isLanzaEception = true;
    }

    assert(isLanzaEception, 'En caso de que falten datos lanza exception');
  });

  it('constructor - token error -sin token lanza error', () => {
    let localStorageDummy = {
      id_usuario: 'id',
      nombre: 'n',
      email: 'e',
      urlThumb: 'url',
      area: 'a',
      isAdmin: false
    };

    let dummyToken = null;

    let isLanzaEception = false;

    try {
      let userData = new AutData(dummyToken, localStorageDummy);
    } catch (e) {
      isLanzaEception = true;
    }

    assert(isLanzaEception, 'En caso de que falte el token  lanza exception');
  });
});
