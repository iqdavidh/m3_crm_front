class singletonAuthentication {
  KEY_LOCALSTORAGE_TOKEN = 'crm_token';
  KEY_LOCALSTORAGE_PUBLICDATA = 'crm_public_data';

  constructor() {
    this.public_data = null;
    this.token = null;

    //verificar si tneemos localsotara

    if (
      window.localStorage.getItem(this.KEY_LOCALSTORAGE_TOKEN) &&
      window.localStorage.getItem(this.KEY_LOCALSTORAGE_PUBLICDATA)
    ) {
      this.token = window.localStorage.getItem(this.KEY_LOCALSTORAGE_TOKEN);

      let texto = window.localStorage.getItem(this.KEY_LOCALSTORAGE_PUBLICDATA);
      this.public_data = JSON.parse(texto);
    }
  }

  registrarLogin(public_data, token, isSaveLocalStorage = false) {
    if (!token || !public_data) {
      throw new Error('No se puede hacer session sin datos correctos');
    }

    this.token = token;
    this.public_data = public_data;

    if (isSaveLocalStorage && token && public_data) {
      window.localStorage.setItem(this.KEY_LOCALSTORAGE_TOKEN, token);

      const json = JSON.stringify(public_data);
      window.localStorage.setItem(this.KEY_LOCALSTORAGE_PUBLICDATA, json);
    }
  }

  getIsAuthenticated() {
    return this.token !== null;
  }

  getUser() {
    return this.public_data;
  }

  getToken() {
    return this.token;
  }

  setLogOut() {
    this.token = null;
    this.public_data = null;

    window.localStorage.removeItem(this.KEY_LOCALSTORAGE_TOKEN);
    window.localStorage.removeItem(this.KEY_LOCALSTORAGE_PUBLICDATA);
  }

  updateData(dataUpdate) {
    //lista campos permitidos
    const listaCamposAllow = ['email', 'nombre', 'nick'];

    listaCamposAllow.forEach(c => {
      if (dataUpdate[c] !== undefined) {
        this.public_data[c] = dataUpdate[c];
      }
    });
  }
}

const AuthService = new singletonAuthentication();

const isDummyAuth = false;

if (isDummyAuth) {
  AuthService.registrarLogin(
    {
      email: 'david@productividadti.com.mx',
      nombre: 'david huerta',
      nick: 'davidh',
      is_admin: true
    },
    '******'
  );
}

export default AuthService;
