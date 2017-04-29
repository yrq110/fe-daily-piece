var nav = document.getElementsByClassName("mu-nav")[0];
var num = nav.offsetTop;
var des = document.getElementsByClassName("des")[0];
var bagger = document.getElementsByClassName("bagger")[0];
var pageTop = document.getElementsByClassName("page-top")[0];
var timer = null;
window.onscroll = function(){
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if(scrollTop > num){
    nav.className = "mu-nav fixed";
    des.className = "des none";
    bagger.className = "bagger display";
    pageTop.className = "page-top display";
  }else{
    nav.className = "mu-nav top";
    des.className = "des display";
    bagger.className = "des none";
    pageTop.className = "page-top none";
  }
};

pageTop.onclick = function() {
  cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if(scrollTop > 0){
        console.log(scrollTop);
        window.scrollTo(0,scrollTop-30);
        timer = requestAnimationFrame(fn);
      }else {
        cancelAnimationFrame(timer);
      }
    });
}
