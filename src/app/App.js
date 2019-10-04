import React from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import AuthService from '../servicios/authService/AuthService';
import SideBar from '../components/sideBar/SideBar';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Admin from '../page/admin/Admin';
import Cuenta from '../page/cuenta/Cuenta';
import Login from '../page/login/Login';

import Crm from '../page/crm/Crm';
import { ToastContainer } from 'react-toastify';
import ObserverWindowH from '../lib/ObserverWindowH';

class App extends React.Component {
  constructor(props) {
    super(props);

    const isAutenticado = AuthService.getIsAuthenticated();

    this.state = {
      isAutenticado /* indica si esta autenticado el usuario*/
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const h = window.innerHeight;
      ObserverWindowH.onChangeHeight(h);
    });
  }

  onLogIn = () => {
    this.setState({
      isAutenticado: false
    });

    window.location = '/crm';
  };

  onLogOut = () => {
    this.setState({
      isAutenticado: false
    });

    AuthService.setLogOut();

    window.location = '/';
  };

  render() {
    let appRouter = null;
    let login = null;

    return (
      <div id="App">
        <Router>
          <SideBar
            pageWrapId={'page-wrap'}
            outerContainerId={'App'}
            onLogOut={() => this.onLogOut()}
          />
          <div>
            <Route
              path="/"
              exact
              component={() => <Login onLogIn={() => this.onLogIn()} />}
            />
            <Route path="/crm" exact component={Crm} />
            <Route path="/admin" component={Admin} />
            <Route path="/cuenta" component={Cuenta} />
          </div>
        </Router>

        <ToastContainer />
      </div>
    );
  }
}

export default App;
