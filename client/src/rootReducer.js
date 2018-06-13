import { combineReducers } from "redux";
import currentTime from './Components/TopRightNav/reducer';

const rootReducer = combineReducers({
    currentTime
});

export default rootReducer;
