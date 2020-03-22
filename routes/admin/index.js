const router = require('koa-router')(),
      user = require("./user")


router.use("/user",user);

module.exports = router;
