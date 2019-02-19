import {combineReducers} from 'redux';
import lesson from './lessonReducer.js';
import courseCredit from './courseCreditReducer.js';

const reducer = combineReducers({
    lesson,
    courseCredit
});

export default reducer;