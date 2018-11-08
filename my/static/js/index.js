(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=1"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(1)");
   parent.innerHTML=html;
})();

(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=2"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(2)");
   parent.innerHTML=html;
})();

(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=3"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(3)");
   parent.innerHTML=html;
})();

(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=4"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(4)");
   parent.innerHTML=html;
})();

(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=5"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(5)");
   parent.innerHTML=html;
})();

(async function(){
  var res = await ajax({
    url:"http://127.0.0.1:3000/index/",
    type:"get",
    dataType:"json",
    data:"pid=6"
  });
   var {pname,pic}=res[0];
   var html=`<div>
			 <img src=${pic}>
			</div>
			<span>${pname}</span>`;
   var parent=document.querySelector(".d1>div.third>div.th_z>div.th_zz>a:nth-child(6)");
   parent.innerHTML=html;
})();