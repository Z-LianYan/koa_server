const router = require("koa-router")();

      mine = require("./mine");
router.get("/",async(ctx)=>{
    await ctx.render("front/index.html",{title:"前台首页"});
})

router.use(mine)

module.exports = router.routes();