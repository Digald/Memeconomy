import { combineReducers } from "redux";
import pages from './Components/PageScroll/reducer';
// import currentTime from './Components/TopRightNav/reducer';

const rootReducer = combineReducers({
    pages
});

export default rootReducer;
