import React, {Component} from 'react'
import LocationList from './LocationList'

class Elements extends Component {
    state = {
        locations : this.props.elements.locations,
        events : this.props.elements.events,
        characters : this.props.elements.characters
    }

    render() {
        const locations = this.state.locations;
        return(
            <div>
                <div className="card-group">
                    <div className="card text-center text-white bg-secondary mb-3 ">
                        <div className="card-header">
                            <div className="btn-group btn-group-lg">
                                <LocationList locations = {locations}/>
                            </div>
                        </div>
                        <div className="card-body">
                        </div>
                    </div>
                    
                        <div className="card text-left text-white bg-light mb-3">
                        <div className="card-body">
                            <div className="btn-group btn-group-lg">
                            <div className="alert alert-light">
                                Notification example
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Elements