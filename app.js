const express = require('express');


express.get('/',function(req,res){
    res.json({test: 'test'})
})

express.listen(5500, function(){
    console.log('listening on 5500')
})
