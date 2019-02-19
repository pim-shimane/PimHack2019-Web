import React, { Component } from "react";
import "./App.css";

import Top from "./containers/top.jsx";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <Top />
          <h5>{this.state}</h5>
        </header>
      </div>
    );
  }
}

export default App;
