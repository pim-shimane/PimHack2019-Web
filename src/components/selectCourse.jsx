import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { changeCourse } from "../actions/courseAction.js";
import { splitCredit } from "../actions/creditAction.js";

// 情報システムコース
import informationSystem, { informationSystemCredit, expartInformationSystem } from "../courses/informationSystem.js";
// 情報工学コース
import informationEngineering, { informationEngineeringCredit, expartInformationEnginnering} from "../courses/informationEngineering.js";
// 機械・電子工学科
import machineElectronics, { machineElectronicsCredit, expartMachineElectoronics } from "../courses/machineElectronics.js";

class SelectCourse extends Component {
  // 学科コースの変更と成績の分割を行います
  SelectCourse(course, needCredit, expartSubject) {
    this.props.changeCourse(course, needCredit, expartSubject);
    this.props.splitCredit(this.props.records, needCredit, expartSubject, course);
  }

  render() {
    return (
      <MDBDropdown className="bottom-space">
        <MDBDropdownToggle caret color="primary">
          {this.props.course}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationSystem, informationSystemCredit, expartInformationSystem)}>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(informationEngineering, informationEngineeringCredit, expartInformationEnginnering)}>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.SelectCourse(machineElectronics, machineElectronicsCredit, expartMachineElectoronics)}>{machineElectronics}</MDBDropdownItem>
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
    changeCourse(course, needCredit, expartSubject){
      dispatch(changeCourse(course, needCredit, expartSubject));
    },
    splitCredit(records, needCredit, expartSubject, course){
      dispatch(splitCredit(records, needCredit, expartSubject, course));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);
