import React, { Component } from 'react';
import WakeUpButton from './chapelButtons/WakeUpButton';
import LookButton from './chapelButtons/LookButton';
import MakeCakeButton from './chapelButtons/MakeCakeButton';

class ChapelView extends Component {
  constructor(props) {
    super(props);
    this.world = props.world;
  }

  render() {
    return (<div>
        <h3 color='white' align='left'> THE CHAPEL </h3>
        <WakeUpButton world = {this.world} />
        <LookButton world = {this.world} />
        <MakeCakeButton world = {this.world} />
    </div>);
  }
}

export default ChapelView;

