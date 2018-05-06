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
        <button type="button" className="btn btn-light bg-secondary float-right">
            Apples <span className="badge badge-light">{this.state.counter}</span>
        </button>
      </div>);
  }
}

export default ApplesCounter;
