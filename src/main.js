import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
axios.defaults.baseURL = 'https://aganlar-backend.herokuapp.com/api/v1/'
// axios.defaults.baseURL = 'http://localhost:3001/api/v1/'
import tr from './translations/tr.json'
import en from './translations/en.json'
import { createI18n } from 'vue-i18n'
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.getUserToken) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
const i18n = createI18n({
    messages:{
      'en-US':en,
        'tr-TR':tr,
    },
    locale:'tr-TR',
    fallbackLocale:tr
    // something vue-i18n options here ...
  })
createApp(App).use(ElementPlus).use(router).use(i18n).use(store).mount('#app')
