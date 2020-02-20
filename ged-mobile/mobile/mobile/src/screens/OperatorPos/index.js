export const posActiveReducer = (posActive = {}, action) => {
    if (action.type === 'AUTH_POS') {
        return action.payload;
    }
    return posActive;
};