var span = document.querySelectorAll(".main-nav span");
var ul = document.querySelector(".main-nav ul");

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
