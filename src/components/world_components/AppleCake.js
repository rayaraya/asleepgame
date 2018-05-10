import GameObject from './GameObject';

class AppleCake extends GameObject {
  constructor(props) {
    super(props);
    this._degreeOfBake = 0;
    this._view = props.view;
  }
}

export default AppleCake;
