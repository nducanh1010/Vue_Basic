import http from '@/plugins/axios';
// import { authHeaders } from '@/utils/auth';

class CategoryService {
    getList(){
        return http
      .get('/categories/')
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
    }
  getListNewsCategory(category_id) {
    return http
      .post('/news/list-news-category',category_id )
      .then(res => {
        return res?.data?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  create(data){
    return http.post('/categories/create',data)
    .then(res=> {return res?.message})
    .catch(err=>{
        return Promise.reject(err);
    })

  }
  update(data) {
    return http
      .post('/categories/update', data)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`categories/detail/${id}`)
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(id) {
    return http
      .post(`/categories/delete/${id}`)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err); 
      });
  }
}

const categoryService = new CategoryService();

export default categoryService;
