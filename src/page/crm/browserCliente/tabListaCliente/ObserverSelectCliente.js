import AObserver from '../../../../lib/AObserver';

class AObserverSelectCliente extends AObserver {
  onSelectCliente(eventoCambiaCliente) {
    this.subscriptores.forEach(suscriptor => {
      if (suscriptor.nombre !== eventoCambiaCliente.emisor) {
        suscriptor.fn(eventoCambiaCliente.cliente);
      }
    });
  }
}

const ObserverSelectCliente = new AObserverSelectCliente();

export default ObserverSelectCliente;
