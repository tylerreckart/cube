import React from 'react';
import Scrambo from 'scrambo';

import Controls from './controls';

class Scramble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inspectionTime: 0,
      interfaceMode: 'light',
      scramble: [],
      value: 333
    };
  }

  componentWillMount() {
    this.scramble(this.state.value);
  }

  componentWillUnmount() {
    this.setState({
      scramble: []
    })
  }

  setInspectionTimer(value) {
    this.setState({
      inspectionTime: value
    });
  }

  setInterfaceMode(value) {
    this.setState({
      interfaceMode: value
    });
  }

  scramble(value) {
    var scramble = new Scrambo().type(value).get();

    this.setState({
      scramble: scramble,
      value: value
    });
  }

  render() {
    var scramble = this.state.scramble.join(" ").toString();

    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 32 && this.props.isRunning == true) {
        this.scramble(this.state.value);
      }
    });

    return (
      <div className="row">
      <Controls
        setInspectionTimer={this.setInspectionTimer.bind(this)}
        setInterfaceMode={this.setInterfaceMode.bind(this)}
        scramble={this.scramble.bind(this)} />
        
        <div className="row scramble-container">
          <h3 className="scramble"><strong>Scramble</strong> {scramble}</h3>
        </div>
      </div>
    );
  }
}

Scramble.propTypes = {
  isRunning: React.PropTypes.bool.isRequired
}

export default Scramble;
