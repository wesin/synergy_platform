import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || '',
    user: null,

  },
  mutations: {
    login(state, user) {
      state.token = user.token;
      state.user = user;
    },
    logout(state) {
      state.token = '';
      state.user = null;
    },
  },
  actions: {
    login(context, user) {
      sessionStorage.setItem("token", user.token);
      context.commit('login', user);
    },
    logout(context) {
      sessionStorage.removeItem("token");
      context.commit('logout');
    }
  },
  getters: {
    // !!将state.token强制转换为布尔值，若state.token存在且不为空(已登录)则返回true，反之返回false
    isLogined: state => !!state.token
  }
});

export default store;