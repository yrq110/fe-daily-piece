var btn = document.getElementById("btn");
var input = document.getElementsByName("s")[0];

var a = false;

input.onfocus = function () {
  btn.className = "out";
};

input.onblur = function(){
  if(a == false){
    btn.className = "in";
  }
};

btn.onmouseenter = function () {
  a = true;
};

btn.onfocus = function () {
  a = false;
  input.focus();
};
