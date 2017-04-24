## codepen-page-btn

* date: `2017/04/24`
* source: [CodePen](http://codepen.io/)
* demo: [codepen](http://codepen.io/yrq110/pen/gWwbWN)

### HTML
```html
<a href="#" class="cp-btn">
    <span>Next</span>
    <svg fill="#000000" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill="white"/>
    </svg>
</a>
```

### CSS
```css
body {
  background: black;
}

.cp-btn {
  display: inline-block;
}

.cp-btn {
  color: white;
  font-weight: bold;
  border: 4px solid #ccc;
  border-radius: 3px;
  outline: none;
  text-decoration: none;
  overflow: hidden;
}

.cp-btn:hover {
  color: black;
  background-color: white;
  border-color: white;
}

.cp-btn:active {
  transform: translateY(1px);
}

.cp-btn > span {
  font-size: 20px;
  margin-left: 10px;
}

.cp-btn > svg {
  vertical-align: bottom;
}

.cp-btn:hover svg path {
  fill: black;
}
```
