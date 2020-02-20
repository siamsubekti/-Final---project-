import API from '../api'

export function getTransactionsByName() {
    return API.get('/users/{originName}');
}