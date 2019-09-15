import AObserver from '../../../../lib/AObserver';

class ObserverPanMainPersonal extends AObserver {
  onClienteChange(eventoCambiaModoEdit) {
    this.subscriptores.forEach(suscriptor => {
      if (suscriptor.nombre !== eventoCambiaModoEdit.label) {
        suscriptor.fn();
      }
    });
  }
}

export default ObserverPanMainPersonal;
