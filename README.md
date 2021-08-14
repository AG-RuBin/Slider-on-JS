# Slider on JS (EN)

Creating a simple Slider function on JavaScript language.

#### HTML

```
    <input type="range" min="0" max="100" step="" oninput="funSl()" id="r1">
    <div id="test"></div>
    <p id="one"></p>
```

#### CSS

```
#test {
    height: 20px;
    width: 20px;
    background: green;
}
```

#### JavaScript

```
function funSl() {
    var rng=document.getElementById('r1');
    var p=document.getElementById('one');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
    p.innerHTML=rng.value;
}
```

# Ползунок на JS (RU)

Создание простой функции ползунка на языке JavaScript.

#### HTML

```
    <input type="range" min="0" max="100" step="" oninput="funSl()" id="r1">
    <div id="test"></div>
    <p id="one"></p>
```

#### CSS

```
#test {
    height: 20px;
    width: 20px;
    background: green;
}
```

#### JavaScript

```
function funSl() {
    var rng=document.getElementById('r1');
    var p=document.getElementById('one');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
    p.innerHTML=rng.value;
}
```
