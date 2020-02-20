import axios from 'axios';

const config = {
    baseURL: 'http://157.230.46.55:9009/semicolonsquad/'
};

export default axios.create(config);
