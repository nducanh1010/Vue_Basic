import http from '@/plugins/axios';
import axios from 'axios';
import { authHeaders } from '@/utils/auth';

class AuthService {
  login({ email, password }) {
    return http
      .post('/login', {
        email: email,
        password,
      })
      .then(res => { 
        console.log(res)
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  register({ email, password }) {
    return http
      .post('/register', {
        email: email,
        password,
      })
      .then(res => {
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  logout() {
    return http
      .get('/logout', {
        headers: authHeaders(),
      })
      .then(res => {
        return res?.data?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  
  
}

const authService = new AuthService();

export default authService;
