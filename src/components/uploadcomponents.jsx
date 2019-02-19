import React, { Component } from "react";
import Encoding from "encoding-japanese"

class Upload extends Component {
  ExecUpload(e){
    let file = e.target.files.item(0);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function(e){
      // 文字コード変換
      const codes = new Uint8Array(e.target.result);
      const encoding = Encoding.detect(codes);
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
            <input type="file" onChange={(e) => this.ExecUpload(e)}/>
      </div>
    );
  }
}
export default Upload;