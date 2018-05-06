import React, { Component } from 'react';

class ForestView extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;

    this.pickUpCommand = this.commands.find(element => (element.name === 'pickUpAppleCommand'));

    this.state = {
      disablePickUp: false,
      timerLook: 0,
    };

    this.pickUpCommand.execute = this.pickUpCommand.execute.bind(this.pickUpCommand);
    this.lockPickUpButton = this.lockPickUpButton.bind(this);
  }

  lockPickUpButton() {
    this.setState(prevState => ({
      disablePickUp: true,
    }));
  }

  componentDidMount() {
    if (this.state.disablePickUp === true) {
      const timer = setTimeout(() => {
        this.setState(prevState => ({
          disablePickUp: false,
          timerLook: timer,
        }));
      }, 15000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerPickUp);
  }

  render() {
    return (<div>
      <div className="btn-group">
        <button id="pick up an apple" type="button" className="btn btn-light" disabled={this.state.disablePickUp}
        onClick={(event) => { this.pickUpCommand.execute(); this.lockPickUpButton(); }}>
                {'pick up an apple'}
        </button>

        </div>
    </div>);
  }
}

export default ForestView;
