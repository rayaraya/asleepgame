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

    this.button.setState(prevState => ({
      disable: true,
    }));

    const newState = {};
    this.buttonId = this.button.id;
    newState[this.buttonId] = true;
    this.world.buttonsDisableState.setState = newState;

    setTimeout(() => {
      newState[this.buttonId] = false;
      this.world.buttonsDisableState.setState = newState;
      if (this.button !== null) {
        this.button.setState(prevState => ({
          disable: false,
        }));
      }
    }, 5000);
  }
}

export default SendCommand;
