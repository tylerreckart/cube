import React from 'react';

import Instructions from './instructions';
import Timer from './timer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Instructions/>
        <Timer/>
      </div>
    );
  }
}

export default App;
