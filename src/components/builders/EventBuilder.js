import WorldBuilder from './WorldBuilder';
import Event from '../events/Event';

class EventBuilder extends WorldBuilder {
  buildUnit(props) {
    const event = new Event(props);
    props.world.event = event;
    return event;
  }
}

export default EventBuilder;
