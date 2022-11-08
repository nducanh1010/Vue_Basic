import http from '@/plugins/axios';
// import { authHeaders } from '@/utils/auth';

class ContactService {
    getList(){
        return http
      .get('/contacts')
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
    }
  create(data){
    return http.post('/contacts/create',data)
    .then(res=> {return res?.message})
    .catch(err=>{
        return Promise.reject(err);
    })

  }
  update(data) {
   
    return http
      .post('/contacts/update', data)
      .then(res => {
        console.log(res.message)
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`/contacts/detail/${id}`)
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(id) {
    return http
      .post(`/contacts/delete/${id}`)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err); 
      });
  }
}

const contactService = new ContactService();

export default contactService;
