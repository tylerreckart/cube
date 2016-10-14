import React from 'react';

class Scrambler extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: [
        'R', 'R2', 'Rp', '2Rp',
        'L', 'L2', 'Lp', '2Lp',
        'U', 'U2', 'Up', '2Up',
        'D', 'D2', 'Dp', '2Dp',
        'F', 'F2', 'Fp', '2Fp',
        'B', 'B2', 'Bp', '2Bp'
      ],
      instructions: []
    }
  }

  generateInstructions() {
    for (var i = 0; i < 25; i++) {
      var moves = this.state.moves;
      var j = Math.floor(Math.random() * moves.length);

      instructions.push(moves[j]);
    }
  }
  render() {
    return (
      <div>
        {instructions}
      </div>
    );
  }
}

export default Scrambler;
