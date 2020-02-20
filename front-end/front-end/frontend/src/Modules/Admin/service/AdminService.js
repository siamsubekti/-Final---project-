import Api from '../../../Api/Api';
import axios from 'axios';

let token = sessionStorage.getItem("userInfo")

export async function listUser(url) {
    return await Api.get(`users`, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => res.data)
}

export async function save(params) {
    return await Api.post(`users`, params)
        .then((resp) => resp.data)
}

export async function getDataById(id) {
    return await Api.get(`users/${id}`)
        .then((resp) => resp.data)

}

export async function deleteUser(params) {
    return await Api.delete('users', params)
        .then((resp) => resp.data)
}

export async function updateUser() {
    return await Api.update('users')
        .then((resp) => resp.data)
        .catch(e => console.log(e))

}

