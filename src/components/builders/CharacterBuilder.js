import WorldBuilder from './WorldBuilder';
import Player from '../characters/Player';
import Character from '../characters/Character';

class CharacterBuilder extends WorldBuilder {
  buildUnit(props) {
    // const character = (props.name === 'Player') ? new Player(props) : new Character(props);
    let character;

    if (props.name === 'Player') {
      character = new Player(props);
    } else {
      character = new Character(props);
    }
    props.world.character = character;
    return character;
  }
}

export default CharacterBuilder;
