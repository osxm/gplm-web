import Vue from 'vue'
import Vuex from 'vuex'
import role from "./modules/role"
import routerNav  from "./modules/routerNav"
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
    info: state => state.role.info,
    routers(store,state){
      store.commit('setRouters');
      return state.routerNav.routers
    }
  },  
  modules: {
    role,
    routerNav
  }
})
