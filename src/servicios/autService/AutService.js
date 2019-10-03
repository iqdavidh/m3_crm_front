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

  getCurrentSession() {
    return this.public_data;
  }

  getToken() {
    return this.token;
  }

  setLogOut() {
    this.token = null;
    this.public_data = null;
  }
}

const AutService = new Authenticacion();

const tokenForTest = '';
AutService.registrarLogin(
  {
    email: 'david@productividadti.com.mx',
    nick: 'davidh',
    es_admin: true
  },
  tokenForTest
);

export default AutService;
