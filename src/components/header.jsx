import React, { Component } from "react";
import Icon from '../img/pimlogo.png';
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-light mb-3">
        <div className="container">
          <a href="https://pim-shimane.com/"><img src={Icon} height="40px" alt=""></img></a>
        </div>
      </nav>
    );
  }
}

export default Header;
