import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { informationSystem } from "../reducers/courseReducer.js"; 
import { informationEngineering } from "../reducers/courseReducer.js"; 
import { inteligenceInformationDesign } from "../reducers/courseReducer.js"; 
import { machineElectronics } from "../reducers/courseReducer.js"; 

const SelectCourse = () => {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          学科
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>{informationSystem}</MDBDropdownItem>
          <MDBDropdownItem>{informationEngineering}</MDBDropdownItem>
          <MDBDropdownItem>{inteligenceInformationDesign}</MDBDropdownItem>
          <MDBDropdownItem>{machineElectronics}</MDBDropdownItem>
       </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
  

export default SelectCourse;

