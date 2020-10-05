import React, { Component } from 'react';

export default class CurrentTime extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleString()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime : new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
    return (
      <div>{this.state.currentTime}</div>
    );
  }
}
