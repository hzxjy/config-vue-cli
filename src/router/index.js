import Vue from 'vue'
import Router from 'vue-router'
import RouterX from './modules/router_x'
import RouterY from './modules/router_y'
/*import store from '@/store'
import * as types from '@/store/mutations-type'*/

Vue.use(Router)

 const router = new Router({
  mode: 'history',//路由的history模式
  routes: [
    ...RouterX,
    ...RouterY,
    /*{ path: '*', component: NotFoundComponent }*/
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

/*history模式服务器设置
nginx
location / {
  try_files $uri $uri/ /index.html;
}*/


/*router.beforeEach((to, from, next) => {
  //一个路由匹配到的所有路由记录暴露为$route.matched 数组
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    //方法是自定义的，判断有没有登录，auth.loggedIn()
      console.log(to.path);
      console.log(from.path);
    if (!cookie.readCookie('token')) {
      localStorage.removeItem('userInfo');
      store.commit(types.UPDATE_USERINFO, {});//清除store中的userInfo
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })

    } else {
      next()
    }
  } else {  
    next() // 确保一定要调用 next()
  }
})*/

export default router;
