import Vue from 'vue'
import App from './App'
import store from './store'
import WXrequest from './utils/wx-request'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$httpWX = WXrequest

const app = new Vue(App)
app.$mount()
