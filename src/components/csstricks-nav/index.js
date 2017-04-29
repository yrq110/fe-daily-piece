var ul = document.getElementsByTagName("ul")[0];
var span = document.getElementsByTagName("span");

ul.onmouseenter = function () {
  console.log("ul enter");
  for(var i=0;i<span.length;i++){
    span[i].className = "span-in";
  }
};

ul.onmouseleave = function () {
  console.log("ul enter");
  for(var i=0;i<span.length;i++){
    span[i].className = "span-out";
  }
};
