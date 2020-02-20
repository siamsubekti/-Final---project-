import {combineReducers} from 'redux';
import PostOperatorReducer from "./PostOperator/reducer/PostOperatorReducer";
import AdminReducer from "./Admin/reducer/AdminReducer";
import LoginReducer from "./Login/reducer/LoginReducer";


export default combineReducers({
    login: LoginReducer,
    transaction: PostOperatorReducer,
    admin: AdminReducer
})
