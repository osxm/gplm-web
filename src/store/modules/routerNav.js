import router from "@/router/index"

const routerNav = {
    state:{
        routers:[]
    },
    mutations: {
        setRouters: (state, routers) => {
          state.addRouters = routers 
          state.routers = router.concat(routers) // 所有有权限的路由表，用来生成菜单列表
        }
      }
}

export default routerNav;