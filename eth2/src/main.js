import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Web3 from 'web3'

Vue.config.productionTip = false
Vue.prototype.Web3 = Web3

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
