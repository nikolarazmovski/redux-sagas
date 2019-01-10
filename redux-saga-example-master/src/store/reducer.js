import { combineReducers } from "redux";
import  reducerGet  from './reducerGet';
import  reducerLogin  from './reducerLogin';
import  reducerReset  from './reducerReset';

export default combineReducers({
    reducerGet,
    reducerLogin,
    reducerReset
})