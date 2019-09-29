class ObserverTopBarCrm {
  constructor() {
    /* showFormAddCliente ----------------------------- */

    this.fnShowFormAddCliente = () => {
      console.log('no implemenado fnShowFormAddCliente');
      return false;
    };

    this.registrarfnShowFormAddCliente = cb => {
      this.fnShowFormAddCliente = cb;
    };
  }
}

export default ObserverTopBarCrm;
