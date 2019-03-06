import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

//here we choose which functions (reducers) will take care of which property in state
export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});
