let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value*2.5+'px';
    leaf.style.top = -2.5*value+'px';
    leaf.style.left = 1.5*value+'px';
    hill5.style.left = 1.5*value + 'px';
    hill4.style.left = -1.5*value + 'px';
    hill1.style.top = value*0.9 + 'px';

    if (value>1000) {
    hill1.style.top =  '0px';
    }

})

