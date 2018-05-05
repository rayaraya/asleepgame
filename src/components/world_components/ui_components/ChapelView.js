import React, { Component } from 'react';

class ChapelView extends Component {
  constructor(props) {
    super(props);
    [this.command] = props.world.commands;
    this.command.execute = this.command.execute.bind(this.command);
  }
  render() {
    return (<div>
        <div className="btn-group btn-group-lg">
        <button type="button" className="btn btn-light" onClick={this.command.execute} >
                {'wake up the old man'}
        </button>
        <button type="button" className="btn btn-light" >
                {'look into window'}
        </button>
        </div>
    </div>);
  }
}

export default ChapelView;
