import React, { Component } from 'react';

class ApplesCounter extends Component {
  constructor(props) {
    super(props);
    const { apples } = props.world.characters.find(element => (element.name === 'Player'));
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
