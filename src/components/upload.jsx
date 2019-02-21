import React, { Component } from "react";
import { connect } from "react-redux";
import Encoding from "encoding-japanese";

import { addRecord } from "../actions/recordAction.js";

class Upload extends Component {
  constructor (props) {
    super(props);
  }

  parseCSV(text){
    // 一行ごとに配列に分割
    const tmp = text.split("\n");

    // tmpを一列ずつ読み込んで各行の中身をsplitする
    //let array = [];
    for(let i=0; i<tmp.length; i++){
      // 空行だったら処理をスキップ
      if(tmp[i] == "") continue;

      // カンマで分割
      const line = tmp[i].split(',');
      
      // 4番目の要素以降をとりだす
      let record = [];
      for(let j=4; j<line.length; j++){
        record.push(line[j]);
      }
      
      if(record[8]==="合" && this.props.needCredit!==""){
        this.props.addRecord(record, this.props.needCredit);
        //needCredit が空の時は実行しない
        console.log(this.props.needCredit);
      }
    }
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

const mapStateToProps = state => ({
  needCredit: state.course.needCredit
});

const mapDispatchToProps = (dispatch) => {
  return {
    addRecord(record, needCredit){
      dispatch(addRecord(record, needCredit));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);