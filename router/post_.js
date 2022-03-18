var express = require("express");
var post_router = express.Router();

post_router.get('/', (req,res,next) => {
    res.send('와다다다다다다다다다다')
})

module.exports=post_router;