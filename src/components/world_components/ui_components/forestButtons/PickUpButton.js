import React, { Component } from 'react';

class PickUpButton extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;
    this.command = this.commands.find(element => (element.name === 'pickUpAppleCommand'));
    this.id = 'pick up an apple';

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
           <button id="pick up an apple" type="button" className="btn btn-light" disabled={this.state.disable}
       onClick={(event) => { this.command.execute(); }}>
                {'pick up an apple'}
        </button>
      </div>);
  }
}

export default PickUpButton;
