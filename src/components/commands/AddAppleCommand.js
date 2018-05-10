import Command from './Command';
import Apple from '../world_components/Apple';

class AddAppleCommand extends Command {
  constructor(props) {
    super(props);
    this.player = props.world.characters.find(element => (element.name === 'Player'));
    const { apples } = this.player;
    this.apples = apples;
  }

  execute() {
    this.player.apple = new Apple({
      name: 'apple',
    });
    this.aCounter.setState({ counter: this.apples.length });

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

  set applesCounter(aCounter) {
    this.aCounter = aCounter;
  }
}

export default AddAppleCommand;
