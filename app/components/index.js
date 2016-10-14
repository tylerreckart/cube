import React from 'react';

import Instructions from './instructions';
import Timer from './timer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Instructions/>
        <Timer/>

        <div className="description">
          <p>Use the spacebar to start, stop, and reset the timer. You can manually reset the timer by pressing the reset button above.</p>
          <p>&copy; 2016 <a href="https://tylerreckart.com/" target="_blank">Tyler Reckart</a></p>
        </div>
      </div>
    );
  }
}

export default App;
