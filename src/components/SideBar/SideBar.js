import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <p className="text-center mb-2">
        CRM <br />
        @iqdavidh
      </p>
      <a className="menu-item" href="/crm">
        Clientes
      </a>

      <a className="menu-item" href="/sup">
        Supervisor
      </a>

      <a className="menu-item" href="/adm">
        Administración
      </a>

      <a className="menu-item" href="/logout">
        Salir
      </a>
    </Menu>
  );
};
