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
  }

  set applesCounter(aCounter) {
    this.aCounter = aCounter;
  }
}

export default AddAppleCommand;
