## stackoverflow-label-hint

* date: `2017/04/21`
* source: [Stack Overflow](http://stackoverflow.com/)
* demo: [codepen demo](https://codepen.io/yrq110/pen/KmzJRb)

### HTML
```html
<button id="btn" disabled="disabled">css</button>
<div id="callout">
  <div id="num">229.6k followers, 463.9k questions</div>
  <div id="des">CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of HTML (Hyper Text Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, and fonts.</div>
</div>
```

### CSS
```css
body {
  margin: 0px; padding: 0px;
}

#btn {
  margin: 10px 0 0px 10px;
  border: none;
  outline: none;
  background-color: black;
  color: white;
}

#btn:hover {
  background-color: grey;
}

#callout {
  position: absolute;
  padding: 10px 10px;
  max-width: 400px;
  margin: 0px 20px 0 10px;
  background: black;
  color: white;
  font-size: 75%;
}

#callout {
  transform-origin: 0 0;
  transition: 0.3s transform;
  transition-delay: 1s;
}

#btn:not(:hover) + #callout:not(:hover) {
  transform: scale(0);
  transition: 0.3s transform;
}

#num {
  font-weight: bold;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: white;
}
```
