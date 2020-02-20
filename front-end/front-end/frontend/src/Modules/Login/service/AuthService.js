import axios from 'axios'

const USER_API_BASE_URL = 'localhost/authenticate';
let token = sessionStorage.getItem('userInfo')

class AuthService {
    login(credentials) {
        return axios.post(USER_API_BASE_URL, credentials);
    }

    getUserInfo() {
        return JSON.parse(sessionStorage.getItem("userInfo"))
    }

    getUserId(){
        return JSON.parse(localStorage.getItem("userId"))
    }

    getAutHeader() {
        return {headers: {Authorization: `Bearer ` + this.getUserInfo()}}
    }

    logOut() {
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("userId");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAutHeader())
    }
}

export default new AuthService();
