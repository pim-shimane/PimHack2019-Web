import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { informationSystem } from "../reducers/courseReducer.js"; 
import { informationEngineering } from "../reducers/courseReducer.js"; 
import { inteligenceInformationDesign } from "../reducers/courseReducer.js"; 
import { machineElectronics } from "../reducers/courseReducer.js"; 
import { changeCourse } from "../actions/courseAction.js";

class SelectCourse extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          {this.props.course}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.props.changeCourse(informationSystem)}>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(informationEngineering)}>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(inteligenceInformationDesign)}>{inteligenceInformationDesign}</MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.props.changeCourse(machineElectronics)}>{machineElectronics}</MDBDropdownItem>
       </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
}
 
const mapStateToProps = state => ({
  course: state.course.course
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCourse(course){
      dispatch(changeCourse(course));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);
