const router = require('koa-router')();

router.get("/",async(ctx)=>{
    await ctx.render('admin/user',{title:'哈喽---user'})
})

module.exports = router.routes();