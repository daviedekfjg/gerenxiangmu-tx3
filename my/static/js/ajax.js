

/*function ajax(url){
  return new Promise(function(open,err){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        if(Math.random()<0.5){
          console.log(xhr.responseText);
          open();
        }else{
          err("有人摔倒了!");
        }
      } 
    }
    xhr.open("get",url,true);
    xhr.send(null);
  })
}*/
function ajax({url,type,data,dataType}){
  return new Promise(function(open,err){
		//1. 创建xhr对象
		var xhr=new XMLHttpRequest();
		//2.绑定监听事件
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(dataType!==undefined
					&&dataType.toLowerCase()==="json")
					var res=JSON.parse(xhr.responseText)
				else
					var res=xhr.responseText
					
				open(res);
			}
		}
		if(type.toLowerCase()=="get"&&data!=undefined){
			url+="?"+data;
		}
		//3.打开连接
		xhr.open(type,url,true);
		if(type.toLowerCase()==="post")
			//增加：设置请求消息头
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//4.发送请求
		if(type.toLowerCase()=="post"&&data!==undefined)
			xhr.send(data);
		else
			xhr.send(null);
  })
}