class Authenticacion {
  public_data = null;
  token = null;

  registrarLogin(public_data, token) {
    this.token = token;
    this.public_data = public_data;
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

const AuthService = new Authenticacion();

const tokenForTest = '';
AuthService.registrarLogin(
  {
    email: 'david@productividadti.com.mx',
    nombre: 'david huerta',
    nick: 'davidh',
    es_admin: true
  },
  tokenForTest
);

export default AuthService;
