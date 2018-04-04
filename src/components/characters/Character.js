import GameObject from '../world_components/GameObject';

class Character extends GameObject {
  constructor(props) {
    super(props);
    this._location = props.location;
  }

  get location() {
    return this._location;
  }
}

export default Character;
