import React, { Component } from 'react';
import LibToast from '../../lib/LibToast';
import DataService from '../../servicios/dataService/DataService';
import AuthService from '../../servicios/authService/AuthService';

class Registrarse extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nombre: '',
      nick: '',
      email: '',
      password: '',
      passwordconfirm: '',
      isEnProceso: false
    };
  }

  onTxtChange(campo, valor) {
    let dic = {};
    dic[campo] = valor;
    this.setState(dic);
  }

  onClickRegistrarse = async () => {
    const nombre = this.state.nombre.trim();
    const nick = this.state.nick.trim();
    const email = this.state.email.trim();
    const pass = this.state.password.trim();
    const passwordconfirm = this.state.passwordconfirm.trim();

    let isValid = true;

    if (nombre === '') {
      LibToast.alert('Falta el Nombre');
      isValid = false;
    }

    if (nick === '') {
      LibToast.alert('Falta el Nick (nombre corto)');
      isValid = false;
    }

    if (email === '') {
      LibToast.alert('Falta el Email');
      isValid = false;
    }

    if (pass === '') {
      LibToast.alert('Falta el pass');
      isValid = false;
    }

    if (passwordconfirm === '') {
      LibToast.alert('Falta la confirmación del password');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    if (pass !== passwordconfirm) {
      LibToast.alert('La confirmación del password no coincide');
      return;
    }

    this.setState({
      isEnProceso: true
    });

    /*Hacer el proceso de registro*/

    let respuesta = await DataService.registrarse(nombre, nick, email, pass);

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
      this.props.history.push('/crm');
      return null;
    }

    const iconLoading = this.state.isEnProceso && (
      <div className="mt-5">
        <i className="fa fa-cog fa-spin " />
        <span className="pl-1">Ingresando</span>
      </div>
    );

    const btnRegistrarse = !this.state.isEnProceso && (
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase mt-5"
        onClick={event => this.onClickRegistrarse()}
        type="submit"
      >
        Registrarse
      </button>
    );

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-3 col-lg-4" />
          <div className="col-sm-10 col-md-6 col-lg-4">
            <h2 className="tituloAPP">CRM Ironhack</h2>

            <h5 className="card-title text-center">Registrarse</h5>

            <div className="form-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={this.state.nombre}
                onChange={event =>
                  this.onTxtChange('nombre', event.target.value)
                }
                required
              />
            </div>

            <div className="form-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nick"
                value={this.state.nick}
                onChange={event => this.onTxtChange('nick', event.target.value)}
                required
              />
            </div>

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
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event =>
                    this.onTxtChange('password', event.target.value)
                  }
                  required
                />
              </div>

              <div className="form-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmación de Password"
                  value={this.state.passwordconfirm}
                  onChange={event =>
                    this.onTxtChange('passwordconfirm', event.target.value)
                  }
                  required
                />
              </div>

              {btnRegistrarse}
              <div className="espaciocenter">{iconLoading}</div>
            </div>

            <p className="mt-5">
              <a className="linkRojo " href="/">
                <i className="fa fa-arrow-left" /> Ingresar con Email &amp;
                Password
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registrarse;
