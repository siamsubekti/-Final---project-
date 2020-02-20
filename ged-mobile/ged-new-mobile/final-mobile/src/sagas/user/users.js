import { put, takeLatest } from "redux-saga/effects";
import { FIND_ALL_USERS, FIND_ALL_USERS_SUCCESS, FIND_ALL_USERS_ERROR } from "../actions/user.js";
import React from "react";

function* findAllUsers() {
    console.log('sagas user');

    try {
        // const data = [
        //     {
        //         id:1,
        //         first_name:"saaa",
        //         email:"saaa",
        //         avatar:"",
        //     }
        // ];

        const data = yield fetch(
           // 'http://192.168.43.120:8085/transactions'
                'https://reqres.in/api/users'
         ).then(response => {
            console.log('response', response);
           if (!response.ok) {
              throw new Error(response.statusText || "Unknown error");
           }
         return response.json();
         }).then(json => {

             console.log('json', json.data);

            return json.data;
         }).catch(function(error) {
            console.log(error);
        });

        yield put({
            type: FIND_ALL_USERS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ALL_USERS_ERROR,
            error: error
        });
    }
}

export function* watchFindAllUsers() {
    yield takeLatest(FIND_ALL_USERS, findAllUsers);
}

