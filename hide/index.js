const mycard = document.getElementById("mycard");
const hideBut = document.getElementById("Hidden");

hideBut.addEventListener("click", (event) =>{

   if( mycard.style.display === "none"){
        mycard.style.display = "block";
        hideBut.textContent= "Hide"
   }else{
        mycard.style.display = "none";
        hideBut.textContent= "Show";
   }
});