function init(){
	//获取图片大框
var sli=document.getElementById('sli_img');
//获取小圆点
var li=document.getElementsByClassName('same');
li[0].style.backgroundColor='red';
var i=0;
function auto(){
	i++;
	if(i<=2){
	sli.style.left=-i*1490+'px';
	li[i].style.backgroundColor='red';
	li[i-1].style.backgroundColor='transparent';
	}
	else{
		sli.style.left=0+'px';
		li[2].style.backgroundColor='transparent';
		li[0].style.backgroundColor='red';
		i=0;
	}
}

t=setInterval(auto,2000);
/*
sli.onmouseover=function(){
	clearInterval(t);
}
sli.onmouseout=function(){
	t=setInterval(auto,2000);
}*/

     li[0].onclick=function(){
          li[0].style.backgroundColor='red';
          li[1].style.backgroundColor='transparent';
          li[2].style.backgroundColor='transparent';
          clearInterval(t);
          sli.style.left=0+'px';
          i=0;
          t=setInterval(auto,2000);
     }
     li[1].onclick=function(){
          li[1].style.backgroundColor='red';
          li[0].style.backgroundColor='transparent';
          li[2].style.backgroundColor='transparent';
          clearInterval(t);
          sli.style.left=-1*1490+'px';
          i=1;
          t=setInterval(auto,2000);
     }
     li[2].onclick=function(){
          li[2].style.backgroundColor='red';
          li[1].style.backgroundColor='transparent';
          li[0].style.backgroundColor='transparent';
          clearInterval(t);
          sli.style.left=-2*1490+'px';
          i=2;
          t=setInterval(auto,2000);
     }
	 

}