import React, { Component } from 'react';
import LibToast from '../../lib/LibToast';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: ''
    };
  }

  onTxtChange(campo, valor) {
    let dic = {};
    dic[campo] = valor;
    this.setState(dic);
  }

  onClickLogin() {
    const email = this.state.email.trim();
    const pass = this.state.password.trim();

    if (email === '') {
      LibToast.alert('Falta el Email');
    }

    if (pass === '') {
      LibToast.alert('Falta el Password');
    }
  }

  render() {
    return (
      <div>
        <div className="row pt-4">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Ingresar</h5>

                <div className="form-signin">
                  <div className="form-label-group">
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

                  <div className="form-label-group mt-4">
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

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase mt-5"
                    onClick={event => this.onClickLogin()}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
