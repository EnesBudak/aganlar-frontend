import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// axios.defaults.baseURL = 'https://aganlar-backend.herokuapp.com/api/v1/'
axios.defaults.baseURL = 'http://localhost:3001/api/v1/'


createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
