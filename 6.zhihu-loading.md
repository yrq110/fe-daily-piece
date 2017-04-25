## zhihu-loading

* date: `2017/04/25`
* source: [知乎](https://www.zhihu.com/)
* demo: [codepen](https://codepen.io/yrq110/pen/YVpzdE)

### HTML
```html
<div class="zh-loading">
    <div class="circle"></div>
    <div class="circle delay-1"></div>
    <div class="circle delay-2"></div>
    <div class="circle delay-3"></div>
</div>
```

### CSS
```css
body {
  margin: 0px; padding: 0px;
}

.zh-loading {
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.circle {
  margin: 0 10px;
  width: 20px;height:20px;
  border-radius: 10px;
  background-color: rgb(0,149,255);
  animation: move 2s infinite;
  position: relative;
}

@keyframes move {
  50% {
    transform: translateY(40px);
  }
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}
```
