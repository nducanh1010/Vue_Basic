import { createApp} from "vue";
import App from "./App.vue";
import store from './store/index';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '@element-plus/icons-vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { search } from '@element-plus/icons-vue'
import  http  from '@/plugins/axios';



// Vue.config.productionTip = false;
// console.log(ElementPlus)
const app = createApp(App)
// app.prototype.$http=http
app.config.globalProperties.$http = http


app.use(ElementPlus)
app.use(store)
app.use(ElementPlusIconsVue)

app.use(router)
app.mount('#app')
