const router = require("koa-router")();

      mine = require("./mine");
router.get("/",async(ctx)=>{
    const imgs = [
        {name:'兔子',url:'http://zly.imgresource.com.cn/public/imgs/%E5%85%94%E5%AD%90.png'},
        {name:'布偶',url:'http://zly.imgresource.com.cn/public/imgs/%E5%B8%83%E5%81%B6.png'},
        {name:'拉布拉多',url:'http://zly.imgresource.com.cn/public/imgs/%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A.png'},
        {name:'棕熊',url:'http://zly.imgresource.com.cn/public/imgs/%E6%A3%95%E7%86%8A.png'},
        {name:'鹰',url:'http://zly.imgresource.com.cn/public/imgs/%E9%B9%B0.png'},
    ]
    await ctx.render("front/index.html",{title:"项目开发中...",imgs});
})

router.use(mine)

module.exports = router.routes();