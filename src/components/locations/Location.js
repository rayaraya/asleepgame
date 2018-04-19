import GameObject from '../world_components/GameObject';

class Location extends GameObject {
  constructor(props) {
    super(props);
    this._view = props.view;
  }

  get view() {
    return this._view;
  }
  enter() {

  }
}

export default Location;
