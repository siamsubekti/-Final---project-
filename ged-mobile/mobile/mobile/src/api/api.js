import axios from 'axios'

axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
});

export default axios.create(
    {
        baseURL: 'http://10.10.16.160:8081'
    }
);

