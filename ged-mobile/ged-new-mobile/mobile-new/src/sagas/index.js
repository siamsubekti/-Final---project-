
import { all, fork } from "redux-saga/effects";
import { watchFindAllUsers } from "./users";

export default function* sagas() {
    console.log('sagas index');

    yield all([
        fork(watchFindAllUsers),
    ]);
};

// import { all, fork } from 'redux-saga/effects';
// import { watchFindAllFile } from './data';
//
//
// export default function* sagas() {
//     yield all([
//         fork(watchFindAllFile),
//     ]);
// };

