import React from 'react';

import Instructions from './instructions';
import Stats from './stats';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      solves: [],
      start: 0,
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
    var min = String(Math.floor(elapsed / 1000 / 60) + 100).substring(1,3);
    var sec = String(Math.floor((elapsed % (1000 * 60)) / 1000) + 100).substring(1,3);
    var ms = String(elapsed % 1000 + 1000).substring(1,3);

    var timestamp = min + ":" + sec + ":" + ms

    return timestamp;
  }

  handleStart() {
    this.setState({
      start: Date.now(),
    });

    var interval = 10;
    this.increment = setInterval(() => {
      var delta = Date.now() - this.state.start;
      this.setState({
        time: delta,
        running: true
      });
    }, interval);


    if (this.state.time > 0) {
      clearInterval(this.increment);

      this.setState({
        start: Date.now(),
        time: 0
      });

      this.increment = setInterval(() => {
        var delta = Date.now() - this.state.start;
        this.setState({
          time: delta,
          running: true
        });
      }, interval);
    } else {
      this.increment;
    }
  }

  handleStop() {
    clearInterval(this.increment);

    console.log(this.state.time)

    this.setState({
      time: this.state.time / 10,
      running: false
    });

    var myArr = this.state.solves.slice();

    myArr.push(this.state.time);

    this.setState({
      solves: myArr
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
        <Instructions isRunning={this.state.running}/>
        <h1 className="timestamp">{this.tick(this.state.time)}</h1>
        <Stats solves={this.state.solves}/>
      </div>
    );
  }
}

export default Timer;
