import Api from '../../../Api/Api';

export async function listLocation() {
    return await Api.get(`locations`)
        .then((res) => res.data)
}

export async function save(params) {
    return await Api.post(`transactions`, params)
        .then((resp) => resp.data)
}

export async function listUser() {
    return await Api.get('users')
        .then((res) => res.data)
}

export async function findUserByName(name) {
    return await Api.get(`users/search?value=${name}`)
        .then((res) => res.data)
}

export async function listTransactions() {
    return await Api.get('transactions')
        .then((res) => res.data)
}
