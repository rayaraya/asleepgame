import React, { Component } from 'react';

class ApplesCounter extends Component {
  constructor(props) {
    super(props);
    const { apples } = props.world.characters.find(element => (element.name === 'Player'));

    this.commands = props.world.commands;
    this.pickUpCommand = this.commands.find(element => (element.name === 'pickUpAppleCommand'));
    this.pickUpCommand.applesCounter = this;

    this.state = {
      counter: apples.length,
    };
  }

  render() {
    return (<div>
         Apples <span className="badge badge-light">{this.state.counter}</span>
      </div>);
  }
}

export default ApplesCounter;
