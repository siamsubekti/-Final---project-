import {combineReducers} from 'redux';
import LoginReducer from "./signin/reducer/LoginReducer";
import LandingPageRegisterReducer from "./register/reducer/LandingPageRegisterReducer";
import LandingPageReducer from "./landingpage/reducer/LandingPageReducer";

export default combineReducers({
    login: LoginReducer,
    register: LandingPageRegisterReducer,
    landingPage :LandingPageReducer
})
