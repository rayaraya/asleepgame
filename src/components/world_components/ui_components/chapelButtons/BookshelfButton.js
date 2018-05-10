import React, { Component } from 'react';

class BookshelfButton extends Component {
  constructor(props) {
    super(props);
    this.commands = props.world.commands;
    /* this.command = this.commands.find(element => (element.name === 'bookshelfCommand'));
    this.id = 'look at bookshelf';

    this.state = {
      disable: props.world.buttonsDisableState.state[this.id],
    };

    this.command.execute = this.command.execute.bind(this.command);
    this.command.button = this; */
  }

  componentWillUnmount() {
    // this.command.button = null;
  }

  render() {
    return (<div>
          <button id="look at bookshelf" type="button" className="btn btn-light float-right mr-5"
       // onClick={(event) => { this.command.execute(); }}>
           >     {'look at the bookshelf'}
        </button>
      </div>);
  }
}

export default BookshelfButton;
