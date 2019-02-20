import React, { Component } from "react";

// ここにcomponentをインポート
import Hello from '../components/hello.jsx'

class TopScreen extends Component {
  render() {
    return (
      <div className="main-padding-menu">
        <Hello />
      </div>
    );
  }
}

export default TopScreen;