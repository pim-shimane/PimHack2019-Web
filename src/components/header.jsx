import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-light mb-3">
        <div className="container">
          <a href="https://pim-shimane.com/">
            <img src="/images/pimlogo.png" height="40px" alt="" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
