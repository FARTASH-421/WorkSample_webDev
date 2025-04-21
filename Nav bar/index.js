const cl = document.getElementById("close");
const item = document.getElementById("myitme");
const menu = document.getElementById("menu");
const icon = document.getElementsByClassName("icon");


function funClose(){
    item.style.transform = "translateX(-82%)";
    item.style.transition = "all 0.7s";
    menu.style.visibility = "visible"; 
    
    for(let i=0; i< icon.length; i++){
        icon[i].style.fontSize = "2.3rem";
    }
}


function funOpen(){
    menu.style.visibility = "hidden";
    item.style.transform = "translateX(0)";
    item.style.transition = "all 0.7s";
    
    for(let i=0; i< icon.length; i++){
        icon[i].style.fontSize = "1.6rem";
    }

}