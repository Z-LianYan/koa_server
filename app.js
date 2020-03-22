
const koa=require('koa'),

      router=require('koa-router')(),
      render = require('koa-art-template'),
      static = require('koa-static'),
      bodyparser = require("koa-bodyparser"),
      path = require('path'),

      app = new koa;

//引入路由子模块
const admin = require("./routes/admin/index");
const front = require("./routes/front/index");
//配置路由
router.use("/admin",admin.routes());
router.use(front);

//配置koa-art-template模板引擎
render(app, {
  root: path.join(__dirname, 'views'),//访问路径
  extname: '.html',//后缀
  debug: process.env.NODE_ENV !== 'production'
});


//配置静态web服务的中间件
app.use(static(__dirname));
// app.use(static(__dirname +'/public'));//将目录public配置到3000端口下

app.use(bodyparser())//处理前端提交过来数据


//启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(8008);