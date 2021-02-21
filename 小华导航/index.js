$(document).ready(function(){
	Bkimg();
	var img7=["","img/01.jpg"];
	//导航栏内容点击，新标签栏打开
	$(".H dt a").prop("target","_blank");
	//对于每个元素，鼠标移入式，加样式
	$(".content-nav li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
	})
	//隐藏元素
	function Disp(){
		$(".H:first").siblings().stop().hide();
	}
	Disp();
	//添加图片背景
	function Bkimg(){
		//学习圈内容图
		var img1=["imgs/lv.png","imgs/c.jpg",
		"imgs/oeasy.png","imgs/bilibili.png",
		"imgs/ps.png","imgs/mookdx.png","imgs/wy.png",
		"imgs/kk.png","imgs/cn.png","imgs/jj.png","imgs/edu.png"];
		//追剧人背景图
		var img2=["imgs/xg.png","imgs/tx.png","imgs/aqy.png",
		"imgs/yk.png","imgs/mgtv.png","imgs/qktv.png",
		"imgs/tiger.png","imgs/dstv.png","imgs/jiexi.jpg"];
		//爱听音乐图
		var img3=["imgs/qqyy.png","imgs/kgyy.jpg","imgs/wyy.png",
		"imgs/kwyy.png","imgs/mgyy.png","imgs/qianqian.png",
		"imgs/listen.png","imgs/5nd.png","imgs/db.png"]
		//软件下载图
		var img4=["imgs/txrj.png","imgs/wolf.png","imgs/free.png",
		"imgs/downj.png","imgs/crx-ss.png","imgs/gg-crx.png","imgs/linzhe.png",]
		//电台图
		var img5=["imgs/qm.png","imgs/xmly.png","imgs/qtfm.png","imgs/lzfm.png"];
		//新闻图
		var img6=["imgs/reb.png","imgs/sssq.png","imgs/news.png"];
		$(".xh-cont1 a").each(function(index,ele){
			$(ele).css({
				background:"url("+img1[index]+")"+" "+"no-repeat",
				backgroundSize:"60px 50px",
				backgroundPosition:"30px 20px"
			})
		})
		$(".xh-cont2 a").each(function(index,ele){
			$(ele).css({
				background:"url("+img2[index]+")"+" "+"no-repeat",
				backgroundSize:"60px 50px",
				backgroundPosition:"30px 20px"
			})
		})
		$(".xh-cont3 a").each(function(index,ele){
			$(ele).css({
				background:"url("+img3[index]+")"+" "+"no-repeat",
				backgroundSize:"60px 50px",
				backgroundPosition:"30px 20px"
			})
		})
		$(".xh-cont4 a").each(function(index,ele){
			$(ele).css({
				background:"url("+img4[index]+")"+" "+"no-repeat",
				backgroundSize:"60px 50px",
				backgroundPosition:"30px 20px"
			})
			})
			$(".xh-cont5 a").each(function(index,ele){
				$(ele).css({
					background:"url("+img5[index]+")"+" "+"no-repeat",
					backgroundSize:"60px 50px",
					backgroundPosition:"30px 20px"
				})
		})
		$(".xh-cont6 a").each(function(index,ele){
				$(ele).css({
					background:"url("+img6[index]+")"+" "+"no-repeat",
					backgroundSize:"60px 50px",
					backgroundPosition:"30px 20px"
				})
		})
		
	}
	
	//鼠标经过事件
	$(".H dt").hover(function(){
		$(this).toggleClass("bkchange");
	})
	//导航栏点击切换事件
	$(".content-nav li").click(function(){
		var i=$(this).index();
		$(".content .H").eq(i).stop().show().siblings().stop().hide();
	})
	
	//切换添加背景格子选项
	$("#setting").click(function(){
		$(".list li").each(function(index,ele){
			$(ele).css({
				background:"url("+img7[index]+")"+" "+"no-repeat",
				backgroundSize:"cover"
			})
		})
		$(this).toggleClass("xuanzuan");
		$(".BK-change").fadeToggle();
	})
	//点击切换不同的背景
	$(".list li").click(function(){
			var index=$(this).index()
		$("body").css({
			background:"url("+img7[index]+")"+" "+"no-repeat",
			backgroundSize:"cover"
		})
		if(index==1){
			$(".content-nav li").css("color","#fff");
			$(".H dt a").css({
				color:"#000",
				fontFamily:"楷体"
			});
			}
			else{
					$(".content-nav li").css("color","");
					$(".H dt a").css("color","");
			}
	})
		
		
	})	

	
	

