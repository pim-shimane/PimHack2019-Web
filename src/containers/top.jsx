import React, { Component } from "react";
import { connect } from "react-redux";

// ここにcomponentをインポート
import Hello from '../components/hello.jsx'

class TopScreen extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main-padding-menu">
        <Hello />
        {this.props.num}
        {this.props.english}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  num: state.lesson.num,
  english: state.courseCredit.english
});

export default connect(mapStateToProps)(TopScreen);