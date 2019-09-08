import React, { Component } from 'react';
import {
  Button,
  Form,
  FormControl,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import AutService from '../../servicios/autService/AutService';

class TopBar extends Component {
  render() {
    const nombreUsuario = AutService.getCurrentSession().usuario.nombre;

    return (
      <Navbar bg="dark" variant="dark">
        <div className="mr-auto mL20">
          <span className="logoCRM">CRM</span>
        </div>

        <div>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
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
    );
  }
}

export default TopBar;
