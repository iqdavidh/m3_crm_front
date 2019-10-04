import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';
import TopBarCrm from './topBarCrm/TopBarCrm';
import BrowserCliente from './browserCliente/BrowserCliente';
import SeccionHistorial from './seccionHistorial/SeccionHistorial';
import SeccionMain from './seccionMain/SeccionMain';
import SeccionAdd from './seccionAdd/SeccionAdd';
import FormAddCliente from './modal/formAddCliente/FormAddCliente';
import ObserverTopBarCrm from './topBarCrm/ObserverTopBarCrm';
import ObserverNewCliente from './modal/formAddCliente/ObserverNewCliente';
import ObserverDataPersonal from './seccionMain/panmainPersonal/ObserverDataPersonal';
import AuthService from '../../servicios/authService/AuthService';

class Crm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShowFormAddCliente: false,
      nombreCliente: '',
      estatusCliente: ''
    };

    this.observerTopBar = new ObserverTopBarCrm();

    this.observerTopBar.registrarfnShowFormAddCliente(() => {
      this.setState({
        isShowFormAddCliente: true
      });
    });

    this.closeFormCliente = () => {
      this.setState({
        isShowFormAddCliente: false
      });
    };

    ObserverNewCliente.registrarFnInsertModelEnd(() => {
      this.setState({
        isShowFormAddCliente: false
      });
    });

    ObserverDataPersonal.registrarUpdateTituloCRM(cliente => {
      let texto = `${cliente.nombre} ${cliente.apaterno} ${cliente.amaterno}`;

      let estatus = 'titulo_p' + cliente.indicadores.funelIndex.toString();

      this.setState({
        nombreCliente: texto,
        estatusCliente: estatus
      });
    });
  }

  render() {
    //verificar la authenticacion
    if (!AuthService.getIsAuthenticated()) {
      this.props.history.push('/');
      return null;
    }

    let cssTituloCliente = 'cell-data-titulo ' + this.state.estatusCliente;

    return (
      <div className={'container-main-crm'}>
        <TopBar>
          <TopBarCrm observerTopBar={this.observerTopBar} />
        </TopBar>
        <BrowserCliente />

        <div className={cssTituloCliente}>
          <i className="fa fa-user" />
          {this.state.nombreCliente}
        </div>

        <SeccionMain />
        <SeccionAdd />
        <SeccionHistorial />

        <FormAddCliente
          isShow={this.state.isShowFormAddCliente}
          onClose={this.closeFormCliente}
        />
      </div>
    );
  }
}

export default Crm;
