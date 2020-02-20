import Api from '../../../Api/Api';

export async function save(params) {
    return await Api.post(`users`, params)
        .then((resp) => resp.data)
}
