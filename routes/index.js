const router = require('koa-router')()

// 这里相当于访问首页不做任何处理
router.get('/', async ctx => { ctx.body = 'welcome' })

// 访问其他子路由进行拆分访问
router.use('/user', require('./user'))
router.use('/commodity', require('./commodity'))

module.exports = router