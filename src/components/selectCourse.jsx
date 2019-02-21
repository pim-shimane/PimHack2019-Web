import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { changeCourse } from "../actions/courseAction.js";
import { splitCredit } from "../actions/creditAction.js";

import { informationSystem } from "../reducers/courseReducer.js";
import { informationEngineering } from "../reducers/courseReducer.js";
import { machineElectronics } from "../reducers/courseReducer.js";
import informationSystemCredit from "../courses/informationSystem.js";
import informationEngineeringCredit from "../courses/informationEngineering.js";
import machineElectronicsCredit, { machineElectoronicsRequired } from "../courses/machineElectronics.js";
import { informationEngineeringRequired } from "../courses/informationEngineering.js";
import { informationSystemRequired } from "../courses/informationSystem.js";

class SelectCourse extends Component {
  // 学科コースの変更と成績の分割を行います
  SelectCourse(course, needCredit, expartRequired) {
    this.props.changeCourse(course, needCredit, expartRequired);
    this.props.splitCredit(this.props.records, needCredit, expartRequired);
  }

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          {this.props.course}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationSystem, informationSystemCredit, informationSystemRequired)}>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationEngineering, informationEngineeringCredit, informationEngineeringRequired)}>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(machineElectronics, machineElectronicsCredit, machineElectoronicsRequired)}>{machineElectronics}</MDBDropdownItem>
       </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}

const mapStateToProps = state => ({
  course: state.course.course,
  records: state.record.records
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCourse(course, needCredit, expartRequired){
      dispatch(changeCourse(course, needCredit, expartRequired));
    },
    splitCredit(records, needCredit, expartRequired){
      dispatch(splitCredit(records, needCredit, expartRequired));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);
