var express = require("express");
var get_router = express.Router();

get_router.get('/', (req,res,next) => {
    res.send('오호.... ')
})

module.exports=get_router;