let counter;
const count = document.getElementById("display");
counter = count.textContent;

document.getElementById("restBtn").onclick = function (){
    count.textContent = 0;
}

document.getElementById("decBtn").onclick = function (){
    counter = Number(count.textContent);
    counter -= 1;
    count.textContent = counter;
}

document.getElementById("incBtn").onclick = function (){
    counter = Number(count.textContent);
    counter += 1;
    count.textContent = counter;
}