import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBCollapse, MDBContainer, MDBCard, MDBIcon, MDBListGroup, MDBListGroupItem} from "mdbreact";


class Sheet extends Component {
  state = {
    collapseID: ""
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
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
                      <th>人文社会科学</th>
                      <th>自然科学</th>
                      <th>その他の教養育成</th>
                      <th>自由選択１</th>
                      <th>専門基礎</th>
                      <th>専門必修</th>
                      <th>専門選択</th>
                      <th>専門自由</th>
                      <th>自由選択２</th>
                      <th>余剰単位</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>必要</th>
                      <td>{this.props.needcredit.english}</td>
                      <td>{this.props.needcredit.foreignLanguage}</td>
                      <td>{this.props.needcredit.artCulture}</td>
                      <td>{this.props.needcredit.informationScience}</td>
                      <td>{this.props.needcredit.social}</td>
                      <td>{this.props.needcredit.science}</td>
                      <td>{this.props.needcredit.educationOthers}</td>
                      <td>{this.props.needcredit.freeFirst}</td>
                      <td>{this.props.needcredit.specialFundamental}</td>
                      <td>{this.props.needcredit.specialCompulsory}</td>
                      <td>{this.props.needcredit.specialOptional}</td>
                      <td>{this.props.needcredit.specialFree}</td>
                      <td>{this.props.needcredit.freeSecond}</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>取得</th>
                      <td>
                        <div className="click-button" color="primary" onClick={this.toggleCollapse("englich")} style={{ marginBottom: "1rem" }}>
                          {this.props.credit.english}
                          <MDBIcon icon="caret-down"/>
                        </div>
                      </td>
                      <td>
                        <div className="click-button" color="primary" onClick={this.toggleCollapse("basicCollapse")} style={{ marginBottom: "1rem" }}>
                          {this.props.credit.foreignLanguage}
                          <MDBIcon icon="caret-down"/>
                        </div>
                      </td>
                      <td>{this.props.credit.artCulture}</td>
                      <td>{this.props.credit.informationScience}</td>
                      <td>{this.props.credit.social}</td>
                      <td>{this.props.credit.science}</td>
                      <td>{this.props.credit.educationOthers}</td>
                      <td>{this.props.needcredit.freeFirst}</td>
                      <td>{this.props.credit.specialFundamental}</td>
                      <td>{this.props.credit.specialCompulsory}</td>
                      <td>{this.props.credit.specialOptional}</td>
                      <td>{this.props.credit.specialFree}</td>
                      <td>{this.props.credit.freeSecond}</td>
                      <td>{this.props.credit.surplusCredit}</td>
                    </tr>
                  </tbody>
                </table>
                <MDBCollapse id="englich" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        <MDBListGroupItem className="details-style">hoge</MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
              </MDBCollapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  credit: state.credit,
  needcredit: state.course.needCredit
});

export default connect(mapStateToProps)(Sheet);

