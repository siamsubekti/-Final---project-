import { put, takeLatest } from 'redux-saga/effects';
import { FIND_ALL_DATA_SUCCESS, FIND_ALL_DATA_ERROR, FIND_ALL_DATA } from '../actions/data';


function* findAllFile() {
    try {
        const data = yield fetch(
            'http://192.168.43.120:8085/transactions'
            // 'https://reqres.in/api/data'
        ).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || 'Unknown error');
            }
            return response.json();
        }).then(json => {
            return json.data;
        });

        yield put({
            type: FIND_ALL_DATA_SUCCESS,
            data: data
        });
    } catch (error) {

        console.log(error);
        yield put({
            type: FIND_ALL_DATA_ERROR,
            error: error
        });
    }
}

export function* watchFindAllFile() {
    yield takeLatest(FIND_ALL_DATA, findAllFile);
}