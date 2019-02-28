import { CHANGE_COURSE } from "../actions/courseAction.js";

const initialState = {
  course: "学科選択",
  needCredit: "",
  needCreditNumber: 0,
  expartSubject: []
};
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COURSE: {
      return {
        course: action.course,
        needCredit: action.needCredit,
        needCreditNumber:
          action.needCredit.english +
          action.needCredit.foreignLanguage +
          action.needCredit.artCulture +
          action.needCredit.informationScience +
          action.needCredit.social +
          action.needCredit.science +
          action.needCredit.educationOthers +
          action.needCredit.freeFirst +
          action.needCredit.specialFundamental +
          action.needCredit.specialCompulsory +
          action.needCredit.specialOptional +
          action.needCredit.specialFree +
          action.needCredit.freeSecond,
        expartSubject: action.expartSubject
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
