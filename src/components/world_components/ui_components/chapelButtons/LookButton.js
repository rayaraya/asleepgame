import React, { Component } from 'react';

class LookButton extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;
    this.command = this.commands.find(element => (element.name === 'tryToLookCommand'));
    this.id = 'look into window';

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
          <button id="look into window" type="button" className="btn btn-light float-right mr-5" disabled={this.state.disable}
       onClick={(event) => { this.command.execute(); }}>
                {'look into window'}
        </button>
      </div>);
  }
}

export default LookButton;
