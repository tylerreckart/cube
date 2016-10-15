import React from 'react';

import Stats from './stats';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      solves: [],
      time: 0,
    }

    this.increment = null;
  }

  componentWillUnmount() {
    clearInterval(this.increment);
    this.setState({
      time: 0
    })
  }

  tick(elapsed) {
    var min = String(Math.floor(elapsed / 100 / 60) + 100).substring(1);
    var sec = String(Math.floor((elapsed % (100 * 60)) / 100));
    var ms = String(elapsed % 100 + 100).substring(1);

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
        running: true
      });
    }, 10);

    if (this.state.time > 0) {
      clearInterval(this.increment);

      this.setState({
        time: 0
      });

      this.increment = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
          running: true
        });
      }, 10);

    } else {
      this.increment;
    }
  }

  handleStop() {
    clearInterval(this.increment);

    this.setState({
      time: this.state.time,
      running: false
    });

    var myArr = this.state.solves.slice();

    myArr.push(this.state.time);

    this.setState({
      solves: myArr
    });
  }

  handleLog() {
    var time = this.state.time;
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
        } else if (this.state.running == false) {
          this.handleStart();
        }
      }
    }

    return (
      <div>
        <h1 className="timestamp">{this.tick(this.state.time)}</h1>
        {/* <button className="btn reset-btn" onClick={this.handleReset.bind(this)}>Reset</button> */}
        <Stats solves={this.state.solves}/>
      </div>
    );
  }
}

export default Timer;
