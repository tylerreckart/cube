import React from 'react';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      avg: 0,
      best: 0,
      solves: [],
    }
  }

  calculateTimestamp(time) {
    var min = String(Math.floor(elapsed / 100 / 60) + 100).substring(1);
    var sec = String(Math.floor((elapsed % (100 * 60)) / 100));
    var ms = String(elapsed % 100 + 100).substring(1);

    return min + ":" + sec + ":" + ms;
  }

  calculateAverage(time) {
    // do something
  }

  render() {
    if (this.state.avg > 0) {
      var avg = calculateTimestamp(this.state.avg);
    } else {
      var avg = '--:--:--'
    }

    if (this.state.best > 0) {
      var avg = calculateTimestamp(this.state.best);
    } else {
      var best = '--:--:--'
    }

    if (this.state.solves.length >= 3) {
      var avg = calculateAverage(this.state.solves);
    } else {
      var avgOf3 = '--:--:--'
    }

    if (this.state.solves.length >= 5) {
      var avg = calculateAverage(this.state.solves);
    } else {
      var avgOf5 = '--:--:--'
    }

    if (this.state.solves.length >= 10) {
      var avg = calculateAverage(this.state.solves);
    } else {
      var avgOf10 = '--:--:--'
    }

    if (this.state.solves.length >= 12) {
      var avg = calculateAverage(this.state.solves);
    } else {
      var avgOf12 = '--:--:--'
    }

    return (
      <table className="stat-box">
        <tr>
          <td>Average:</td>
          <td>{avg}</td>
          <td>Best</td>
          <td>{best}</td>
        </tr>
        <tr>
          <td>Average of 3:</td>
          <td>{avgOf3}</td>
          <td>Average of 10:</td>
          <td>{avgOf10}</td>
        </tr>
        <tr>
          <td>Average of 5:</td>
          <td>{avgOf5}</td>
          <td>Average of 12:</td>
          <td>{avgOf12}</td>
        </tr>
      </table>
    )
  }
}

export default Stats;
