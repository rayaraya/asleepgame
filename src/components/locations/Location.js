import GameObject from '../world_components/GameObject';

class Location extends GameObject {
  constructor(props) {
    super(props);
    this._view = props.view;
    this._world = props.world;
  }

  get view() {
    return this._view;
  }

  get world() {
    return this._world;
  }
  enter() {

  }
}

export default Location;
