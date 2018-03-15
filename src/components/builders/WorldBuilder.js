import GameObject from '../world_components/GameObject'

class WorldBuilder {
    buildUnit(name) {
        return new GameObject(name);
    }
}

export default WorldBuilder;
