import React from 'react';
import Scrambo from 'scrambo';

import puzzles from '../utils/puzzles';

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = { instructions: [] };
  }

  componentWillMount() {
    this.generateInstructions();
  }

  componentWillUnmount() {
    this.setState({
      instructions: []
    })
  }

  generateInstructions() {
    var instructions = new Scrambo().type('333').get();

    this.setState({
      instructions: instructions
    });
  }

  render() {
    var instructions = this.state.instructions.join(" ").toString();

    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 32) {
        this.generateInstructions();
      }
    });

    return (
      <div className="instructions-container">
        <h3 className="instructions"><strong>Scramble:</strong> {instructions}</h3>
      </div>
    );
  }
}

export default Instructions;
