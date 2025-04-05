const start =document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const display = document.getElementById('display');
const boxInpu = document.getElementById('boxInpu');
const textBt = document.getElementById('textBt');

const bt = document.getElementById("Text");


function editFun(){
    
    boxInpu.style.visibility = "visible";
    // reset.style.backgroundColor = "red";
}


function closeFun(){
    boxInpu.style.visibility = "hidden";
}

function submetFun(){

    boxInpu.style.visibility = "hidden";
}