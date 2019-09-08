import React from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import AutService from '../servicios/autService/AutService';
import SideBar from '../components/sideBar/SideBar';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Supervisor from '../page/supervisor/Supervisor';
import Admin from '../page/admin/Admin';
import Cuenta from '../page/cuenta/Cuenta';
import Login from '../page/login/Login';
import Logout from '../page/logout/Logout';
import Crm from '../page/crm/Crm';
import { ToastContainer } from 'react-toastify';

class App extends React.Component {
  constructor(props) {
    super(props);

    const session = AutService.getCurrentSession();
    const isAutenticado = session !== null;

    this.state = {
      isAutenticado /* indica si esta autenticado el usuario*/,
      session /*propiamente los datos de la seession*/,
      isCRMRequireReloadData: true /*indica si debemos volver a solocitar los datos del crm - caso de asignar clientes a susuarios  */
    };
  }

  render() {
    return (
      <div id="App">
        <Router>
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

          <div>
            <Route path="/" exact component={Crm} />
            <Route path="/sup" component={Supervisor} />
            <Route path="/admin" component={Admin} />
            <Route path="/cuenta" component={Cuenta} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </div>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
