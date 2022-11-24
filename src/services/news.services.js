import http from '@/plugins/axios';
// import { authHeaders } from '@/utils/auth';

class NewsService {
    getList(){
        return http
      .get('/news/')
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
    }
  getListNewsCategory(category_id) {
    return http
      .post('/news/list-news-category',{category_id})
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  nextpage(page){
    return http
    .get(`/news?page=${page}`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
  }
  create(data){
    return http.post('/news/create',data)
    .then(res=> {return res?.message})
    .catch(err=>{
        return Promise.reject(err);
    })

  }
  update(data) {
    return http
      .post('/news/update', data)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  detail(id) {
    return http
      .get(`/news/detail/${id}`)
      .then(res => {
        return res?.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  delete(id) {
    return http
      .post(`/news/delete/${id}`)
      .then(res => {
        return res?.message;
      })
      .catch(err => {
        return Promise.reject(err); 
      });
  }
 
}

const newsService = new NewsService();

export default newsService;
