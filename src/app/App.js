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
      isAutenticado /* indica si esta autenticado el usuario*/,
      isCRMRequireReloadData: true /*indica si debemos volver a solocitar los datos del crm - caso de asignar clientes a susuarios  */
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const h = window.innerHeight;
      ObserverWindowH.onChangeHeight(h);
    });
  }

  render() {
    let appRouter = null;
    let login = null;

    if (this.state.isAutenticado) {
      appRouter = (
        <Router>
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
          <div>
            <Route path="/" exact component={Crm} />
            <Route path="/admin" component={Admin} />
            <Route path="/cuenta" component={Cuenta} />
          </div>
        </Router>
      );
    } else {
      login = <Login />;
    }

    return (
      <div id="App">
        {appRouter}
        {login}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
