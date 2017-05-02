// wrap
var wrap = document.getElementsByClassName("scroller-wrap")[0];
var wrapWidth = wrap.offsetWidth;
var pagerBar = document.getElementsByClassName("pager-bar")[0];
var barSlide = document.getElementsByClassName("bar-slide")[0];
var slideMaxLeft = 270;
var isSlideEnter = false;
var pagerPrev = document.getElementsByClassName("pager-prev")[0];
var pagerNext = document.getElementsByClassName("pager-next")[0];
wrap.onmousedown = function(event){
  var x1 = event.clientX;
  var left = wrap.scrollLeft;
  wrap.onmousemove = function(e){
    var x2 = e.clientX - x1;
    wrap.scrollLeft = left - x2;
    var barLeft = (left-x2)/wrapWidth*slideMaxLeft > 0 ? (left-x2)/wrapWidth*slideMaxLeft : 0;
    barLeft = barLeft < 270 ? barLeft : 270;
    barSlide.style.marginLeft = barLeft + "px";
  }
}

wrap.onmouseup = function(e){
  x = 0; x2 = 0;
  wrap.onmousemove = null;
}

wrap.onmouseleave = function(e) {
  x = 0; x2 = 0;
  wrap.onmousemove = null;
}

pagerBar.onmousedown = function(e) {
  if(!isSlideEnter){
    if(e.offsetX!=0){
      if(e.offsetX > slideMaxLeft){
        barSlide.style.marginLeft = slideMaxLeft + "px";
      }else{
        barSlide.style.marginLeft = e.offsetX + "px";
        wrap.scrollLeft = e.offsetX/slideMaxLeft*wrapWidth;
      }
    }
  }
}

barSlide.onmouseenter = function(e) {
  isSlideEnter = true;
}

var slideLeft = 0;
barSlide.onmousedown = function(e) {
  console.log("slide down " + isSlideEnter);
  console.log(barSlide.style.marginLeft);
  var b1 = e.offsetX;
  console.log("b1: " + b1);
  barSlide.onmousemove = function(e) {
    console.log("b2: " + e.offsetX);
    var b2 = e.offsetX - b1;
    console.log('move: ' + b2);
    slideLeft = parseInt(barSlide.style.marginLeft.split("px")[0]) + b2;
    var slideLeft = slideLeft > 0 ? slideLeft : 0;
    slideLeft = slideLeft < 270 ? slideLeft : 270;
    barSlide.style.marginLeft = slideLeft + "px";
    wrap.scrollLeft = slideLeft/slideMaxLeft*wrapWidth;
  }
}

barSlide.onmouseup = function(e){
  barSlide.onmousemove = null;
}

barSlide.onmouseleave = function(e){
  barSlide.onmousemove = null;
  isSlideEnter = false;
}

pagerPrev.onclick = function(e){
  console.log("prev click");
  if(barSlide.style.marginLeft==''){
    slideLeft = 0;
  }else{
    slideLeft = parseInt(barSlide.style.marginLeft.split("px")[0]) - 50;
    slideLeft = slideLeft < 0 ? 0 : slideLeft;
  }
  barSlide.style.marginLeft = slideLeft + "px";
  wrap.scrollLeft = slideLeft/slideMaxLeft*wrapWidth;
}

pagerNext.onclick = function(e){
  console.log("next click");
  if(barSlide.style.marginLeft==''){
    slideLeft = 50;
  }else{
    slideLeft = parseInt(barSlide.style.marginLeft.split("px")[0]) + 50;
    slideLeft = slideLeft < 270 ? slideLeft : 270;
  }
  barSlide.style.marginLeft = slideLeft + "px";
  wrap.scrollLeft = slideLeft/slideMaxLeft*wrapWidth;
}
