const initialState={
    in:[],
    loading:true,
    login:{
        userName:"",

        password:""
    }
}

function LoginReducer(state=initialState,action) {
    const {login, type} = action;
    switch (type) {
        case 'LOGIN_SUCCESS':
            return {...state, login}
        default:
            return state;
    }
}
export default LoginReducer;