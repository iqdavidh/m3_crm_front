import React, { Component } from 'react';
import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';
import DataService from '../../../../servicios/dataService/DataService';
import LibToast from '../../../../lib/LibToast';

class FormUsuario extends Component {
  constructor(props, context) {
    super(props, context);

    let lista = [];

    {
      const b = new BuilderConfigControlItem('nombre', 'Nombre');
      b.setIsRequired();
      lista.push(b.getConfigControlItem());
    }

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('nick', 'Nick (Nombre Corto)');
      b.setIsRequired();
      lista.push(b.getConfigControlItem());
    }

    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('email', 'Email');
      b.setIsCampoEmail();
      lista.push(b.getConfigControlItem());
    }
    /*------------------------------------------------------------*/
    {
      const b = new BuilderConfigControlItem('tel', 'Teléfono');
      lista.push(b.getConfigControlItem());
    }

    //iniciliazar todos los controles con estado edit
    lista.forEach(configControl => {
      configControl.isModoInicialEdit = true;
    });

    this.listaConfigControl = lista;

    this.state = {
      clienteNew: {
        nombre: '',
        apaterno: '',
        amaterno: '',
        email1: '',
        tel: ''
      },
      isEnProceso: false,
      isValidData: false
    };

    this.observerData.registrarCbMostrarWait(isWait => {
      return this.setState({ isEnProceso: isWait });
    });

    this.observerData.registrarCbDataIsValid(isValidData => {
      this.setState({
        isValidData
      });
    });

    this.observerData.registrarCbSaveData(this.cbSaveNewCliente);
  }

  cbSaveNewCliente = async () => {
    const dataInsert = this.observerData.getDataEdit();
    const respuestaSave = await DataService.insertCliente(dataInsert);
    this.observerData.onMostrarWait(false);

    if (!respuestaSave.success) {
      LibToast.alert(respuestaSave.msg);
      return;
    }

    const idCliente = respuestaSave.data.id_cliente;

    //crear nuevo modelo
    const cliente = { ...dataInsert };

    cliente.id_cliente = idCliente;
    cliente.indicadores = {
      funelIndex: 1
    };
    cliente.updated_at = new Date();

    LibToast.success('Cliente Actualizado');

    this.observerData.onInsertModel(idCliente, cliente);
  };

  onClickSave() {
    this.setState({
      isEnProceso: true
    });

    this.observerData.onRequesSaveData();
  }

  endSave() {
    this.setState({
      isEnProceso: false
    });
  }

  render() {
    return <div></div>;
  }
}

export default FormUsuario;
