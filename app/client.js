import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/index';

document.addEventListener('keypress', (e) => {
  if (e.keyCode == 32) {
    e.preventDefault();
  }
});

ReactDOM.render((
  <App/>
), document.getElementById('root'));
