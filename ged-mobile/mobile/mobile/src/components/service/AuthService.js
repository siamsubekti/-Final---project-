import axios from 'axios';
import {AsyncStorage} from 'react-native';

const USER_API_BASE_URL = 'localhost/authenticate';
let token = AsyncStorage.getItem('userInfo');

class AuthService {
  login(credentials) {
    console.log('service login ', credentials);
    return axios.post('http://10.10.16.159:8084/authenticate', credentials);
  }

  getUserInfo() {
    return JSON.parse(AsyncStorage.getItem('userInfo'));
  }

  getUserId() {
    return AsyncStorage.getItem('idUser');
  }

  getAuthHeader() {
    return {headers: {Authorization: 'Bearer' + this.getUserInfo()}};
  }
}

export default new AuthService();
