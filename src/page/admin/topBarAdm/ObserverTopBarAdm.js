class ObserverTopBarAdm {
  constructor() {
    /* showFormAddCliente ----------------------------- */

    this.fnShowFormAddUsuario = () => {
      console.log('no implemenado fnShowFormAddUsuario');
      return false;
    };

    this.registrarfnShowFormAddUsuario = cb => {
      this.fnShowFormAddUsuario = cb;
    };
  }
}

export default ObserverTopBarAdm;
