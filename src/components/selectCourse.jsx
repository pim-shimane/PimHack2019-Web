import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { informationSystem } from "../reducers/courseReducer.js"; 
import { informationEngineering } from "../reducers/courseReducer.js"; 
import { inteligenceInformationDesign } from "../reducers/courseReducer.js"; 
import { machineElectronics } from "../reducers/courseReducer.js"; 
import { changeCourse } from "../actions/courseAction.js";
import informationSystemCredit from "../courses/informationSystem.js";
import informationEngineeringCredit from "../courses/informationEngineering.js";
import inteligenceInformationDesignCredit from "../courses/intelligenceInformationDesign.js";
import machineElectronicsCredit from "../courses/machineElectronics.js";

class SelectCourse extends Component {
  constructor (props) {
    super(props);
  }

  SelectCourse(course, needCredit) {
    this.props.changeCourse(course, needCredit);
  }

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          {this.props.course}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.props.changeCourse(informationSystem, informationSystemCredit)}>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(informationEngineering, informationEngineeringCredit)}>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(inteligenceInformationDesign, inteligenceInformationDesignCredit)}>{inteligenceInformationDesign}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(machineElectronics, machineElectronicsCredit)}>{machineElectronics}</MDBDropdownItem>
       </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}
 
const mapStateToProps = state => ({
  course: state.course.course,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCourse(course, needCredit){
      dispatch(changeCourse(course, needCredit));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);
