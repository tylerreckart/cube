import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      startTime: 0,
      diff: 0,
      laps: [],
      running: false
    }

    this.increment = null;
  }

  componentWillUnmount() {
    clearInterval(this.increment);
    this.setState({
      time: 0
    })
  }

  tick() {
    var elapsedTime = Date.now() - this.state.startTime + this.state.diff;

    this.setState({
      time: elapsedTime
    });
  }

  getTimestamp() {
    var min = String(Math.floor(this.state.time / 100 / 60) + 100).substring(1);
    var sec = String(Math.floor((this.state.time %(100*60))/100));
    var ms = String(this.state.time % 100 + 100).substring(1);

    if (sec < 10) {
      sec = "0" + sec;
    }

    var timestamp = min + ":" + sec + ":" + ms

    return timestamp;
  }

  handleStart() {
    this.increment = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        startTime: new Date(),
        running: true
      });
    }, 10);
  }

  handleStop() {
    clearInterval(this.increment);
    this.setState({
      time: this.state.time,
      running: false
    });
  }

  handleReset() {
    clearInterval(this.increment);
    this.setState({
      time: 0,
      laps: [],
      running: false
    });
  }

  render() {
    document.body.onkeyup = (e) => {
      if (e.keyCode == 32) {
        if (this.state.running == true) {
          this.handleStop();

          console.log(this.getTimestamp())
        } else if (this.state.running == false) {
          this.handleStart();
        }
      }
    }

    return (
      <div>
        <h1>{this.getTimestamp()}</h1>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Timer;
