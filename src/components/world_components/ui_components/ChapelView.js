import React, { Component } from 'react';

class ChapelView extends Component {
  constructor(props) {
    super(props);
    [this.command] = props.world.commands;
    this.command.execute = this.command.execute.bind(this.command);
    this.state = {
      canWakeUp: false,
    };
    this.lockButton = this.lockButton.bind(this);
  }

  lockButton() {
    this.setState(prevState => ({
      canWakeUp: true,
    }));
  }

  componentDidUpdate() {
    if (this.state.canWakeUp === true) {
      setInterval(() => {
        this.setState(prevState => ({
          canWakeUp: false,
        }));
      }, 5000);
    }
  }

  render() {
    return (<div>
        <div className="btn-group btn-group-lg">
        <button id = "wake up the old man" type="button" className="btn btn-light" disabled={this.state.canWakeUp}
        onClick={(event) => { this.command.execute(); this.lockButton(); }}>
                {'wake up the old man'}
        </button>
        <button id = "look into window" type="button" className="btn btn-light" >
                {'look into window'}
        </button>
        </div>
    </div>);
  }
}

export default ChapelView;
