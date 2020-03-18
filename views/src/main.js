// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由文件
import http from './router/http' // 引入axios配置
import Router from 'vue-router' // 解决路由报错问题
import axios from 'axios' // 引入axios
import util from './common/js/util' //扩展函数
import Vant from 'vant' // 引入vant
import store from './store' //VUEX
import GlobalComponent from './common/js/globalComponents' // 全局组件
import VueAwesomeSwiper from 'vue-awesome-swiper' // swiper
import DropBalloon from './components/common/DropBalloon' // 购物车降落的小球
import VueLazyload from 'vue-lazyload' //懒加载
import './common/js/rem.js' // 样式适配
import './icons' // svg
import 'vant/lib/index.css'
import './common/css/base.css'
import 'swiper/dist/css/swiper.css'

// 解决路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$axios = axios
Vue.prototype.$util = util

Vue.use(Vant)
Vue.use(GlobalComponent)
Vue.use(VueAwesomeSwiper)
Vue.use(DropBalloon)
Vue.use(VueLazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http,
  store,
  components: { App },
  template: '<App/>'
})
