const router = require('koa-router')()

//await 的函数体外面必须有async， async的函数体里面可以有await
router.get('/', async (ctx, next) => {
  global.console.log("index")
  // const a = await A; 
  // const b = await B; 
  // const c = await C; 
  //异步函数 同步写法 a执行完了之后再执行b《promise对象》
  //如果 await后面跟的不是await对象，会将其转化为promise对象
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
