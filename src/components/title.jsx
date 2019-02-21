import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className='text-center mx-3 mb-3  bb'>
      <div className="container">
        <div className="row">
          <div className="mx-auto col-md-8 aa">
            <h1 className="display-4">pim単位計算アプリ</h1>
            <p className="lead">地味にうれしい！島大生のために作られたアプリ</p>
            <a className="btn btn-outline-secondary" href="#">アップロード</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Title;