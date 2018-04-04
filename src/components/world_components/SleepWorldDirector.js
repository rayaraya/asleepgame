/* eslint-env browser */
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import WorldDirector from './WorldDirector';
import EventBuilder from '../builders/EventBuilder';
import LocationBuilder from '../builders/LocationBuilder';
import CharacterBuilder from '../builders/CharacterBuilder';
import SleepWorld from './SleepWorld';
import Elements from './Elements';

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
    };
    class Game extends Component {
      render() {
        return (
                    <div>
                        <div className="navbar navbar-expand-lg navbar-light bg-light">
                            <h1> ASLEEPGAME </h1>
                        </div>
                        <Elements elements={state} />
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
      description: 'blabla about beginning',
      isRepeated: false,
      world: this.world,
    });

    const storm = this.evBuilder.buildUnit({
      name: 'storm',
      frequency: 10,
      description: 'a roll of thunder... the darkness thickens',
      isRepeated: true,
      world: this.world,
    });

    const chapel = this.loBuilder.buildUnit({
      name: 'The Chapel',
      world: this.world,
      view: 'here will be class with control buttons',
    });

    const player = this.chBuilder.buildUnit({
      name: 'Player',
      location: chapel,
    });

    const oldMan = this.chBuilder.buildUnit({
      name: 'Old Man',
      location: chapel,
    });

    beginning.happen();
    storm.happen();
  }
}

export default SleepWorldDirector;
