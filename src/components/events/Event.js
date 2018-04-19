import GameObject from '../world_components/GameObject';

class Event extends GameObject {
  constructor(props) {
    super(props);
    this._description = props.description;
    this._frequency = props.frequency;
    this._isRepeated = props.isRepeated;
    this._world = props.world;
    this._delay = props.delay;
  }

  get description() {
    return this._description;
  }

  happen() {
    /* do delay logic */
    if (this._isRepeated) {
      const timer = setInterval(() => {
        this._world.notification = this._description;
      }, this._frequency * 1000);
    } else {
      this._world.notification = this._description;
    }
  }
}

export default Event;
