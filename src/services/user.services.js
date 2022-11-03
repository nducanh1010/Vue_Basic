import http from '@/plugins/axios';
import { authHeaders } from '@/utils/auth';

class UserService {
  getListUser() {
    return http
      .get('/api/users', {
        
        headers: authHeaders(),
      })
      .then(res => {
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  update(data) {
    return http
      .post('/users/update', data, {
        headers: authHeaders(),
      })
      .then(res => {
        return res?.data?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`users/detail/${id}`, {
        headers: authHeaders(),
      })
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(data) {
    return http
      .post(`api/users/delete/${data.id}`,{
        headers: authHeaders(),
      })
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
}

const userService = new UserService();

export default userService;
