function funSl() {
    var rng=document.getElementById('r1');
    var p=document.getElementById('one');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
    p.innerHTML=rng.value;
}