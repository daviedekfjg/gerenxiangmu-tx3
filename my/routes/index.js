const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
 router.get("/",(req,res)=>{
   var pid=req.query.pid,obj={
       product:{}
   }; 
  var sql="SELECT * FROM tx_th_pic where pid=?";
    pool.query(sql,[pid],(err,result)=>{
      if(err) console.log(err);
      res.send(result);
    })
})

module.exports=router;