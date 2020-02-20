import axios from 'axios';

const config = {
    baseURL: 'http://192.168.43.120:8084'
};

export default axios.create(config);
