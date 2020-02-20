const initialState = {
    listUser: [],
    loading: true,
    addUser: {
        userName: "",
        password: "",
        email: "",
        roles: []
    }
};

function AdminReducer(state = initialState, action) {
    const {type, users, addUser} = action;
    console.log("STATE BEFORE", state.addUser);
    switch (type) {
        case 'LIST_USER_SUCCESS':
            return {...state, listUser: users};
        case 'SAVE_USER':
            return {...state, addUser};
        default:
            return state;
    }
}

export default AdminReducer;
