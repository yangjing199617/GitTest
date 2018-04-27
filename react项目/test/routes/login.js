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
    console.log('获取cookies',req.session);
    console.log('获取前端提交信息',req.query);
    mongoCt.connect("mongodb://127.0.0.1:27017",(err,client)=>{
        if(!err){
            let db = client.db("index");
            let user = db.collection("user");


            user.find({"username":req.query.username,"password":req.query.password},{}).toArray((err,doc)=>{
                 console.log(doc)
                //res.send(doc)
                if(doc.length!=0){
                    console.log(doc)
                    req.session.username=req.query.username;
                    res.send({error:0,msg:'OK',data:doc[0]});
                }else{
                    res.send({error:1,msg:'error'});
                }
            })

        }
    })
})


module.exports = router
