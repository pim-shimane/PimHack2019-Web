import { CHANGE_COURSE } from "../actions/courseAction.js";

const informationSystem = "数理・情報システム学科（情報システムコース）";
const informationEngineering = "数理・情報システム学科（情報工学コース）";
const inteligenceInformationDesign = "知能情報デザイン学科";
const machineElectronics = "機械・電気電子工学科";

const initialState = {
  course: "学科選択",
  needCredit: ""
};
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COURSE: {
      return {
        course: action.course,
        needCredit: action.needCredit
      };
    }
    default: {
      return state;
    }
  }
};

export {
  reducer as default,
  informationSystem,
  informationEngineering,
  inteligenceInformationDesign,
  machineElectronics
};
