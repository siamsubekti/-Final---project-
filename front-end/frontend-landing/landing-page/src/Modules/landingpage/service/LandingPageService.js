import Api from '../../../Api/Api';
import * as AlertConstant from "../../../Constant/AlertConstant";

export async function findTrackById(id) {
    return Api.get(`transaction/${id}`)
        .then((resp) => {
            return resp.data
        }).catch(err =>
            AlertConstant.status_internal_server_error_500("Data Not Found"));
}
