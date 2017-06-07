var express = require('express');
var router= express.Router();
var mongo = require('mongodb').MongoClient();

var url="mongodb://localhost:27017/test";

router.get('/tasks',function(req,res,err){
  mongo.connect(url, function(err,db){
    if(err)
      console.log("db connect issue");
    else {

      db.collection('mylist').find({}).toArray(function(err,result){
        console.log("Result", result);
        res.send(result);
      });
    }
  })
});

module.exports= router;
