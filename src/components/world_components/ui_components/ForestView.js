import React, { Component } from 'react';
import PickUpButton from './forestButtons/PickUpButton';

class ForestView extends Component {
  constructor(props) {
    super(props);
    this.world = props.world;
  }

  render() {
    return (<div>
      <h3 color='white' align='left'> THE FOREST </h3>
      <PickUpButton world = {this.world} />
    </div>);
  }
}

export default ForestView;
