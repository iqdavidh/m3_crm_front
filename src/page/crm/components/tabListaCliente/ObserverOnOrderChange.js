import AObserver from '../../../../lib/AObserver';

class ObserverOnOrderChange extends AObserver {
  onFiltroChange(dataOrder) {
    this.handlers.forEach(item => {
      if (item.nombreCaller !== dataOrder.label) {
        item.fn();
      }
    });
  }
}

export default ObserverOnOrderChange;
