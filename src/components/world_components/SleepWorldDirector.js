/* eslint-env browser */
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import WorldDirector from './WorldDirector';
import EventBuilder from '../builders/EventBuilder';
import LocationBuilder from '../builders/LocationBuilder';
import CharacterBuilder from '../builders/CharacterBuilder';
import SleepWorld from './SleepWorld';
import Elements from './ui_components/Elements';
import ChapelView from './ui_components/ChapelView';
import ForestView from './ui_components/ForestView';
import SendCommand from '../commands/SendCommand';
import AddAppleCommand from '../commands/AddAppleCommand';

class SleepWorldDirector extends WorldDirector {
  constructor(world = new SleepWorld()) {
    super(world);

    this.evBuilder = new EventBuilder();
    this.chBuilder = new CharacterBuilder();
    this.loBuilder = new LocationBuilder();

    this.constructNewWorld();

    const state = {
      locations: world.locations,
      events: world.events,
      characters: world.characters,
      notififcations: world.notififcations,
      commands: world.commands,
    };
    class Game extends Component {
      render() {
        return (
                    <div>
                        <div className="navbar navbar-expand-lg navbar-light bg-light">
                            <h1> ASLEEPGAME </h1>
                        </div>
                        <Elements world={ world } />
                    </div>
        );
      }
    }
    render(<Game/>, document.getElementById('root'));
  }

  constructNewWorld() {
    super.constructNewWorld();

    const beginning = this.evBuilder.buildUnit({
      name: 'beginning',
      description: 'You see something beautiful.. you feel...',
      isRepeated: false,
      world: this.world,
    });

    const oldManinput = this.evBuilder.buildUnit({
      name: 'oldmaninput',
      description: 'An old man is asleep on the stone',
      isRepeated: false,
      world: this.world,
      delay: 2,
    });

    const storm = this.evBuilder.buildUnit({
      name: 'storm',
      frequency: 10,
      description: 'A roll of thunder... the darkness thickens',
      isRepeated: true,
      world: this.world,
    });

    const chapel = this.loBuilder.buildUnit({
      name: 'The Chapel',
      world: this.world,
      view: ChapelView,
    });

    const forest = this.loBuilder.buildUnit({
      name: 'The Forest',
      world: this.world,
      view: ForestView,
    });

    const player = this.chBuilder.buildUnit({
      name: 'Player',
      location: chapel,
      world: this.world,
    });

    const oldMan = this.chBuilder.buildUnit({
      name: 'Old Man',
      location: chapel,
      world: this.world,
    });

    const tryToWakeUpCommand = new SendCommand({
      world: this.world,
      name: 'tryToWakeUpCommand',
      notifications: ['A bad feeling is coming. You turn away.'],
    });

    const tryToLookCommand = new SendCommand({
      world: this.world,
      name: 'tryToLookCommand',
      notifications: ['The friendly wind whistles to the trees...', 'A red deer took a leaf from a brush...'],
    });

    const pickUpAppleCommand = new AddAppleCommand({
      world: this.world,
      name: 'pickUpAppleCommand',
    });

    beginning.happen();
    oldManinput.happen();
    storm.happen();
  }
}

export default SleepWorldDirector;
