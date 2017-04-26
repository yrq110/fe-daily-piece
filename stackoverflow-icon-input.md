## stackoverflow-icon-input

* date: `2017/04/20`
* source: [Stack Overflow](http://stackoverflow.com/)
* demo: [codepen demo](https://codepen.io/yrq110/pen/dWGrNe)

### HTML
```html
<div id="search">
  <button id="btn" class="in"></button>
  <input name="s" type="text" placeholder="search"/>
</div>
```

### CSS
```css
#search {
    width: 500px;
}

#btn {
    display: inline-block;
    cursor: pointer;
    position: absolute;
    left: 465px; top: 10px;
    height: 42px; width: 41px;
    background-image: url('http://obilz4jlp.bkt.clouddn.com/ic_search_black_24dp_2x.png');
    background-color: rgb(0,149,255);
    border: none;
}

.out {
    visibility: visible;
}

.in {
    visibility: hidden;
}

input{
    float: right;
    width: 200px; height: 40px;
    border-color: grey;
    border-radius: 5px;
    transition: width 0.3s;
    font-size: 20px;
    padding-left: 50px;
    background-image: url('http://obilz4jlp.bkt.clouddn.com/ic_search_black_24dp_2x.png');
    background-repeat: no-repeat;
    background-position: 6px;
}

input:focus {
    width: 450px;
    background: none;
    padding-left: 5px;
}
```

### JS
```js
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

```