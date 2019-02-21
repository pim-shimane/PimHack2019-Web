import React, { Component } from "react";

// ここにcomponentをインポート
import Title from '../components/title.jsx'
import Header from '../components/header.jsx'
import Warning from '../components/warning.jsx'
import IfDone from '../components/ifDone.jsx'
import Sheet from '../components/evaluationSheet.jsx'
import '../css/wireframe.css';
import Upload from '../components/upload.jsx'
import SelectCourse from '../components/selectCourse.jsx';

class TopScreen extends Component {
  render() {
    return (
      <div className="main-padding-menu">
        <Header />
        <Warning />
        <Title />
        <Upload />
        <SelectCourse />
        <IfDone />
        <Sheet />
      </div>
    );
  }
}

export default TopScreen;