var carousel=document.getElementsByClassName("carousel")[0];
var pic=document.getElementsByClassName("pic");
var div;
var arr=[
	{
		"title":"《宫锁沉香》全网首播！",
		"desc":"&emsp;&emsp;影片讲述了宫女沉香与清康熙第十三子（不计早夭，若计早夭则实为第二十二子）爱新觉罗·胤祥之间的一段一见钟情，却又历经种种误会与磨难，终获幸福的故事。"
	},
	{
		"title":"《金蝉脱壳》曝终极预告片 影片五大看点全揭晓",
		"desc":"&emsp;&emsp;影片讲述的是一个监狱设计师，原计划测试世界上最坚不可摧的监狱，不料却被关入狱中企图灭口。为了复仇，雷必须想办法逃出这座自己亲手设计的全透明无隐私的高压监狱。"
	},
	{
		"title":"《扫毒》曝主题曲MV 刘青云古天乐张家辉反目",
		"desc":"&emsp;&emsp;该片讲述了共同效力于毒品调查科的三个好兄弟，在执行跨国大型扫毒行动时遭遇反卧底，生死关头时为求存活而有了不同表现的故事。"
	},
	{
		"title":"《谁说我们不会爱》杜淳意外走光 颖儿娇羞爆表",
		"desc":"&emsp;&emsp;讲述一群混迹于工体的青年时尚人在一次意外的相识及宿醉之后，发生了一连串让人啼笑皆非又发人深省的故事。"
	},
	{
		"title":"《颤抖吧阿部》李逸能量爆发 阿部陷危机",
		"desc":"&emsp;&emsp;讲述了朵星战士阿部意外坠落地球，寄身于唐家庶女唐青叶身上，并与唐家长子唐青风在残酷的皇权争斗漩涡中相爱相杀的故事。"
	}
]
window.onload=function(){
	carousel.style.position="absolute";
	carousel.style.top="0px";
	carousel.style.left="0px";
	movePic(4);
}
function movePic(num){
	var final_x=-505*num;
	var xpos=parseInt(carousel.style.left);
	var time=1;
	if(-xpos%505==0){
		var mol=-xpos/505;
		createDetail(mol);
		showDiv();	
		time=2000; 
	}
	if(xpos==final_x){
		turnleft();
		return true;	
	}
	if(xpos>final_x){
		xpos=xpos-5;
	}
	carousel.style.left=xpos+"px";
	movement=setTimeout("movePic("+num+")",time);
}
function turnleft(){
	var final_x=0;
	var xpos=parseInt(carousel.style.left);
	var time=1;
	if(-xpos%505==0){
		var mol=-xpos/505;
		createDetail(mol);
		showDiv();	
		time=2000; 	
	}
	if(xpos==final_x){
		movePic(4);
		return true;		
	}
	if(xpos<final_x){
		xpos=xpos+5;
	}
	carousel.style.left=xpos+"px";
	movement=setTimeout("turnleft()",time);
}
function createDetail(num){
	div=document.createElement("div");
	div.className="detail";
	carousel.appendChild(div);
	div.innerHTML="<div class='bg'></div>\
					<h2 class='title'>"+arr[num].title+"</h2>\
					<p class='desc'>"+arr[num].desc+"</p>";
	div.style.left=505*num+"px";
	div.style.bottom="-80px";
}
function showDiv(){
	var final_y=0;
	var ypos=parseInt(div.style.bottom);
	if(ypos==final_y){
		hidden=setTimeout("hiddenDiv()",1000);
		return true;
	}
	if(ypos<final_y){
		ypos++;
	}
	div.style.bottom=ypos+"px";
	show=setTimeout("showDiv()",1);
}
function hiddenDiv(){
	var final_y=-84;
	var ypos=parseInt(div.style.bottom);
	if(ypos==final_y){
		return true;
	}
	if(ypos>final_y){
		ypos--;
	}
	div.style.bottom=ypos+"px";
	hidden=setTimeout("hiddenDiv()",1);
}