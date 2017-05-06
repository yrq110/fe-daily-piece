var li = document.getElementsByClassName("pic");
var content = document.getElementsByClassName("content");
var sb = document.getElementsByClassName("statusbar")[0];
var pos = li.length;
var direction = -1;
var x = 0;
console.log(sb.style);
var liScoller = function(callback){
  if(direction>0){
    content[pos].style.transform = "translateX(0px)";
    content[pos].style.opacity = "1";

    li[pos].style.width =  "100%";
    pos = pos + direction;
    if (pos==li.length){ direction = -1; }
  }else{
    content[pos+direction].style.transform = "translateX(-30px)";
    content[pos+direction].style.opacity = "0";

    li[pos+direction].style.width = 0 + "px";
    pos = pos + direction;
    if (pos==1){ direction = 1; }
  }
  sb.style.transitionDuration = "0.1s";
  sb.style.top = "-100%";

  (callback && typeof(callback) === "function") && callback();
}

var sbMove = function(){
  setTimeout(function(){
    sb.style.transitionDuration = "3s";
    sb.style.top = "0%";
  },3000)
}

sbMove();

var timer = setInterval(function(){
  liScoller(sbMove);
}, 6000)
