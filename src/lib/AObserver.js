class AObserver {
  constructor() {
    this.subscriptores = [];
    //{nombre, fn}
  }

  subscribe(nombre, fn) {
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
      nombre: nombre,
      fn
    });
  }

  unsubscribe(nombreSuscriptor) {
    //quitar de la lista al listener

    this.subscriptores = this.subscriptores.filter(item => {
      if (item.nombre !== nombreSuscriptor) {
        return item;
      }
    });
  }

  // onEvento(data) {
  //   console.log(`evento  ${data}`);
  //   this.handlers.forEach(suscriber => {
  //     suscriptor.fn(h);
  //   });
  // }
}

export default AObserver;
