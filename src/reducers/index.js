import { combineReducers } from "redux";
import record from "./recordReducer.js";
import course from "./courseReducer.js";

const reducer = combineReducers({
  record,
  course
});

export default reducer;
