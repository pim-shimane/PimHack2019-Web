import { combineReducers } from "redux";
import courseCredit from "./courseCreditReducer.js";
import course from "./courseReducer.js";

const reducer = combineReducers({
  course,
  courseCredit
});

export default reducer;
