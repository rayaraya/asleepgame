import Character from './Character';
import Apple from '../world_components/Apple';

class Player extends Character {
  constructor(props) {
    super(props);
    this._apples = [new Apple({ name: 'a' })];
  }

  set apple(apple) {
    console.log('added');
    this._apples.push(apple);
  }

  get apples() {
    return this._apples;
  }
}

export default Player;
