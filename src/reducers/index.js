import { combineReducers } from "redux";
import lesson from "./lessonReducer.js";
import courseCredit from "./courseCreditReducer.js";
import course from "./courseReducer.js";

const reducer = combineReducers({
  lesson,
  course,
  courseCredit
});

export default reducer;
