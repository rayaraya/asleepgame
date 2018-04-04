import WorldBuilder from './WorldBuilder';
import Location from '../locations/Location';

class LocationBuilder extends WorldBuilder {
  buildUnit(props) {
    const loc = new Location(props);
    props.world.location = loc;
    return loc;
  }
}

export default LocationBuilder;
