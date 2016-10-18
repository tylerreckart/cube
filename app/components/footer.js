import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="copy left">
        <strong>Cube</strong> <span className="versionNumber">v0.2.1</span> <a href="https://github.com/tylerreckart/cube" target="_blank" className="footerLink"><strong>Github</strong></a></p>
        <p className="copy right">&copy; 2016 <a href="https://tylerreckart.com" target="_blank">Tyler Reckart</a>. MIT</p>
      </footer>
    );
  }
}

export default Footer;
