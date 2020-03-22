const router = require('koa-router')();

router.get("/",async(ctx)=>{
    await ctx.render('admin/index',{title:'哈喽art-template'})
})

module.exports = router.routes();