import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className='py-5 text-center mx-3 mb-3'>
      <div className="container">
        <div className="row">
          <div className="mx-auto p-5 my-5 col-md-8">
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