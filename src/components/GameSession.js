import SleepWorldDirector from './world_components/SleepWorldDirector'

class GameSession {
    constructor(worldDirector = new SleepWorldDirector()) {
        this._instance = this;
        this._worldDirector = worldDirector;
      }

    static get instance() {
        return this._instance
    }
}

export default new GameSession();