import GameObject from './GameObject';

class Apple extends GameObject {
  constructor(props) {
    super(props);
    this._color = 0;
    this._view = props.view;
  }
}

export default Apple;
