var express = require('express');
var router = express.Router();
const main = require('../models/main');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
    message : "Success",
    "how to use" : [{
      "method" : [{
        "POST" : [{
          "find all" : "/data",
          "find by id" : "/data/:id",
          "insert" : "/post",
          "insert parameter" : [{
            "lat" : "CHAR",
            "lon" : "CHAR"
          }]
        }],
        "GET" : [{
          "find all" : "/data",
          "find by id" : "/data/:id",
        }],
        "PUT" : [{
          "edit data" : "/edit/:id"
        }],
        "DELETE" : [{
          "delete data" : "/delete/:id"
        }]
      }]
    }],
    "melihat peta" : "/map" 
  }]);
});
router.get('/data',function(req,res,next) {
  main.find().exec(function (error, db){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(db);
    };
  });
});
router.get("/data/:id",function (req,res,next){
  main.findById(req.params.id).exec(function (error, db){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(db);
    };
  });
});
router.post('/data',function(req,res,next) {
  main.find().exec(function (error, db){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(db);
    };
  });
});
router.post("/data/:id",function (req,res,next){
  main.findById(req.params.id).exec(function (error, db){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(db);
    };
  });
});
router.post("/post",function (req,res,next){
  var insert = new main({
        lat : req.body.lat ,
        lon : req.body.lon,
      });
      insert.save(function(error,jadi) {
        if (error) {
          res.json([{
            message : "Failed"
          }]);
        }else{
          res.send(jadi);
        }
      });
});
router.put("/edit/:id",function(req,res,next) {
  main.findByIdAndUpdate(req.params.id, { lat: req.body.lat,lon:req.body.lon }).exec(function (error,up){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(up);
    };
  });
});
router.delete("/delete/:id",function(req,res,next) {
  main.findByIdAndDelete(req.params.id).exec(function (error,up){
    if (error) {
      res.json([{
        message : "Failed"
      }]);
    }else{
      res.send(up);
    };
  });
});
router.get("/map",function (req,res,next) {
  main.findOne({}).sort({'date': -1}).exec(function (error,data) {
    res.render('index',{'title' : "map",map:data});
  })
})
module.exports = router;
