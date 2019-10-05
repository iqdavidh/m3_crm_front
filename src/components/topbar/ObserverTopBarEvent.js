class Observer {
  constructor() {
    this.fnOnNickChange = nick => {
      console.log('falta registrarFnOnNickchange');
    };

    this.registrarFnOnNickchange = fn => {
      this.fnOnNickChange = fn;
    };

    this.onNickChange = newNick => {
      this.fnOnNickChange(newNick);
    };
  }
}

const ObserverTopBarEvent = new Observer();

export default ObserverTopBarEvent;
