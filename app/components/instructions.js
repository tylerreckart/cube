import React from 'react';
import Scrambo from 'scrambo';

import puzzles from '../utils/puzzles';

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {
      instructions: [],
      options: [
        { _id: 0, value: '222', text: '2x2' },
        { _id: 1, value: '333', text: '3x3' },
        { _id: 2, value: '444', text: '4x4' },
        { _id: 3, value: '555', text: '5x5' },
        { _id: 4, value: '666', text: '6x6' },
        { _id: 5, value: '777', text: '7x7' },
      ],
      value: ''
    };
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

  handleCubeSizeChange(value) {
    // this.setState({
    //   value: value
    // });

    console.log(value);
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
        <div className="controls">
          <div className="">
            <h3>Cube Size</h3>
            <select id="js-cube-size" onChange={this.handleCubeSizeChange()}>
              {
                this.state.options.map((option) => {
                  return (
                    <option
                      key={option._id}
                      value={option.value}
                      >{option.text}</option>
                    )
                  })
                }
            </select>
          </div>

          {/* <div className="">
            <h3>Inspection Time:</h3>
            <select>
              <option value="10">10 Seconds</option>
            </select>
          </div>

          <div className="">
            <h3>Interface Mode:</h3>
            <select>
              <option value="light">Light</option>
            </select>
          </div> */}
        </div>

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
