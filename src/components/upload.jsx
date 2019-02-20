import React, { Component } from "react";
import Encoding from "encoding-japanese"

class UploadScreen extends Component {
  loadFile(e){
    let file = e.target.files.item(0);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(e){
      // テキストデータを読み込んで文字コードを検出
      const codes = new Uint8Array(e.target.result);
      const encoding = Encoding.detect(codes);

      // unicodeStringにUnicodeに変換されたCSVデータが入る
      const unicodeString = Encoding.convert(codes, {
        to: 'unicode',
        from: encoding,
        type: 'string'
      });
    }
  }

  render() {
    return (
      <div>
        <h5>Upload</h5>
        <input type="file" onChange={(e) => this.loadFile(e)} />
      </div>
    );
  }
}

export default UploadScreen;