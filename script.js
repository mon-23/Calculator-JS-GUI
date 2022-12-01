

let res = document.querySelector('.res')

function make_res(n){
    if(res.innerHTML == 'Math Fail'){
        res.innerHTML = '';
    };
    try{
        if(n == '='){
            res.innerHTML = eval(res.innerHTML);
        }
        else if(n == 'del'){
            res.innerHTML = res.innerHTML.slice(0,-1);
        }
        else if(n == 'c'){
            res.innerHTML = '';
        }
        else{
            if(res.innerHTML.length < 28){
                res.innerHTML += n;
            }
        };
    }
    catch(e){
        res.innerHTML = 'Math Fail';
    };
}




// create button //
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');
let b0 = document.querySelector('.b0');

let bp = document.querySelector('.bp');
let bminus = document.querySelector('.bminus');
let bmulti = document.querySelector('.bmulti');
let bdivi = document.querySelector('.bdivi');
let bbo = document.querySelector('.bbo');
let bbc = document.querySelector('.bbc');
let bequ = document.querySelector('.bequ');
let bdel = document.querySelector('.bdel');
let bc = document.querySelector('.bc');
// create click-event for button //
b1.addEventListener('click', () => {make_res(1);});
b2.addEventListener('click', () => {make_res(2);});
b3.addEventListener('click', () => {make_res(3);});
b4.addEventListener('click', () => {make_res(4);});
b5.addEventListener('click', () => {make_res(5);});
b6.addEventListener('click', () => {make_res(6);});
b7.addEventListener('click', () => {make_res(7);});
b8.addEventListener('click', () => {make_res(8);});
b9.addEventListener('click', () => {make_res(9);});
b0.addEventListener('click', () => {make_res(0);});
bp.addEventListener('click', () => {make_res('+');});
bminus.addEventListener('click', () => {make_res('-');});
bmulti.addEventListener('click', () => {make_res('*');});
bdivi.addEventListener('click', () => {make_res('/');});
bbc.addEventListener('click', () => {make_res(')');});
bbo.addEventListener('click', () => {make_res('(');});
bc.addEventListener('click', () => {make_res('c');});
bdel.addEventListener('click', () => {make_res('del');});
bequ.addEventListener('click', () => {make_res('=');});








