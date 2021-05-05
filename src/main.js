import Vue from 'vue'
import App from './App.vue'
import router from './router'
import use from './use'
import store from "./store";


Vue.config.productionTip = false

use();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
