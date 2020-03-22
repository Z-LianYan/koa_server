const router = require("koa-router")();

router.prefix('/mine');

router.get("/",async(ctx)=>{
    await ctx.render("front/mine",{title:"前台我的页面"});
})

module.exports = router.routes();