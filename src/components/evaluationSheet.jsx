import React, { Component } from "react";

class Sheet extends Component {
  render() {
    var hoge = [];
    hoge = ["hoge", "biz"];
    return (
      <div>
      <div className="container done-space">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-3  text-center">あと？単位足りません。</h1>
        </div>
      </div>
    </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <table>
                <thead>
                <tr>
                  <th></th>
                  <th>英語</th>
                  <th>初修</th>
                  <th>健康・スポーツ/文化・芸術</th>
                  <th>情報科学</th>
                  <th>教養育成</th>
                  <th>自然科学系学部共通科目</th>
                  <th>自由選択１</th>
                  <th>基盤科目</th>
                  <th>専門必修</th>
                  <th>専門選択</th>
                  <th>専門自由</th>
                  <th>自由選択２</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th>取得</th>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                  <th>必要</th>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                  <td>4</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Sheet;
