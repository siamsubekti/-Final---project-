import { FIND_ALL_USERS, FIND_ALL_USERS_SUCCESS, FIND_ALL_USERS_ERROR } from "../../actions/user";

export function findAllUsers(state = {
    data : [],
    loading : false,
    error: null
}, action) {
    const {type, data, error} = action;
    switch (type) {
        case FIND_ALL_USERS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_ALL_USERS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_ALL_USERS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error
            };

        default:
            return state;
    }

}
