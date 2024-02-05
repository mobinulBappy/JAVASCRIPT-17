let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let result = document.querySelector('.result');

inc.addEventListener('click', function(){
    result.value = Number(result.value) +1;
})
dec.addEventListener('click', function(){
    if(result.value > 1){
        result.value = Number(result.value) -1;
        dec.style.cursor = 'not-allowed';
    }
})
inc.addEventListener('click', function(){
    if(result.value < 5){
        result.value = Number(result.value) +2;
        inc.style.cursor = 'not-allowed';
    }
})

// NAVBER STARTS 

let btn = document.querySelector('.btn')
let bar = document.querySelector('.bar')

btn.addEventListener('click',function(){
    bar.classList.toggle('active')
})
//range

let range = document.querySelector('.range');
let output = document.querySelector('.output');

range.addEventListener('input',function(){
    output.innerHTML = range.value + "tk"
})