import GameObject from '../world_components/GameObject';

class Handler extends GameObject {
  constructor(props) {
    super(props);
    this.nextHandler = props.nextHandler;
  }

  handleRequest() {

  }
}

export default Handler;
