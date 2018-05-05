import Command from './Command';

class SendCommand extends Command {
  constructor(props) {
    super(props);
    this._notification = props.notification;
  }

  execute() {
    this._world.notification = this._notification;
  }
}

export default SendCommand;
