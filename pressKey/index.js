
const mybox = document.getElementById("mybox");
const position = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (envet)=>{
    switch(event.key){
        case "ArrowUp":
            y -= position;
            break;
        case "ArrowDown":
            y += position;
            break;
        case "ArrowRight":
            x += position;
            break;
        case "ArrowLeft":
            x -= position;
            break;
    }

    if(y > 0){
        mybox.style.top = `${y}px`;
    }else{
        y = 0;
        mybox.style.top = `${y}px`;
    }
    
    if(x > 0){
        mybox.style.left =`${x}px`;
    }else{
        x = 0;
        mybox.style.left =`${x}px`;
    }
});


document.addEventListener("keydown", (event) =>{
    mybox.textContent = '😎';
    mybox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) =>{
    mybox.textContent = '🙂';
    mybox.style.backgroundColor = "#53f792";
});

