import World from './World'

class WorldDirector {
    constructor (world = new World()) {
        this._world = world;
    }

    constructNewWorld() {

    }

    get world() {
        return this._world;
    }
}

export default WorldDirector