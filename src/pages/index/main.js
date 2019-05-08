import Vue from 'vue'
import App from './index'

//add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
 
export default {
  config: {
    usingComponents: {
      'i-card': '../../../static/iview/card/index',
      'i-button': '../../../../static/iview/button/index',
      "i-tabs": "../../../../static/iview/tabs/index",
      "i-tab": "../../../../static/iview/tab/index",
      "i-icon": "../../../../static/iview/icon/index",
      "i-tab-bar": "../../../../static/iview/tab-bar/index",
      "i-tab-bar-item": "../../../../static/iview/tab-bar-item/index"
    },
    
  },
  handleChange(detail) {
    console.log('idd')
    this.current= detail.key
  }
}


