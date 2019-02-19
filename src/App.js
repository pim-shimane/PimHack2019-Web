import React, { Component } from "react";
import "./App.css";

import Top from "./containers/top.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Top />
        </header>
      </div>
    );
  }
}

export default App;
