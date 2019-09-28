class ObserverDataEdit {
  constructor() {
    this.subscriptores = [];
    //{nombre, fn}
    this.dataEdit = {};
    this.dataIsValid = {};

    /* saveData ------------------------------------------------- */
    this.cbSaveData = () => {
      console.log('no implemenado fnSaveData');
      return false;
    };
    this.registrarCbSaveData = cb => {
      this.cbSaveData = cb;
    };

    this.onRequesSaveData = () => {
      this.cbSaveData();
    };

    /* ------------------------------------------------- */
    this.cbDataIsValidChange = () => {
      console.log('no implementado fnDataVAlidChange');
      return false;
    };

    this.registrarCbDataIsValid = cb => {
      this.cbDataIsValidChange = cb;
    };

    /* mostrarWait -------------------------------------- */
    this.cbMostrarWait = isWait => {
      console.log('no implementado cbMostrarWait');
      return false;
    };
    this.registrarCbMostrarWait = cb => {
      this.cbMostrarWait = cb;
    };

    this.onMostrarWait = isWait => {
      return this.cbMostrarWait(isWait);
    };

    /* updateModel ------------------------------------- */
    this.cbUpdateModel = (iModel, dataUpdate) => {
      console.log('no implementado cbUpdateModel');
      return false;
    };
    this.registraCbUpdateModel = cb => {
      this.onUpdateModel = cb;
    };

    this.onUpdateModel = (idModel, dataUpdate) => {
      return this.cbUpdateModel(idModel, dataUpdate);
    };

    /* ------------------------------------------------- */
    this.cbDeleteModel = isWait => {
      console.log('no implementado cbDeleteModel');
      return false;
    };
    this.registraCbDeleteModel = cb => {
      this.cbDeleteModel = cb;
    };

    this.onDeleteModel = idModel => {
      return this.cbDeleteModel(idModel);
    };

    /* ------------------------------------------------- */
    this.cbInsertModel = isWait => {
      console.log('no implementado cbInsertModel');
      return false;
    };
    this.registraCbInsertModel = cb => {
      this.cbInsertModel = cb;
    };

    this.onInsertModel = (idModel, dataInsert) => {
      return this.cbInsertModel(idModel, dataInsert);
    };

    /* cliente selected --------------------------------- */

    let listaHandlerOnSetClienteSelected = [];

    this.clienteSelected = null;
    this.setClienteSelected = (nombreInvocador, clienteSelected) => {
      this.clienteSelected = clienteSelected;

      listaHandlerOnSetClienteSelected
        .filter(suscriptor => {
          return nombreInvocador !== suscriptor.nombre;
        })
        .forEach(suscriptor => {
          suscriptor.h(clienteSelected);
        });
    };

    this.registrarHandlerOnSetClienteSelected = (nombreHandler, h) => {
      listaHandlerOnSetClienteSelected.push({ nombre: nombreHandler, h });
    };

    /* ------------------------------------------------- */
    /* ------------------------------------------------- */
    /* controles edit ---------------------------------- */

    this.subscribe = (nombre, IControlDataEdit) => {
      //ver si esta repetido el nombre

      const indexRepetido = this.subscriptores.find(suscriptor => {
        return suscriptor.nombre === nombre;
      });

      if (indexRepetido > -1) {
        throw Error(
          `Suscribe -  ya se encuentra un listener con el nombre ${nombre}`
        );
      }

      this.subscriptores.push({
        nombre,
        IControlDataEdit
      });
    };

    this.unsuscribe = nombreSuscriptor => {
      //quitar de la lista al listener

      this.subscriptores = this.subscriptores.filter(item => {
        return item.nombre !== nombreSuscriptor;
      });
    };

    this.onSetEdit = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onSetEdit();
      });
    };

    this.onSetCancel = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onSetCancel();
      });

      this.dataEdit = {};
      this.dataIsValid = {};
    };

    this.onDataSourceChange = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onDataSourceChange();
      });
    };

    this.customValidation = (dataEdit, isValid) => {
      return isValid;
    };

    this.onValorChange = (campo, valorNew, isValid) => {
      this.dataEdit[campo] = valorNew;
      this.dataIsValid[campo] = isValid;

      //verificar si todos los datos son validos
      let isAllValid = true;
      Object.keys(this.dataIsValid)
        .filter(k => {
          return k;
        })
        .forEach(k => {
          if (!this.dataIsValid[k]) {
            isAllValid = false;
          }
        });

      //notifica qhe hay error en validaciopn

      this.cbDataIsValidChange(isAllValid);
    };

    this.getDataEdit = () => {
      return this.dataEdit;
    };
  }
}

export default ObserverDataEdit;
