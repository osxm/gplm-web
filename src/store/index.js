import Vue from 'vue'
import Vuex from 'vuex'
import role from "./modules/role"
//import router from "@/router/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 

  },
  mutations: {
  },
  actions: {
  },
  getters: {
    info: state => state.role.info
  },  
  modules: {
    role
  }
})
