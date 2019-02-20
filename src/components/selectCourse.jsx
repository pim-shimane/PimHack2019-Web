import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const SelectCourse = () => {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          学科
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>数理・情報システム学科（数理構造コース、数理解析コース）</MDBDropdownItem>
          <MDBDropdownItem>数理・情報システム学科（情報システムコース）</MDBDropdownItem>
          <MDBDropdownItem>数理・情報システム学科（情報工学コース）</MDBDropdownItem>
          <MDBDropdownItem>知能情報デザイン学科</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }
  

export default SelectCourse;