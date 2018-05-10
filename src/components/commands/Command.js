import GameObject from '../world_components/GameObject';

class Command extends GameObject {
  constructor(props) {
    super(props);
    this._world = props.world;
    props.world.command = this;
    this._button = {};
    this._buttonId = '';
  }

  get world() {
    return this._world;
  }

  set button(newButton) {
    this._button = newButton;
  }

  get button() {
    return this._button;
  }

  set buttonId(id) {
    this._buttonId = id;
  }

  get buttonId() {
    return this._buttonId;
  }

  execute() {
  }
}

export default Command;

