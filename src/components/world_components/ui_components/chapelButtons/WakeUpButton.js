import React, { Component } from 'react';

class WakeUpButton extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;
    this.command = this.commands.find(element => (element.name === 'tryToWakeUpCommand'));
    this.id = 'wake up the old man';

    this.state = {
      disable: props.world.buttonsDisableState.state[this.id],
    };

    this.command.execute = this.command.execute.bind(this.command);
    this.command.button = this;
  }

  componentWillUnmount() {
    this.command.button = null;
  }

  render() {
    return (<div>
          <button id="wake up the old man" type="button" className="btn btn-light float-left ml-5" disabled={this.state.disable}
        onClick={(event) => { this.command.execute(); }} >
                {'wake up the old man'}
        </button>
      </div>);
  }
}

export default WakeUpButton;
