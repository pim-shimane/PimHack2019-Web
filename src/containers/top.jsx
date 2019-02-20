import React, { Component } from "react";
// ここにcomponentをインポート
import Hello from '../components/hello.jsx'
import Title from '../components/title.jsx'
import Header from '../components/header.jsx'
import Warning from '../components/warning.jsx'
import IfDone from '../components/ifDone.jsx'
import Sheet from '../components/evaluationSheet.jsx'
import '../css/wireframe.css';

class TopScreen extends Component {
  render() {
    return (
      <div className="main-padding-menu">
        <Header />
        <Warning />
        <Title />
        {/* <SelectCoursetest /> */}
        <IfDone />
        <Sheet />
      </div>
    );
  }
}

export default TopScreen;