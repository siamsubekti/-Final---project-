import API from '../api';

export default function doUpdateTrack(idTrans, idStorage, idOperator) {
    return API.post('/track',{
        listTransactions: {
            id: idTrans,
        },
        storage: {
            id: idStorage,
        },
        users: {
            id: idOperator,
        }
    }
};