import React from 'react';

class Controls extends React.Component {
  constructor() {
    super();
    this.state = {
      interfaceModes: [
        { _id: 0, value: 'light', text: 'Light' },
        { _id: 1, value: 'dark', text: 'Dark' }
      ],
      interfaceMode: 'light',
      option: 333,
      options: [
        { _id: 0, value: 222, text: '2x2' },
        { _id: 1, value: 333, text: '3x3' },
        { _id: 2, value: 444, text: '4x4' },
        { _id: 3, value: 555, text: '5x5' },
        { _id: 4, value: 666, text: '6x6' },
        { _id: 5, value: 777, text: '7x7' }
      ],
      inspectionTime: 0,
      inspectionTimes: [
        { _id: 0, value: 0, text: 'No Inspection' },
        { _id: 1, value: 3, text: '3 Seconds' },
        { _id: 2, value: 5, text: '5 Seconds' },
        { _id: 3, value: 10, text: '10 Seconds' },
        { _id: 4, value: 15, text: '15 Seconds' }
      ],
      value: 333
    };
  }

  handleCubeSizeChange(e) {
    var value = e.target.value;
    this.setState({
      value: value
    });
    this.handleCubeSizeSubmit(value);
  }

  handleCubeSizeSubmit(value) { this.props.scramble(value); }

  handleInspectionTimeChange(e) {
    var value = e.target.value;
    this.setState({
      inspectionTime: value
    });
    this.handleInspectionTimeSubmit(value);
  }

  handleInspectionTimeSubmit(value) { this.props.setInspectionTimer(value); }

  handleInterfaceModeChange(e) {
    var value = e.target.value;
    this.setState({
      interfaceMode: value
    });
    this.handleInterfaceModeSubmit(value);
  }

  handleInterfaceModeSubmit(value) { this.props.setInterfaceMode(value); }

  render() {
    return (
      <div className="row controls">
        <div className="control-block">
          <h3>Cube Size</h3>
          <select value={this.state.value} onChange={this.handleCubeSizeChange.bind(this)}>
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

        <div className="control-block">
          <h3>Inspection Time:</h3>
          <select value={this.state.inspectionTime} onChange={this.handleInspectionTimeChange.bind(this)}>
            {
              this.state.inspectionTimes.map((option) => {
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

        <div className="control-block">
          <h3>Interface Mode:</h3>
          <select value={this.state.interfaceMode} onChange={this.handleInterfaceModeChange.bind(this)}>
            {
              this.state.interfaceModes.map((option) => {
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

      </div>
    )
  }
}

Controls.propTypes = {
  setInspectionTimer: React.PropTypes.func,
  setInterfaceMode: React.PropTypes.func,
  scramble: React.PropTypes.func,
}

export default Controls;
