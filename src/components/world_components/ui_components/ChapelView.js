import React, { Component } from 'react';

class ChapelView extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;

    this.wakeUpCommand = this.commands.find(element => (element.name === 'tryToWakeUpCommand'));
    this.lookCommand = this.commands.find(element => (element.name === 'tryToLookCommand'));

    this.state = {
      disableWakeUp: false,
      disableLook: false,
      timerWakeUp: 0,
      timerLook: 0,
    };

    this.wakeUpCommand.execute = this.wakeUpCommand.execute.bind(this.wakeUpCommand);
    this.lookCommand.execute = this.lookCommand.execute.bind(this.lookCommand);

    this.lockWakeUpButton = this.lockWakeUpButton.bind(this);
    this.lockLookButton = this.lockLookButton.bind(this);
  }

  lockWakeUpButton() {
    this.setState(prevState => ({
      disableWakeUp: true,
    }));
  }

  lockLookButton() {
    this.setState(prevState => ({
      disableLook: true,
    }));
  }

  componentDidMount() {
    if (this.state.disableWakeUp === true) {
      const timer = setTimeout(() => {
        this.setState(prevState => ({
          disableWakeUp: false,
          timerWakeUp: timer,
        }));
      }, 15000);
    }
    if (this.state.disableLook === true) {
      const timer = setTimeout(() => {
        this.setState(prevState => ({
          disableLook: false,
          timerLook: timer,
        }));
      }, 15000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerWakeUp);
    clearTimeout(this.timerLook);
  }

  render() {
    return (<div>
        <div className="btn-group">
        <button id="wake up the old man" type="button" className="btn btn-light" disabled={this.state.disableWakeUp}
        onClick={(event) => { this.wakeUpCommand.execute(); this.lockWakeUpButton(); }}>
                {'wake up the old man'}
        </button>
        <button id="look into window" type="button" className="btn btn-light" disabled={this.state.disableLook}
        onClick={(event) => { this.lookCommand.execute(); this.lockLookButton(); }}>
                {'look into window'}
        </button>
        </div>
    </div>);
  }
}

export default ChapelView;
