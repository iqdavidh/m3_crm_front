import React, { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import AutService from '../../servicios/autService/AutService';

class TopBar extends Component {
  render() {
    const nombreUsuario = AutService.getCurrentSession().nick;

    return (
      <Navbar className="cell cell-topbar flexDiv" bg="dark" variant="dark">
        <div className="wrapperLogoCRM">
          <span className="logoCRM">CRM</span>
        </div>

        <div className="flexG1 ">{this.props.children}</div>

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
