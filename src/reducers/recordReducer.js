import { REGISTER_RECORD } from "../actions/recordAction.js";

const initialState = {
  records: []
};

// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_RECORD: {
      return {
        records: action.records
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
