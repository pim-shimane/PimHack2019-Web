import React, { Component } from "react";

// ここにcomponentをインポート
import Hello from '../components/hello.jsx';
import SelectCourse from '../components/selectCourse.jsx';

class TopScreen extends Component {
  render() {
    return (
      <div className="main-padding-menu">
        <Hello />
        <SelectCourse />
      </div>
    );
  }
}

export default TopScreen;