let mongodb = require('mongodb');
var express=require('express');
var router = express.Router();



let mongoCt = mongodb.MongoClient;
mongoCt.connect('mongodb://127.0.0.1:27017',(err,client)=>{

    if(!err){
    let db = client.db('2018-3-29');
    let product = db.collection('product');


    product.find({},{
        skip:start*count,
        limit:count,
        fields:{
            name:1,
            price:1,
            _id:0
        }
    }).toArray((err,doc)=>{
        console.log(doc);
})
}
});