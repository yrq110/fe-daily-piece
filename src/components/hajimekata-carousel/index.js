var l_li = document.querySelectorAll(".section-l .piece");
var l_img = document.querySelectorAll(".section-l .img");
var l_card = document.querySelectorAll(".section-l .card");
var r_li = document.querySelectorAll(".section-r .piece");
var r_img = document.querySelectorAll(".section-r .img");
var r_card = document.querySelectorAll(".section-r .card");
var l_pos = 0;
var r_pos = 0;
var l_length = l_li.length;
var r_length = r_li.length;
// console.log(length);
var isBegin = false;
var liScoller = function(callback,li,img,card,length,pos,dir){
  pos = pos < length ? pos : 0;
  if(dir === 0){l_pos = pos;}else{r_pos = pos;}
  if(isBegin == true){
    if (pos === 0) {
      var i = length - 1;
    }else{
      var i = pos - 1;
    }
    li[i].style.display = "none";
    img[i].style.transform = "translateX(0)";
    card[i].style.top = "0";
    card[i].style.opacity = "0";
  }
  li[pos].style.display = "block";

  console.log("before pos: " + pos);
  console.log("before l_pos: " + l_pos);
  (callback && typeof(callback) === "function") && callback();
}

var l_change = function(){
  setTimeout(function(){
    console.log("l_pos: " + l_pos);
    l_img[l_pos].style.transform = "translateX(-20%)";
    l_card[l_pos].style.top = "10%";
    l_card[l_pos].style.opacity = "1";
    l_pos = l_pos + 1;
  },10)
}

var r_change = function(){
  setTimeout(function(){
    console.log("r_pos: " + r_pos);
    r_img[r_pos].style.transform = "translateX(-20%)";
    r_card[r_pos].style.top = "10%";
    r_card[r_pos].style.opacity = "1";
    r_pos = r_pos + 1;
  },10)
}

liScoller(l_change,l_li,l_img,l_card,l_length,l_pos,0);
liScoller(r_change,r_li,r_img,r_card,r_length,r_pos,1);

isBegin = true;
var timer = setInterval(function(){
  liScoller(l_change,l_li,l_img,l_card,l_length,l_pos,0);
  liScoller(r_change,r_li,r_img,r_card,r_length,r_pos,1);
},5010)
