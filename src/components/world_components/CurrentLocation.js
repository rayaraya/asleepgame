import React, { Component } from 'react';
import ChapelView from './ChapelView';
import ForestView from './ForestView';

class CurrentLocation extends Component {
  render() {
    const location = this.props.currentLocation;
    const { view } = location;
    const LocView = view;
    return (
          <div>
              <LocView />
          </div>);
  }
}

export default CurrentLocation;
