import React, { Component } from 'react';

class MakeCakeButton extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;
    this.command = this.commands.find(element => (element.name === 'makeCakeCommand'));
    this.id = 'make an apple cake';

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
          <button id="make an apple cake" type="button" className="btn btn-light float-center" disabled={this.state.disable}
       onClick={(event) => { this.command.execute(); }} >
                {'make an apple cake'}
        </button>
      </div>);
  }
}

export default MakeCakeButton;
