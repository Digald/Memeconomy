import { combineReducers } from "redux";
import pages from './Components/PageCards/reducer';
import loginForm from './Components/FormToggle/reducer';

const rootReducer = combineReducers({
    pages,
    loginForm
});

export default rootReducer;
