import GameObject from '../world_components/GameObject';

class Command extends GameObject {
  constructor(props) {
    super(props);
    this._world = props.world;
    props.world.command = this;
  }

  get world() {
    return this._world;
  }

  execute() {
  }
}

export default Command;

