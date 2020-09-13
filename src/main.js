import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from "element-ui"
import i18n from "./i18n"

import "element-ui/lib/theme-chalk/index.css"
import "font-awesome/css/font-awesome.css"

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  store,
  router, 
  i18n,
  components: {App},
  render: h => h(App)
}).$mount('#app')
