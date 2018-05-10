import Command from './Command';
import AppleCake from '../world_components/AppleCake';
import SendCommand from './SendCommand';

class MakeCakeCommand extends Command {
  constructor(props) {
    super(props);
    this.player = props.world.characters.find(element => (element.name === 'Player'));
    this.sendCommand = new SendCommand({
      world: props.world,
      name: 'makeCakeNotifCommand',
      notifications: ['The flavor of the cake is spread around...'],
    });
  }

  set button(newButton) {
    this._button = newButton;
    this.sendCommand.button = newButton;
  }

  execute() {
    this.sendCommand.execute();
    console.log('made');
    this.player.appleCake = new AppleCake({
      name: 'appleCake',
    });
  }
}

export default MakeCakeCommand;

