import React from 'react';
import { mount } from 'enzyme';
import TopBar from './TopBar';

import { assert } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import AuthService from '../../servicios/authService/AuthService';

configure({ adapter: new Adapter() });

const session = AuthService.getUser();

describe('TopBar', function() {
  const valorTexto = 'dumy body';

  let wrapper = mount(<TopBar session={session} />);

  it('Se despliega correcta el TopBar', function() {
    const nombreUsuario = '"' + session.usuario.nombre + '"';
    const isNombreUsuarioPresente = wrapper
      .debug()
      .toString()
      .includes(nombreUsuario);

    assert(
      isNombreUsuarioPresente,
      'No se encontro el nombre del usaurio en el topbar'
    );
  });
});
