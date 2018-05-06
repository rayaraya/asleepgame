import Command from './Command';

class SendCommand extends Command {
  constructor(props) {
    super(props);
    this._notifications = props.notifications;
  }

  execute() {
    this._notifications.forEach((not) => {
      this._world.notification = not;
    });
  }
}

export default SendCommand;
