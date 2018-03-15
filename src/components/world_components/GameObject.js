class GameObject {
    constructor(props) {
        this._name = props.name;
        this._creationTime = new Date();
    }

    get name() {
        return this._name;
    }

    get creationTime() {
        return this._creationTime;
    }
}

export default GameObject;