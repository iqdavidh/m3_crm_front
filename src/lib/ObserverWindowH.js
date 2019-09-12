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
    this.handlers = this.handlers.filter(item => {
      return item.nombreCaller !== nombreCaller;
    });
  }

  onChangeHeight(h) {
    console.log(`evento on window height ${h}`);
    this.handlers.forEach(item => {
      item.fn(h);
    });
  }
}

const ObserverWindowH = new AObserverWindowH();

export default ObserverWindowH;
