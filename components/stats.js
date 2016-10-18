import React from 'react';

class Stats extends React.Component {
  constructor() {
    super();

    this.state = {
      avg: 0,
      avgTimestamp: '',
      avgOf3: '',
      avgOf5: '',
      avgOf10: '',
      avgOf12: '',
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

    if (solves.length == 3) {
      this.setState({ avgOf3: this.calculateTimestamp(avg) });
    } else if (solves.length == 5) {
      this.setState({ avgOf5: this.calculateTimestamp(avg) });
    } else if (solves.length == 10) {
      this.setState({ avgOf10: this.calculateTimestamp(avg) });
    } else if (solves.length == 12) {
      this.setState({ avgOf12: this.calculateTimestamp(avg) });
    }
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

    if (this.props.solves.length >= 2) {
      if (this.state.avgOf3 !== '') {
        var avgOf3 = this.state.avgOf3;
      } else {
        var avgOf3 = '--:--:--';
      }
    } else {
      var avgOf3 = '--:--:--';
    }

    if (this.props.solves.length >= 4) {
      if (this.state.avgOf5 !== '') {
        var avgOf5 = this.state.avgOf5;
      } else {
        var avgOf5 = '--:--:--';
      }
    } else {
      var avgOf5 = '--:--:--';
    }

    if (this.props.solves.length >= 9) {
      if (this.state.avgOf10 !== '') {
        var avgOf10 = this.state.avgOf10;
      } else {
        var avgOf10 = '--:--:--';
      }
    } else {
      var avgOf10 = '--:--:--';
    }

    if (this.props.solves.length >= 11) {
      if (this.state.avgOf12 !== '') {
        var avgOf12 = this.state.avgOf12;
      } else {
        var avgOf12 = '--:--:--';
      }
    } else {
      var avgOf12 = '--:--:--';
    }

    return (
      <table className="stat-box">
        <tbody>
          <tr>
            <td><strong>Average</strong></td><td>{avg}</td>
            <td><strong>Best</strong></td><td>{best}</td>
          </tr>
          <tr>
            <td><strong>Average of 3</strong></td><td>{avgOf3}</td>
            <td><strong>Average of 10</strong></td><td>{avgOf10}</td>
          </tr>
          <tr>
            <td><strong>Average of 5</strong></td><td>{avgOf5}</td>
            <td><strong>Average of 12</strong></td><td>{avgOf12}</td>
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
