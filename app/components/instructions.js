import React from 'react';

import puzzles from '../utils/puzzles';

class Instructions extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: [ puzzles.three ],
      instructions: []
    }
  }

  componentWillMount() {
    this.generateInstructions();
  }

  generateInstructions() {
    var moves = this.state.moves[0];
    var instructions = this.state.instructions;

    while (instructions.length < moves.length) {
      for (var i = 0; i < moves.length; i++) {
        instructions.push(moves[i]);
      }

      var currentIndex = instructions.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = instructions[currentIndex];
        instructions[currentIndex] = instructions[randomIndex];
        instructions[randomIndex] = temporaryValue;
      }
    }

    this.setState({
      instructions: instructions
    });
  }

  render() {
    var instructions = this.state.instructions.join(" ").toString();

    return (
      <div className="instructions-container">
        <h3 className="instructions"><strong>Scramble:</strong> {instructions}</h3>
      </div>
    );
  }
}

export default Instructions;
