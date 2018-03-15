import GameObject from "../world_components/GameObject";

class Event extends GameObject {
    constructor(props) {
        super(props); 
        this._description = props.description;
        this._frequency =  props.frequency;
        this._isRepeated = props.isRepeated;
    }

    get description() {
        return this._description;
    }

    happen() {
        console.log(this._description);
        if (this._isRepeated) {
            /*do more complex logic*/
        }
    }
}

export default Event