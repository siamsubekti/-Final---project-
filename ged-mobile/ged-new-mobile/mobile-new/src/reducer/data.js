import { FIND_ALL_DATA, FIND_ALL_DATA_SUCCESS, FIND_ALL_DATA_ERROR } from "../actions/data";


export function findAllFile(state = { data: [], loading: false, error: null }, action) {
    switch (action.type) {
        case FIND_ALL_DATA:
            return {
                ...state,
                data: [],
                loading: true,
                error: null
            };
        case FIND_ALL_DATA_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_ALL_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}