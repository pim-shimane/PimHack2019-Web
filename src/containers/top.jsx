import React, { Component } from "react";
import { connect } from "react-redux";

// ここにcomponentをインポート
import Hello from '../components/hello.jsx';
import SelectCourse from '../components/selectCourse.jsx';

class TopScreen extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main-padding-menu">
        <SelectCourse />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  num: state.lesson.num,
  english: state.courseCredit.english
});

export default connect(mapStateToProps)(TopScreen);