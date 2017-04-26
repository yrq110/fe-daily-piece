## graphika-hover

* date: `2017/04/26`
* source: [Graphika](http://graphika-inc.com/)
* demo: [codepen](https://codepen.io/yrq110/pen/YVpJzB)


### HTML
```html
<div class="gh">
    <img src="http://graphika-inc.com/images/top/vincentBanner.png" alt="">
    <div class="overlay">
        <div class="caption">Hello world</div>
    </div>
</div>
```

### CSS
```css
.gh {
  display: block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.gh img {
  width: 100%;
  transition: all 0.3s ease;
}

.gh:hover img {
  transform: scale(1.05);
}

.gh .overlay {
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  text-align: center;
  /*background: #e8f409;*/
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;

  background: #e8f409 url('data:image/svg+xml,\
    <svg xmlns="http://www.w3.org/2000/svg" \
       width="100" height="100" \
       fill-opacity=".15"> \
    <rect x="50" width="50" height="50" /> \
    <rect y="50" width="50" height="50" /> \
    </svg>');
  background-size: 30px 30px;
}

.gh:hover .overlay {
  opacity: 0.9;
  transform: scale(1);
}

.gh .caption {
  display: inline-block;
  position: relative;
  top: 50%;
  transform: scale(1) translateY(-20%);
  transition: all 0.3s ease;
}

.gh:hover .caption {
  transform: scale(1.2) translateY(-50%);
}
```
