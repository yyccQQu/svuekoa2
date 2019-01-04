const router = require('koa-router')()
const Person = require('../dbs/models/person.js')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('./addPersion', async function (ctx) {
  const persion = new Person({
    name: ctx.request.body.name,
    age: ctx.request.body.age

  })

  let code = 0
  try {
    await persion.save()
    code = 0
  } catch (e) {
    code = -1
  }

  await persion.save()
  ctx.body = {
    code: code
  }


})


module.exports = router
