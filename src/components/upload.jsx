import React, { Component } from "react";
import Encoding from "encoding-japanese"

class UploadScreen extends Component {
  parseCSV(text){
    // 一行ごとに配列に分割
    const tmp = text.split("\n");

    // tmpを一列ずつ読み込んで各行の中身をsplitする
    let array = {
      subject: []
    };
    for(let i=0; i<tmp.length; i++){
      // 空行だったら処理をスキップ
      if(tmp[i] == "") continue;

      // カンマで分割
      const line = tmp[i].split(',');

      // 最初の行には氏名や学年が入っているのでそれを取り出す
      if(i == 0){
        array["studentNumber"] = line[1];
        array["studentName"] = line[2];
        array["studentGrade"] = line[3];
      }
      
      // 4番目の要素以降をとりだす
      let addArray = [];
      for(let j=0; j<line.length; j++){
        if(j >= 4){
          addArray.push(line[j]);
        }
      }
      array.subject.push(addArray);
    }

    console.log(array);
  }

  loadFile(e){
    let file = e.target.files.item(0);
    let reader = new FileReader();
    let that = this;
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

      that.parseCSV(unicodeString);
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