/**
 * Created by Administrator on 2018/4/13.
 */
/**
 * Created by Administrator on 2018/4/13.
 */
var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
router.get('/',function(req,res,next){
    mongoCt.connect("mongodb://127.0.0.1:27017",(err,client)=>{
        if(!err){
            let db = client.db("obj");
            let tsconfig = db.collection("tsconfig");

            tsconfig.find({},{}).toArray((err,doc)=>{
                // console.log(doc)
                res.send(doc)
            })

        }
    })
})


module.exports = router
