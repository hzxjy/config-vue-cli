// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'
import attachFastClick from 'fastclick'
import * as filters from './filters' // global filters

require('./styles/index.scss')  // 引入静态资源




attachFastClick.attach(document.body)   //引入fastclick 消除 click 移动浏览器300ms延迟

Object.keys(filters).forEach(key => {  //vue全局过滤器
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */ //不能删除，控制eslint不检查
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// router.push({ name: 'SupportIndex'})