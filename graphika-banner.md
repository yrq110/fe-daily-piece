## graphika-banner
* date: `2017/04/27`
* source: [Graphika](http://graphika-inc.com/)
* demo: [codepen](https://codepen.io/yrq110/pen/PmWOEK)

### HTML
```html
<div class="gh-banner">
  <div class="text">
    <span class="txt1">H</span>
    <span class="txt2">E</span>
    <span class="txt3">L</span>
    <span class="txt4">L</span>
    <span class="txt5">O</span>
    <span class="txt6">!</span>
  </div>
  <div class="pic-source">
    pic from Ask
  </div>
</div>
```

### CSS
```css
body {
  position: absolute;
  width: 100%;height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gh-banner {
  display: block;
  position: relative;
  cursor: pointer;
  width: 210px;height: 280px;
  background: url("https://i.pximg.net/img-master/img/2016/10/03/01/19/01/59282386_p4_master1200.jpg") center center no-repeat;
  background-size: contain;
  transition: all 0.3s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
}

.gh-banner:before {
  position: absolute;
  top: 2px;
  left: 2px;
  right: 70%;
  bottom: 70%;
  content: "";
  border-top: transparent 1px solid;
  border-left: transparent 1px solid;
  transition: all 0.3s ease;
}

.gh-banner:after {
  position: absolute;
  top: 70%;
  left: 70%;
  right: 2px;
  bottom: 2px;
  content: "";
  border-bottom: transparent 1px solid;
  border-right: transparent 1px solid;
  transition: all 0.5s ease;
}


.gh-banner:hover {
  transform: translateY(-5px);
}

.gh-banner:hover:before {
  right: 2px;
  bottom: 2px;
  border-top: white 1px solid;
  border-left: white 1px solid;
}

.gh-banner:hover:after {
  top: 2px;
  left: 2px;
  border-bottom: white 1px solid;
  border-right: white 1px solid;
}

.gh-banner .text {
  position: absolute;
  top: -20px;right: 0;left: 0;
  text-align: center;
  font-weight: bolder;
  letter-spacing: 3px;
}

.gh-banner .text span {
  display: inline-block;
  transition: all .3s ease;
}

.gh-banner:hover .text span.txt1 {
  animation: up-down .5s .05s;
}

.gh-banner:hover .text span.txt2 {
  animation: up-down .5s .15s;
}

.gh-banner:hover .text span.txt3 {
  animation: up-down .5s .25s;
}

.gh-banner:hover .text span.txt4 {
  animation: up-down .5s .35s;
}

.gh-banner:hover .text span.txt5 {
  animation: up-down .5s .45s;
}

.gh-banner:hover .text span.txt6 {
  animation: up-down .5s .55s;
}

@keyframes up-down {
  0%, 100%{
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }
}

.pic-source {
  display: inline-block;
  position: absolute;
  bottom: 5px;right: 5px;
  color: white;
}
```
