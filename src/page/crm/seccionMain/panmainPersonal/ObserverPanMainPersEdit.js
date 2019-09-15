import AObserver from '../../../../lib/AObserver';
import ObserverOnOrderChange from '../../browserCliente/tabListaCliente/ObserverOnOrderChange';

class ObserverPanMainPersEdit extends AObserver {
  onChangeModoEdit(eventoCambiaModoEdit) {
    this.subscriptores.forEach(suscriptor => {
      if (suscriptor.nombre !== eventoCambiaModoEdit.label) {
        suscriptor.fn();
      }
    });
  }
}

export default ObserverPanMainPersEdit;
