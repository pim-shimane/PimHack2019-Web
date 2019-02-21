import React, { Component } from "react";
import { connect } from "react-redux";

// ここにcomponentをインポート
import Title from '../components/title.jsx'
import Header from '../components/header.jsx'
import Warning from '../components/warning.jsx'
import Sheet from '../components/evaluationSheet.jsx'
import '../css/wireframe.css';
import Upload from '../components/upload.jsx'
import SelectCourse from '../components/selectCourse.jsx';

class TopScreen extends Component {
  render() {
    console.log(this.props.isSelected)
    return (
      <div className="main-padding-menu">
        <Header />
        <Warning />
        <Title />
        <Upload />
        <SelectCourse />
        {this.props.isSelected ? <Sheet /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSelected: state.credit.isSelected
});

export default connect(mapStateToProps)(TopScreen);
