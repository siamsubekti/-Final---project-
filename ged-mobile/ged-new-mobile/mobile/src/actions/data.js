export const FIND_DATA = "FIND_DATA";
export const FIND_DATA_SUCCESS = "FIND_DATA_SUCCESS";
export const FIND_DATA_ERROR = "FIND_DATA_ERROR";

export const FIND_ALL_DATA = "FIND_ALL_DATA";
export const FIND_ALL_DATA_SUCCESS = "FIND_ALL_DATA_SUCCESS";
export const FIND_ALL_DATA_ERROR = "FIND_ALL_DATA_ERROR";

export function findDataById(id) {
    return {
        type: FIND_DATA,
        id: id
    };
}

export function findAllFile() {
    return {
        type: FIND_ALL_DATA
    };
}