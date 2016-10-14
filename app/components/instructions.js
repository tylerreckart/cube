import React from 'react';

class Instructions extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: [
        'R', 'R2', 'R' + "'", '2R' + "'",
        'L', 'L2', 'L' + "'", '2L' + "'",
        'U', 'U2', 'U' + "'", '2U' + "'",
        'D', 'D2', 'D' + "'", '2D' + "'",
        'F', 'F2', 'F' + "'", '2F' + "'",
        'B', 'B2', 'B' + "'", '2B' + "'"
      ],
      instructions: []
    }
  }

  componentWillMount() {
    var moves = this.state.moves;
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

    console.log(this.state.instructions);
  }

  render() {
    var instructions = this.state.instructions.join(", ").toString();

    return (
      <div>
        {instructions}
      </div>
    );
  }
}

export default Instructions;
