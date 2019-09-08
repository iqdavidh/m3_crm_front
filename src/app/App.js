import React from 'react';

import './App.css';
import AutService from '../servicios/autService/AutService';
import SideBar from '../components/sideBar/SideBar';

import {
  NavDropdown,
  Button,
  Form,
  FormControl,
  Navbar
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Crm from '../components/crm/Crm';
import Supervisor from '../components/supervisor/Supervisor';
import Admin from '../components/admin/Admin';
import Cuenta from '../components/cuenta/Cuenta';
import Login from '../components/login/Login';
import Logout from '../components/logout/Logout';

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

    /* Verificar session*/

    console.log(session);
  }

  render() {
    const nombreUsuario = AutService.getCurrentSession().usuario.nombre;

    console.log(process.env.REACT_APP_ISDEBUG);

    return (
      <div id="App">
        <Navbar bg="dark" variant="dark">
          <div className="mr-auto mL20">
            <span className="logoCRM">CRM</span>
          </div>

          <div>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </div>
          <i className="fa fa-user fa-2x mL20 colorWhite" />
          <NavDropdown title={nombreUsuario} alignRight id="basic-nav-dropdown">
            <NavDropdown.Item href="/cuenta">
              <i className="fa fa-edit" /> Editar Perfil
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item href="/salir">
              <i className="fa-sign-out" />
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>

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
      </div>
    );
  }
}

export default App;
