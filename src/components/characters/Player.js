import Character from './Character';
import Apple from '../world_components/Apple';

class Player extends Character {
  constructor(props) {
    super(props);
    this._apples = [];
    this._appleCakes = [];
  }

  set apple(apple) {
    this._apples.push(apple);
  }

  get apples() {
    return this._apples;
  }

  set appleCake(aCake) {
    this._appleCakes.push(aCake);
  }

  get appleCakes() {
    return this._appleCakes;
  }
}

export default Player;
