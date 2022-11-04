import http from '@/plugins/axios';
// import { authHeaders } from '@/utils/auth';

class UserService {
  getListUser() {
    return http
      .get('/users')
      .then(res => {
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  update(data) {
    return http
      .post('/users/update', data)
      .then(res => {
        return res?.data?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`users/detail/${id}`)
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(id) {
    return http
      .post(`/users/delete/${id}`)
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
