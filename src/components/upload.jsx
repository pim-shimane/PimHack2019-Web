import React, { Component } from "react";
import { connect } from "react-redux";
import Encoding from "encoding-japanese";

import { splitCredit } from "../actions/creditAction.js";
import { registerRecords } from "../actions/recordAction.js";

export function parse(text){
    // 一行ごとに配列に分割
    const tmp = text.split("\n");

    // tmpを一列ずつ読み込んで各行の中身をsplitする
    let records = [];
    for(let i=0; i<tmp.length; i++){
      // 空行だったら処理をスキップ
      if(tmp[i] === "") continue;

      // カンマで分割
      const line = tmp[i].split(',');

      // 4番目の要素以降をとりだす
      let record = [];
      for(let j=4; j<line.length; j++){
        record.push(line[j]);
      }

      records.push(record);
    }

    return records;
}

class Upload extends Component {
  parseCSV(text){
    const records = parse(text);
    this.props.splitCredit(records, this.props.needCredit, this.props.expartRequired);
    this.props.registerRecords(records);
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
        <input type="file" onChange={(e) => this.loadFile(e)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  needCredit: state.course.needCredit,
  expartRequired: state.course.expartRequired
});

const mapDispatchToProps = (dispatch) => {
  return {
    splitCredit(records, needCredit, expartRequired){
      dispatch(splitCredit(records, needCredit, expartRequired));
    },
    registerRecords(records){
      dispatch(registerRecords(records));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
