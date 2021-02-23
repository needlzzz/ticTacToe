import React, { Fragment } from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.getTimeString()
    };
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: this.getTimeString()
      });
    }, 1000);
  }

  render() {
    return <Fragment>{this.state.currentTime}</Fragment>
  }

  getTimeString() {
    return new Date().toLocaleString();
  }
}

export default Clock;
