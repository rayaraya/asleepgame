import ButtonsState from './ButtonsState';

class World {
  constructor() {
    this._locations = [];
    this._events = [];
    this._characters = [];
    this._notifications = [];
    this._commands = [];
    this._buttonsDisableState = new ButtonsState();
  }

  get locations() {
    return this._locations;
  }

  set location(location) {
    this._locations.push(location);
  }

  get events() {
    return this._events;
  }

  set event(wevent) {
    this._events.push(wevent);
  }

  get characters() {
    return this._characters;
  }

  set character(character) {
    this._characters.push(character);
  }

  get notifications() {
    return this._notifications;
  }

  set notification(not) {
    this._notifications.unshift(not);
    if (this._notifications.length > 8) {
      this._notifications.pop();
    }
  }

  get commands() {
    return this._commands;
  }

  set command(com) {
    this._commands.push(com);
  }

  get buttonsDisableState() {
    return this._buttonsDisableState;
  }
}

export default World;
