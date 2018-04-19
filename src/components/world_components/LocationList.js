import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    const { locations, changeloc } = this.props.params;
    const locationsList = locations.map(loc =>
        <button onClick={changeloc.bind(this, loc)} key={loc.name} type="button" className="btn btn-light" >
                {loc.name}
        </button>);
    return (
        <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                        { locationsList }
                </div>
        </div>);
  }
}

export default LocationList;
