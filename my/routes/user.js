const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//登录
router.post('/login',(req,res)=>{
       var $uname=req.body.uname;
	   var $upwd=req.body.upwd;
   var sql='SELECT * FROM tx_user WHERE uname=? AND upwd=?';
    pool.query(sql,[$uname,$upwd],(err,result)=>{
	     if(err) throw err;
		 if(result.length>0){
		   res.redirect("/index.html");
		 }else{
		   res.send('用户名或者密码错误');
		 }
	
	});
});
//检查用户名称
router.get('/checkUname',(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send('用户名称不能为空');
	return;
  }
  var sql="select * from tx_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('1');//用户名已存在
	}else{
	  res.send('0');//用户名可用
	}
  });
});

router.post('/register',(req,res)=>{
  //获取用户名称并验证
  var $uname=req.body.uname;
  if(!$uname){
    res.send("用户名称不存在");
	return;
  }
  //获取用户密码并验证
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("用户密码不存在");
	return;
  }

//获取用户联系方式并验证
  var $phone=req.body.phone;
  if(!$phone){
    res.send("用户联系方式不存在");
	return;
  }
   //获取用户邮箱并验证
  var $email=req.body.email;
  if(!$email){
    res.send("用户邮箱不存在");
	return;
  }
  var sql="insert into tx_user values(null,?,?,?,?)";
  pool.query(sql,[$uname,$upwd,$phone,$email],(err,result)=>{
     if(result.affectedRows>0){
          if(err) throw err;
		 res.redirect("/index.html");
         // res.send("<script>alert('成功');location.href='http://127.0.0.1:3000/index.html'</script>");
		 }else{
		  res.send("失败");
		 }
  });
});

module.exports=router;