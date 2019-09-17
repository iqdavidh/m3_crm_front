class ObserverDataEdit {
  constructor(fnSaveData) {
    this.subscriptores = [];
    //{nombre, fn}
    this.dataEdit = {};
    this.dataIsValid = {};

    this.fnSaveData = fnSaveData;
    this.fnDataVAlidChange = () => {
      console.log('no implementado fnDataVAlidChange');
    };

    this.registrarCbDataIsValid = cb => {
      this.fnDataIsValidChange = cb;
    };

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

    this.onDataSourceChange = (nombreInvodador, dataSource) => {
      this.subscriptores
        .filter(suscriptor => {
          return suscriptor.nombre !== nombreInvodador;
        })
        .forEach(suscriptor => {
          suscriptor.IControlDataEdit.onDataSourceChange();
        });
    };

    this.fnSaveData = fnSaveData;

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

      this.fnDataIsValidChange(isAllValid);
    };

    this.onRequesSaveData = () => {
      this.fnSaveData();
    };

    this.getDataEdit = () => {
      return this.dataEdit;
    };
  }
}

export default ObserverDataEdit;
