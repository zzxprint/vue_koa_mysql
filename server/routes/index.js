const router = require('koa-router')()

// 这里相当于访问首页不做任何处理
router.get('/', async ctx => { ctx.body = 'welcome' })

// 访问其他子路由进行拆分访问
router.use('/user', require('./user')) // 用户模块
router.use('/commodity', require('./commodity')) // 商品模块
router.use('/category', require('./category')) // 商品分类模块
router.use('/login', require('./login')) // 登录模块

module.exports = router