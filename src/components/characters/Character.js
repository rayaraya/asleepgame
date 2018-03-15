import GameObject from '../world_components/GameObject'

class Character extends GameObject {
    constructor(location) {
        this._location = location;
    }

    get location() {
        return location;
    }
}

export default Character 