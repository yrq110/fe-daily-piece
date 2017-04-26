## mongo-nav-btn

* date: `2017/04/17`
* source: [MongoDB homepage](https://www.mongodb.com/)
* demo: [codepen](https://codepen.io/yrq110/pen/mmeMEE)

### HTML
```html
<div class="btn">
  <div class="text">Button</div>
</div>
```

### CSS
```css
body {
  position: absolute;
  width: 100%;height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.btn::before{
  content:'';
  position:absolute;
  margin-top:30px;
  width:0;
  height:5px;
  transition: width 0.5s;
  background-color: white;
}

.btn{
  cursor:pointer;
  position:relative;
  display:inline-block;
  width:100px;
  height:35px;
  background-color: black;
}

.btn:hover::before{
  width: 30px;
  
}
.text {
  margin: 5px auto;
  text-align: center;
  color: white;
}
```
