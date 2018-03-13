import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import test from './modules/test'
import createLogger from 'vuex/dist/logger' // Vuex 自带一个日志插件用于一般的调试

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'//node判断开发 or 生成环境

export default new Vuex.Store({
  // 内存数据状态，UI可通过this.$store.state.* 获得数据
  state,
  // store内部计算属性
  getters,
  // 唯一拥有更改内存数据的接口，不可进行异步操作
  mutations,
  // 与mutation通讯，ui层写入内存数据的接口，可异步操作
  actions,
  //模块
  modules: {
    test
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
