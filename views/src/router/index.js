import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import shop from '@/components/shop/shop'
import category from '@/components/category/category'
import cart from '@/components/cart/cart'
import mine from '@/components/mine/mine'
import order from '@/components/order/order'
import checkout from '@/components/order/checkout/checkout'
import orderDetail from '@/components/order/orderDetail'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    // 不需要登录的页面
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          name: 'shop',
          component: shop
        },
        {
          path: '/category',
          name: 'category',
          component: category
        },
        {
          path: '/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine,
          meta: {requireAuth: true}, //需要登录
        }
      ]
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 需要登录的页面
    {
      path: '/order',
      name: 'order',
      component: order,
      redirect: '/order/checkout',
      children: [
        {
          path: 'checkout',
          name: 'checkout',
          component: checkout,
          meta: {requireAuth: true}, //需要登录
        }
      ]
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
  ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  if(!to.meta.requireAuth) {
    // 如果已登录，则不让用户去登录页
    if(token !== null && token !== '' && to.path == '/login'){
      next('/')
    }
    next();
  }else {
    // 如果没有登录，则跳转登录页面并记录本来药跳转的路径
    if(token === null || token === ''){
      next({
        name: 'login',
        params: {nextPath: to.path}
      })
    }else{
      next()
    }
  }
})

export default router
