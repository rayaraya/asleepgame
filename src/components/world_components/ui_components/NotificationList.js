import React, { Component } from 'react';

class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: props.state,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({ unseen: '' }));
    }, 1000);
  }
  render() {
    const { notifications } = this.state;
    const notificationList = notifications.map(not =>
        <div key ={Math.random()} className="alert alert-light">
            {not}
        </div>);
    return (
              <div>{ notificationList }</div>
    );
  }
}

export default NotificationList;
