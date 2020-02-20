const initialState = {
    addUser: {
        userName: "",
        password: "",
        email: "",
        roles: [{id: '5'}]
    },

    errors: {
        userName: "",
        password: "",
        email: ""
    }
};

function LandingPageRegisterReducer(state = initialState, action) {
    const {type, addUser} = action;
    console.log("STATE BEFORE", state.addUser);
    switch (type) {
        case 'SAVE_USER':
            return {...state, addUser};
        default:
            return state;
    }
}

export default LandingPageRegisterReducer;
