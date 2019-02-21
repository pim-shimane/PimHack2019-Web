import { CHANGE_COURSE } from "../actions/courseAction.js";
import { informationSystem } from "../courses/informationSystem.js";
import { informationEngineering } from "../courses/informationEngineering.js";
import { machineElectronics } from "../courses/machineElectronics.js";

const initialState = {
  course: "学科選択",
  needCredit: "",
  expartRequired: []
};
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COURSE: {
      return {
        course: action.course,
        needCredit: action.needCredit,
        expartRequired: action.expartRequired
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
  machineElectronics
};
