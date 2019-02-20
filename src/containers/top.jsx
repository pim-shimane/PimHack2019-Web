import React, { Component } from "react";

// ここにcomponentをインポート
import Hello from '../components/hello.jsx'
import Upload from '../components/upload.jsx'

class TopScreen extends Component {
  render() {
    return (
      <div className="main-padding-menu">
        <Hello />
        <Upload />
      </div>
    );
  }
}

export default TopScreen;