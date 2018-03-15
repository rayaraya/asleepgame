import GameObject from "../world_components/GameObject";

class Location extends GameObject {
    constructor(props) {
        super(props);
        this._view = props.view;
    }
    enter() {

    }
}

export default GameObject
