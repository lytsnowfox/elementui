// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios';
import qs from 'qs';
import store from './vuex/store'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 挂载
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 获取用户数据
/*store.dispatch('GET_USERLIST').then(()=>{
  console.log("用户列表：" + store.state.userList);
});*/

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
