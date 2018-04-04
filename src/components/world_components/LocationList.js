import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    const { locations } = this.props;
    const locationsList = locations.map(loc =>
            <div key={ loc.name }>
                <button type="button" className="btn btn-light" >
                        { loc.name }
                </button>
            </div>);
    return (
            <div>{locationsList}</div>
    );
  }
}

export default LocationList;
