import Command from './Command';

class BookshelfCommand extends Command {
  constructor(props) {
    super(props);
    this.player = props.world.characters.find(element => (element.name === 'Player'));
  }

  execute() {
    // send request to EmptyBookshelfHandler -> to SmallBookshelfHandler
  }
}

export default BookshelfCommand;
