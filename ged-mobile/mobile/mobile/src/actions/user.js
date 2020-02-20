export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const FIND_ALL_USERS_SUCCESS = "FIND_ALL_USERS_SUCCESS";
export const FIND_ALL_USERS_ERROR = "FIND_ALL_USERS_ERROR";

export function findAllUsers() {

    return {
        type: FIND_ALL_USERS
    };
}