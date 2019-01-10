import { combineReducers } from "redux";
import  getReducer  from './reducerGet';
import  loginReducer  from './reducerLogin';
import  resetReducer  from './reducerReset';

export default combineReducers({
    getReducer,
    loginReducer,
    resetReducer
})