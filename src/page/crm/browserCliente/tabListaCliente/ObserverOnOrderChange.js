import AObserver from '../../../../lib/AObserver';

class ObserverOnOrderChange extends AObserver {
  //El handler del suscriptor no tiene argunemos

  onFiltroChange(eventoCambiaCampoOrder) {
    this.subscriptores.forEach(suscriptor => {
      if (suscriptor.nombre !== eventoCambiaCampoOrder.label) {
        suscriptor.fn();
      }
    });
  }
}

export default ObserverOnOrderChange;
