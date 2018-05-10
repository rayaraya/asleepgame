import React, { Component } from 'react';
import LocationList from './LocationList';
import NotificationList from './NotificationList';
import CurrentLocation from './CurrentLocation';
import ApplesCounter from './ApplesCounter';

class Elements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: props.world.locations,
      events: props.world.events,
      characters: props.world.characters,
      notifications: props.world.notifications,
      currentLocation: props.world.locations[0],
    };
    this.changeLocation = this.changeLocation.bind(this);
  }

  changeLocation(loc) {
    this.setState(prev => ({
      currentLocation: loc,
    }));
  }

  render() {
    const { locations, notifications, currentLocation } = this.state;
    const params = {
      locations,
      changeloc: this.changeLocation,
    };

    return (
            <div>
                <div className="card-group">
                    <div className="card text-center text-white bg-secondary mb-3">
                        <div className="card-header ">
                            <div className="btn-group btn-group-lg ml-5">
                                <LocationList params = { params }/>
                            </div>
                            <button type="button" className="btn btn-light bg-secondary float-right mr-2">
                                <ApplesCounter world = {this.props.world}/>
                            </button>
                        </div>
                        <div className="card-body">
                            <CurrentLocation currentLocation = { currentLocation } />
                        </div>
                    </div>
                        <div className="card text-left text-white bg-light mb-3">
                        <div className="card-body">
                            <div className="btn-group btn-group-lg">
                            <NotificationList state = { notifications } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Elements;
