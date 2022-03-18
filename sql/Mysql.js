var express = require('express')
var router = express.Router();
var mysql = require('mysql')
var dbconfig = require('../db/dbconfig')
var ccc = mysql.createConnection(dbconfig)

router.get('/ges', (req,res,next) => {
    ccc.query('SELECT * FROM react_suppose.suppose', (error, result) =>{
        if(error) throw error;
        res.send(result)
        })
})

module.exports = router;