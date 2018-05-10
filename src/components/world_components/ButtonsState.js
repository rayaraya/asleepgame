class ButtonsState {
  constructor() {
    this._state = {};
  }

  get state() {
    return this._state;
  }

  set setState(st) {
    const keys = Object.keys(st).forEach((key) => {
      this._state[key] = st[key];
    });
  }
}

export default ButtonsState;
