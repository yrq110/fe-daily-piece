var cate = document.getElementsByClassName("mu-category")[0];
var main = document.getElementsByClassName("main")[0];

cate.onmouseenter = function(){
  main.className += ' ' + 'blur';
}

cate.onmouseleave = function(){
  main.className = 'main';
}
