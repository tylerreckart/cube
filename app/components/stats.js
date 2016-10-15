import React from 'react';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      avg: 0,
      avgTimestamp: '',
      best: '',
      solves: [],
    }
  }

  componentWillReceiveProps() {
    this.calculateAverage();
    this.calculateBest();
  }

  calculateTimestamp(elapsed) {
    var min = String(Math.floor(elapsed / 100 / 60) + 100).substring(1);
    var sec = String(Math.floor((elapsed % (100 * 60)) / 100));
    var ms = String((elapsed % 100 + 100).toFixed(0)).substring(1);

    if (sec < 10) {
      sec = "0" + sec;
    }

    var timestamp = min + ":" + sec + ":" + ms;

    return timestamp;
  }

  calculateAverage() {
    var solves = this.props.solves;
    var sum = 0;

    for (var i = 0; i < solves.length; i++) {
      sum += solves[i]
    }

    var avg = sum / solves.length;

    this.setState({
      avg: avg,
      avgTimestamp: this.calculateTimestamp(avg)
    });
  }

  calculateBest() {
    var solves = this.props.solves;
    var best = Math.min.apply(Math,solves);

    this.setState({
      best: this.calculateTimestamp(best)
    })
  }

  render() {
    if (this.state.avg > 0) {
      var avg = this.state.avgTimestamp;
      var best = this.state.best;
    } else {
      var avg = '--:--:--';
      var best = '--:--:--';
    }

    return (
      <table className="stat-box">
        <tbody>
          <tr>
            <td>Average:</td><td>{avg}</td>
            <td>Best</td><td>{best}</td>
          </tr>
          <tr>
            <td>Average of 3:</td><td>--:--:--</td>
            <td>Average of 10:</td><td>--:--:--</td>
          </tr>
          <tr>
            <td>Average of 5:</td><td>--:--:--</td>
            <td>Average of 12:</td><td>--:--:--</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Stats.propTypes = {
  solves: React.PropTypes.array.isRequired
}

export default Stats;
