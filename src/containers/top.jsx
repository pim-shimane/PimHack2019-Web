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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  num: state.credit.num
});

export default connect(mapStateToProps)(TopScreen);