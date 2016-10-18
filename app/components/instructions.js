import React from 'react';
import Scrambo from 'scrambo';

import Controls from './controls';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [],
      value: 333
    };
  }

  componentWillMount() {
    this.generateInstructions(333);
  }

  componentWillUnmount() {
    this.setState({
      instructions: []
    })
  }

  generateInstructions(value) {
    var instructions = new Scrambo().type(value).get();

    this.setState({
      instructions: instructions
    });
  }

  render() {
    var instructions = this.state.instructions.join(" ").toString();

    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 32 && this.props.isRunning == true) {
        this.generateInstructions();
      }
    });

    return (
      <div>
        <Controls/>
        <div className="instructions-container">
          <h3 className="instructions"><strong>Scramble:</strong> {instructions}</h3>
        </div>
      </div>
    );
  }
}

Instructions.propTypes = {
  isRunning: React.PropTypes.bool.isRequired
}

export default Instructions;
