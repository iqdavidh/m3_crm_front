import AObserver from '../../../../lib/AObserver';

class AObserverSelectCliente extends AObserver {
  //El handler del suscriptor acepta parametro idCliente
  onSelectCliente(eventoCambiaCliente) {
    this.subscriptores.forEach(suscriptor => {
      if (suscriptor.nombre !== eventoCambiaCliente.label) {
        suscriptor.fn(eventoCambiaCliente.idCliente);
      }
    });
  }
}

const ObserverSelectCliente = new AObserverSelectCliente();

export default ObserverSelectCliente;
