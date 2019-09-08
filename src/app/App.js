import React from 'react';

import './App.css';
import AutService from '../servicios/autService/AutService';
import SideBar from '../components/SideBar/SideBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/es/FormControl';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from 'react-bootstrap';

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
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

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
          <i className="fa fa-user fa-2x mL20 colorWhite"></i>
          <NavDropdown title={nombreUsuario} alignRight id="basic-nav-dropdown">
            <NavDropdown.Item href="/perfil">
              <i className="fa fa-edit"></i> Editar Perfil
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item href="/salir">
              <i className="fa-sign-out"></i>
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    );
  }
}

export default App;
