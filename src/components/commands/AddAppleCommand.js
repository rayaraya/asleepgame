import Command from './Command';
import Apple from '../world_components/Apple';

class AddAppleCommand extends Command {
  constructor(props) {
    super(props);
    this.player = props.world.characters.find(element => (element.name === 'Player'));
  }

  execute() {
    this.player.apple = new Apple({
      name: 'apple',
    });
  }
}

export default AddAppleCommand;
