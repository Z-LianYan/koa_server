const router = require("koa-router")();

      mine = require("./mine");
router.get("/",async(ctx)=>{
    await ctx.render("front/index.html",{title:"项目开发中..."});
})

router.use(mine)

module.exports = router.routes();