import React, { Component } from 'react';

export default class CountUpTime extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.countTime()
    }, 1000)
  }

  countTime() {
    let { hours, minutes, seconds } = this.state;

    if (seconds >= 59) {
      minutes += 1
      seconds = -1
    }

    if (minutes >= 60) {
      hours += 1
      minutes = 0
    }

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds : seconds + 1
    })
  }

  convertTime(type) {
    return type < 10 ? `0${type}` : type;
  }

  displayTime() {
    let { hours, minutes, seconds } = this.state;
    return <h3>
      {`${this.convertTime(hours)} : ${this.convertTime(minutes)} : ${this.convertTime(seconds)}`}
    </h3>
  }

  render() {
    return (
      <div>
        {this.displayTime()}
      </div>
    );
  }
}
