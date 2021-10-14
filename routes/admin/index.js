const router = require('koa-router')(),
      user = require("./user")


router.get("/",async(ctx)=>{
    await ctx.render("admin/index.html",{title:'哈喽art-template-admin'});
})

router.use("/user",user);



module.exports = router;
