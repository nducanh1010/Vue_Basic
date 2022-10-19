import { createApp} from "vue";
import App from "./App.vue";
import store from './store';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@element-plus/icons-vue'
// import { search } from '@element-plus/icons-vue'



// Vue.config.productionTip = false;
// console.log(ElementPlus)
const app = createApp(App)
app.use(ElementPlus)
// app.use(search)
app.use(router)
app.mount('#app')
