var express = require('express')
var app = express();

var getsend = require("./router/get_")
var postsend = require("./router/post_")

app.get('/', (req,res,next) => {
    res.send('출력되라되라되라')
})

app.listen(5000,() => {
    console.log('이거는 콘솔창에만 나오는거');
})

app.use('/getsend', getsend)
app.use('/postsend', postsend)