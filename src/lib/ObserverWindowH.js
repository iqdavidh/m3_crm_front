class AObserverWindowH {
  constructor() {
    this.handlers = [];
  }

  subscribe(nombreCaller, fn) {
    this.handlers.push({
      nombreCaller,
      fn
    });
  }

  unsubscribe(nombreCaller) {
    this.handlers = this.handlers.filter(function(item) {
      if (item.nombreCaller !== nombreCaller) {
        return item;
      }
    });
  }

  onChangeHeight() {
    this.handlers.forEach(item => {
      item.fn(scope, o);
    });
  }
}

const ObserverWindowH = new AObserverWindowH();

export default ObserverWindowH;
