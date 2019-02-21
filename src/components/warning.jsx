import React, { Component } from "react";

class Warning extends Component {
  render() {
    return (
      <div>
        <p id="attention">このアプリを使って問題が起きてもpimは一切保証いたしません。</p>
        <p>また、アップロードしたデータにつきましてはサーバーに保存されることなく処理されています。</p>
      </div>
    );
  }
}

export default Warning;