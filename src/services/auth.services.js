import http from '@/plugins/axios';

import { authHeaders } from '@/utils/auth';

class AuthService {
  login({ email, password }) {
    return http
      .post('/login', {
        email: email,
        password,
      })
      .then(res => { 
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  register({ email, password,name,c_password, }) {
    return http
      .post('/register', {
        email,
        password,
        name,
        c_password
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  logout() {
    return http
      .post('/logout')
      .then(res => {
        console.log('Log out!',res.message)
        return res?.message;
      })
      .catch(err => {
        console.log(err.message)
        return Promise.reject(err);
      });
  }
  
  
}

const authService = new AuthService();

export default authService;
