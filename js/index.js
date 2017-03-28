var pictures = getAllElem('.banner__picture');
var len = pictures.length;
var banner = getElem('.banner');
var prev = getElem('.prev');
var next = getElem('.next');
var dots = getAllElem('.dotsItem');
var index = 0;
//轮播大图
function slideImg(){
	//图片改变函数 
	var changeImg = function(index){
	for(i=0;i<len;i++){
		pictures[i].style.display = "none";
		delCls(dots[i],'dotsItem_active');
	}
	pictures[index].style.display = "block";
	addCls(dots[index],'dotsItem_active');
	}

	//鼠标移进移出图片改变
	banner.onmouseout = function(){
		timer = setInterval(function(){
		index++;
		if(index>=len)
			index = 0;
		changeImg(index);
		
	},3000)
	}
	banner.onmouseout();
	banner.onmouseover = function(){
	if(timer)
	clearInterval(timer);
	}

	//按圆点切换图片
	var dotsChange = function(idx){
		dots[idx].onclick = function(){
			index = idx;
			changeImg(index);
		}
	}
	for(var i =0;i<len;i++){
		dotsChange(i);
	}
	//按上一张下一站切换图片
	prev.onclick = function(){
		if(index<=0)
			index = len;
		index--;
		changeImg(index);
	}
	next.onclick = function(){
		if(index>=5-1)
			index = 0;
		index++;
		changeImg(index);
	}

	}//slideImg结束
slideImg();

//明星产品图片滚动
var timer = null;
var starTimer = null;
var navArrow = getElem('.nav-arrow');
var starPrev = getElem('.nav-arrow_prev');
var starNext = getElem('.nav-arrow_next');
var isNext = false;
var singleStarWrap = getElem('.singleStar__wrap');
function straImg(){
	var roll= function(isNext){
		if(isNext){
			singleStarWrap.style.transform = "translateX(0)";
		}else{
			singleStarWrap.style.transform = "translateX(-50%)";
		}
	}
	navArrow.onmouseout = function(){
		starTimer = setInterval(function(){
			roll(isNext);
			isNext = !isNext;	
		},3000)
	}
	navArrow.onmouseover = function(){
	if(starTimer)
	clearInterval(starTimer);
	}
	navArrow.onmouseout();
	starPrev.onclick = function(){
		isNext = !isNext;	
		roll(isNext);
			canNext = true;
	}
	starNext.onclick = function(){
		isNext = !isNext;	
		roll(isNext);
		canPrev = true;
	}
}
straImg();