import React from 'react';

import './App.css';
import AutService from '../servicios/autService/AutService';

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
  }

  render() {
    console.log(process.env.REACT_APP_ISDEBUG);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">x</div>
        </div>
      </div>
    );
  }
}

export default App;
