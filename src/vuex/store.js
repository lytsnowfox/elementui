//引入vue
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
//注册Vuex
Vue.use(Vuex)
// 状态
const state = {
  userinfo : JSON.parse(localStorage.getItem('userinfo')),
  userList : []
}
// 操作state
const mutations = {
  //保存用户数据
  SAVE_USERINFO (state, userinfo) {
    // 把用户信息写入本地存储
    localStorage.setItem('userinfo', JSON.stringify(userinfo));
    state.userinfo = userinfo;
  },
  GET_USERLIST (state, userList) {
    state.userList = userList;
  }
}

// 定义异步actions，commit用于改变mutations中的数据的状态
const actions = {
  GET_USERLIST ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('/api/lyt/user/getAllUser').then(response => {
        console.log("获取用户数据成功！");
        commit('GET_USERLIST', response.data);
        resolve();
      });
    })
  }
}

//创建store仓库暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions
})
