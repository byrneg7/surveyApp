import { combineReducers } from 'redux';
import authReducer from './authReducer';


//here we choose which functions (reducers) will take care of which property in state
export default combineReducers({
    auth: authReducer
});



