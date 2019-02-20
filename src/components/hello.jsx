// 実験用のファイルです。最終的に削除します。
import React, { Component } from "react";
import { connect } from "react-redux";

// import informationSyatemCredit from "../courses/informationSystem";

class HelloScreen extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h5>Hello World</h5>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  num: state.lesson.num,
  english: state.courseCredit.english
});

export default connect(mapStateToProps)(HelloScreen);
