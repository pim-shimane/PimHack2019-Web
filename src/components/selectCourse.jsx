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
import machineElectronicsCredit from "../courses/machineElectronics.js";

class SelectCourse extends Component {
  constructor (props) {
    super(props);
  }

  // 学科コースの変更と成績の分割を行います
  SelectCourse(course, needCredit) {
    this.props.changeCourse(course, needCredit);
    this.props.splitCredit(this.props.records, needCredit);
  }

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          {this.props.course}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationSystem, informationSystemCredit)}>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationEngineering, informationEngineeringCredit)}>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(machineElectronics, machineElectronicsCredit)}>{machineElectronics}</MDBDropdownItem>
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
    changeCourse(course, needCredit){
      dispatch(changeCourse(course, needCredit));
    },
    splitCredit(records, needCredit){
      dispatch(splitCredit(records, needCredit));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);
