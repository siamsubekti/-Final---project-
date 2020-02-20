
import { all, fork } from "redux-saga/effects";
import { watchFindAllUsers } from "./users";

export default function* sagas() {
    console.log('sagas index');

    yield all([
        fork(watchFindAllUsers),
    ]);
};