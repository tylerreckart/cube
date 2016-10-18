import React from 'react';

import Footer from './footer';
import Timer from './timer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Timer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
