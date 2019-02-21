import { combineReducers } from "redux";

import credit from "./creditReducer.js";
import course from "./courseReducer.js";
import record from "./recordReducer.js";

const reducer = combineReducers({
  credit,
  course,
  record
});

export default reducer;
