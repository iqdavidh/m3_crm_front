import React, { Component } from 'react';
import LibToast from '../../lib/LibToast';
import DataService from '../../servicios/dataService/DataService';
import AuthService from '../../servicios/authService/AuthService';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',

      isEnProceso: false
    };
  }

  onTxtChange(campo, valor) {
    let dic = {};
    dic[campo] = valor;
    this.setState(dic);
  }

  onClickLogin = async () => {
    const email = this.state.email.trim();
    const pass = this.state.password.trim();

    let isValid = true;

    if (email === '') {
      LibToast.alert('Falta el Email');
      isValid = false;
    }

    if (pass === '') {
      LibToast.alert('Falta el Password');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    this.setState({
      isEnProceso: true
    });

    /*Hacer el proceso de login*/

    let respuesta = await DataService.login(email, pass);

    if (!respuesta.success) {
      LibToast.alert(respuesta.msg);
      this.setState({
        isEnProceso: false
      });
      return;
    }

    LibToast.success('Bienvenido!');

    AuthService.registrarLogin(
      respuesta.data.public_data,
      respuesta.data.token,
      true
    );

    //Actualizar la authenticacion en el estado de la aplicación
    this.props.onLogIn();
  };

  render() {
    //verificar la authenticacion
    if (AuthService.getIsAuthenticated()) {
      window.location.href = '/crm';
      return null;
    }

    const iconLoading = this.state.isEnProceso && (
      <div className="mt-5">
        <i className="fa fa-cog fa-spin " />
        <span className="pl-1">Ingresando</span>
      </div>
    );

    const btnLogin = !this.state.isEnProceso && (
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase mt-5"
        onClick={event => this.onClickLogin()}
        type="submit"
      >
        Login
      </button>
    );

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-3 col-lg-4" />
          <div className="col-sm-10 col-md-6 col-lg-4">
            <h2 className="tituloAPP">CRM Ironhack</h2>

            <h5 className="card-title text-center">Ingresar</h5>

            <div className="form-signin">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={event =>
                    this.onTxtChange('email', event.target.value)
                  }
                  required
                  autoFocus
                />
              </div>

              <div className="form-group mt-4">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event =>
                    this.onTxtChange('password', event.target.value)
                  }
                  required
                />
              </div>
              {btnLogin}
              <div className="espaciocenter">{iconLoading}</div>
            </div>

            <div className="mt-5 text-center">
              Cuenta admin demo:
              <br />
              david@productividadti.com.mx
              <br />
              password:
              <br />
              lalocal
            </div>
            <p className="mt-5">
              <a className="linkRojo " href="/registrarse">
                Registrarse <i className="fa fa-arrow-right" />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
