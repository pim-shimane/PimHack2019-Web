import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBCollapse,
  MDBContainer,
  MDBCard,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

class Sheet extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

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
                    <tr className="table-title">
                      <th />
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
                    <tr className="required-unit">
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
                    <tr className="acquisition-unit">
                      <th>取得</th>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("english")}
                        >
                          {this.props.credit.english}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("foreignLanguage")}
                        >
                          {this.props.credit.foreignLanguage}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("artCulture")}
                        >
                          {this.props.credit.artCulture}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("informationScience")}
                        >
                          {this.props.credit.informationScience}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("social")}
                        >
                          {this.props.credit.social}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("science")}
                        >
                          {this.props.credit.science}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("freeSecond")}
                        >
                          {this.props.credit.educationOthers}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("freeFirst")}
                        >
                          {this.props.needcredit.freeFirst}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("specialFundamental")}
                        >
                          {this.props.credit.specialFundamental}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("specialCompulsory")}
                        >
                          {this.props.credit.specialCompulsory}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("specialOptional")}
                        >
                          {this.props.credit.specialOptional}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("specialFree")}
                        >
                          {this.props.credit.specialFree}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("freeSecond")}
                        >
                          {this.props.credit.freeSecond}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                      <td>
                        <div
                          className="click-button"
                          color="primary"
                          onClick={this.toggleCollapse("surplusCredit")}
                        >
                          {this.props.credit.surplusCredit}
                          <MDBIcon icon="caret-down" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* -----english----- */}
                <MDBCollapse id="english" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.englishLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----foreignLanguage----- */}
                <MDBCollapse
                  id="foreignLanguage"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.foreignLanguageLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----artCulture----- */}
                <MDBCollapse id="artCulture" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.artCultureLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----informationScience----- */}
                <MDBCollapse
                  id="informationScience"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.informationScienceLesson.map(
                          data => {
                            return (
                              <MDBListGroupItem className="details-style">
                                {data}
                              </MDBListGroupItem>
                            );
                          }
                        )}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----social----- */}
                <MDBCollapse id="social" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.socialLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----science----- */}
                <MDBCollapse id="science" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.scienceLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----educationOthers----- */}
                <MDBCollapse
                  id="educationOthers"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.educationOthersLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----freeFirst----- */}
                <MDBCollapse id="freeFirst" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.freeFirstLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----specialFundamental----- */}
                <MDBCollapse
                  id="specialFundamental"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.specialFundamentalLesson.map(
                          data => {
                            return (
                              <MDBListGroupItem className="details-style">
                                {data}
                              </MDBListGroupItem>
                            );
                          }
                        )}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----specialCompulsory----- */}
                <MDBCollapse
                  id="specialCompulsory"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.specialCompulsoryLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----specialOptional----- */}
                <MDBCollapse
                  id="specialOptional"
                  isOpen={this.state.collapseID}
                >
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.specialOptionalLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----specialFree----- */}
                <MDBCollapse id="specialFree" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.specialFreeLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----freeSecond----- */}
                <MDBCollapse id="freeSecond" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.freeSecondLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBCard>
                  </MDBContainer>
                </MDBCollapse>
                {/* -----surplusCredit----- */}
                <MDBCollapse id="surplusCredit" isOpen={this.state.collapseID}>
                  <MDBContainer>
                    <MDBCard>
                      <MDBListGroup>
                        {this.props.credit.surplusCreditLesson.map(data => {
                          return (
                            <MDBListGroupItem className="details-style">
                              {data}
                            </MDBListGroupItem>
                          );
                        })}
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
